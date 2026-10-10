using System.Text.Json;
using SMWebApp.Server.Models;

namespace SMWebApp.Server.Services;

public interface IRouteMetaService
{
    RouteMeta GetMeta(string path);
}

public sealed class RouteMetaService : IRouteMetaService
{
    private const string DefaultTitle = "Sandeep MVN | Azure Architect | .NET Developer | React Engineer | AI Integration";
    private const string DefaultDescription =
        "Senior Software Engineer and Technical Lead specializing in Azure, ASP.NET Core, React, AI integrations, DevOps automation, and enterprise cloud platforms.";

    private readonly Dictionary<string, RouteMeta> _staticRoutes = BuildStaticRoutes();
    private readonly Dictionary<string, RouteMeta> _blogRoutes;

    public RouteMetaService(IWebHostEnvironment env)
    {
        _blogRoutes = LoadBlogRoutes(env);
    }

    public RouteMeta GetMeta(string path)
    {
        var normalized = NormalizePath(path);

        if (_staticRoutes.TryGetValue(normalized, out var staticMeta))
            return staticMeta;

        if (normalized.StartsWith("/blog/", StringComparison.OrdinalIgnoreCase))
        {
            var slug = normalized["/blog/".Length..];
            if (_blogRoutes.TryGetValue(slug, out var blogMeta))
                return blogMeta;
        }

        return new RouteMeta(Title: DefaultTitle, Description: DefaultDescription, CanonicalPath: path);
    }

    private static string NormalizePath(string path)
    {
        var trimmed = path.TrimEnd('/').ToLowerInvariant();
        return string.IsNullOrEmpty(trimmed) ? "/" : trimmed;
    }

    private static Dictionary<string, RouteMeta> BuildStaticRoutes() => new()
    {
        ["/"] = new RouteMeta(
            Title: DefaultTitle,
            Description: DefaultDescription,
            CanonicalPath: "/"),

        ["/about"] = new RouteMeta(
            Title: "About | Sandeep MVN",
            Description: "10+ years building enterprise software on Azure. Senior Software Engineer and Technical Lead specializing in cloud-native architecture, AI integration, and full-stack engineering.",
            CanonicalPath: "/about"),

        ["/open-source"] = new RouteMeta(
            Title: "Open Source | Sandeep MVN",
            Description: "React PDF Annotator V2 — a TypeScript PDF annotation library built with PDF.js and pdf-lib, replacing Syncfusion at zero cost.",
            CanonicalPath: "/open-source"),

        ["/blog"] = new RouteMeta(
            Title: "Blog | Sandeep MVN",
            Description: "Engineering insights on Azure architecture, ASP.NET Core, React, AI integration, and DevOps automation.",
            CanonicalPath: "/blog"),

        ["/speaking"] = new RouteMeta(
            Title: "Speaking | Sandeep MVN",
            Description: "Microsoft Certified Trainer delivering technical sessions on Azure, ASP.NET Core, AI development, GitHub Copilot, and DevOps practices.",
            CanonicalPath: "/speaking"),

        ["/contact"] = new RouteMeta(
            Title: "Contact | Sandeep MVN",
            Description: "Get in touch to discuss cloud architecture, AI integration, full-stack engineering, or consulting opportunities.",
            CanonicalPath: "/contact"),
    };

    private static Dictionary<string, RouteMeta> LoadBlogRoutes(IWebHostEnvironment env)
    {
        if (env.WebRootPath is null) return [];

        var manifestPath = Path.Combine(env.WebRootPath, "content-manifest.json");
        if (!File.Exists(manifestPath)) return [];

        try
        {
            var json = File.ReadAllText(manifestPath);
            var manifest = JsonSerializer.Deserialize<ContentManifest>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            });

            return manifest?.Blog?.ToDictionary(
                p => p.Slug,
                p => new RouteMeta(
                    Title: $"{p.Title} | Sandeep MVN",
                    Description: p.Summary,
                    CanonicalPath: $"/blog/{p.Slug}",
                    Type: "article")) ?? [];
        }
        catch
        {
            return [];
        }
    }

    private sealed record ContentManifest(BlogPost[]? Blog);

    private sealed record BlogPost(string Slug, string Title, string Summary, string Date, string[] Tags);
}
