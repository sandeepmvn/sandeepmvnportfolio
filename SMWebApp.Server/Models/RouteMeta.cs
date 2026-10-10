namespace SMWebApp.Server.Models;

public sealed record RouteMeta(
    string Title,
    string Description,
    string CanonicalPath,
    string Image = "/og-image.svg",
    string Type = "website");
