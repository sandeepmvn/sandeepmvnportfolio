using System.Text;
using SMWebApp.Server.Models;
using SMWebApp.Server.Services;

namespace SMWebApp.Server.Middleware;

public sealed class SeoMiddleware
{
    private const string BaseUrl = "https://buildwithsandeepmvn.com";
    private const string Keywords = "Azure Architect, Dotnet Developer, React Developer, Technical Lead, Azure DevOps, AI Engineer, Microsoft Certified Trainer";
    private const string SsrStart = "<!-- SSR_HEAD_START -->";
    private const string SsrEnd = "<!-- SSR_HEAD_END -->";

    private readonly RequestDelegate _next;
    private readonly IWebHostEnvironment _env;
    private volatile string? _template;

    public SeoMiddleware(RequestDelegate next, IWebHostEnvironment env)
    {
        _next = next;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context, IRouteMetaService metaService)
    {
        var path = context.Request.Path.Value ?? "/";

        if (!ShouldIntercept(context, path))
        {
            await _next(context);
            return;
        }

        var template = await LoadTemplateAsync();
        if (template is null || !template.Contains(SsrStart, StringComparison.Ordinal))
        {
            await _next(context);
            return;
        }

        var meta = metaService.GetMeta(path);
        var html = InjectMeta(template, meta);

        context.Response.ContentType = "text/html; charset=utf-8";
        context.Response.StatusCode = 200;
        await context.Response.WriteAsync(html, Encoding.UTF8);
    }

    private static bool ShouldIntercept(HttpContext context, string path)
    {
        if (path.StartsWith("/api/", StringComparison.OrdinalIgnoreCase))
            return false;

        if (Path.HasExtension(path))
            return false;

        var accept = context.Request.Headers.Accept.ToString();
        if (!string.IsNullOrEmpty(accept) && !accept.Contains("text/html", StringComparison.OrdinalIgnoreCase))
            return false;

        return true;
    }

    private async Task<string?> LoadTemplateAsync()
    {
        if (_template is not null) return _template;

        if (_env.WebRootPath is null) return null;

        var indexPath = Path.Combine(_env.WebRootPath, "index.html");
        if (!File.Exists(indexPath)) return null;

        _template = await File.ReadAllTextAsync(indexPath);
        return _template;
    }

    private static string InjectMeta(string template, RouteMeta meta)
    {
        var baseUri = new Uri(BaseUrl);
        var canonical = new Uri(baseUri, meta.CanonicalPath).ToString();
        var absoluteImage = new Uri(baseUri, meta.Image).ToString();
        var fullTitle = meta.Title.Contains("Sandeep MVN") ? meta.Title : $"{meta.Title} | Sandeep MVN";

        var block = new StringBuilder();
        block.AppendLine(SsrStart);
        block.AppendLine($"    <meta charset=\"UTF-8\" />");
        block.AppendLine($"    <link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />");
        block.AppendLine($"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />");
        block.AppendLine($"    <title>{HtmlEncode(fullTitle)}</title>");
        block.AppendLine($"    <meta name=\"description\" content=\"{HtmlEncode(meta.Description)}\" />");
        block.AppendLine($"    <meta name=\"keywords\" content=\"{Keywords}\" />");
        block.AppendLine($"    <link rel=\"canonical\" href=\"{canonical}\" />");
        block.AppendLine($"    <meta property=\"og:title\" content=\"{HtmlEncode(fullTitle)}\" />");
        block.AppendLine($"    <meta property=\"og:description\" content=\"{HtmlEncode(meta.Description)}\" />");
        block.AppendLine($"    <meta property=\"og:type\" content=\"{meta.Type}\" />");
        block.AppendLine($"    <meta property=\"og:url\" content=\"{canonical}\" />");
        block.AppendLine($"    <meta property=\"og:image\" content=\"{absoluteImage}\" />");
        block.AppendLine($"    <meta name=\"twitter:card\" content=\"summary_large_image\" />");
        block.AppendLine($"    <meta name=\"twitter:title\" content=\"{HtmlEncode(fullTitle)}\" />");
        block.AppendLine($"    <meta name=\"twitter:description\" content=\"{HtmlEncode(meta.Description)}\" />");
        block.AppendLine($"    <meta name=\"twitter:image\" content=\"{absoluteImage}\" />");
        block.Append($"    {SsrEnd}");

        var start = template.IndexOf(SsrStart, StringComparison.Ordinal);
        var end = template.IndexOf(SsrEnd, StringComparison.Ordinal) + SsrEnd.Length;

        return string.Concat(template.AsSpan(0, start), block, template.AsSpan(end));
    }

    private static string HtmlEncode(string value) =>
        value.Replace("&", "&amp;")
             .Replace("<", "&lt;")
             .Replace(">", "&gt;")
             .Replace("\"", "&quot;");
}
