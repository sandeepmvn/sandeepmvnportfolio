namespace SMWebApp.Server.Models;

public sealed record MetadataDto(
    string Slug,
    string Title,
    string Summary,
    string Date,
    string[] Tags,
    bool Featured,
    string CanonicalPath,
    string[]? TechStack = null);
