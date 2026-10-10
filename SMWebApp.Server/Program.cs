using SMWebApp.Server.Middleware;
using SMWebApp.Server.Options;
using SMWebApp.Server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.Configure<AzureCommunicationEmailOptions>(
    builder.Configuration.GetSection(AzureCommunicationEmailOptions.SectionName));
builder.Services.AddScoped<IEmailDeliveryService, AzureCommunicationEmailDeliveryService>();
builder.Services.AddSingleton<IRouteMetaService, RouteMetaService>();
builder.Services.AddOpenApi();

var app = builder.Build();
app.UseStaticFiles();
app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseMiddleware<SeoMiddleware>();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
