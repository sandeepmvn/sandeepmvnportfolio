using System.ComponentModel.DataAnnotations;

namespace SMWebApp.Server.Models;

public sealed class NewsletterRequest
{
    [MaxLength(120)]
    public string? Name { get; init; }

    [Required]
    [EmailAddress]
    [MaxLength(254)]
    public string Email { get; init; } = string.Empty;
}
