using System.ComponentModel.DataAnnotations;

namespace SMWebApp.Server.Models;

public sealed class ContactRequest
{
    [Required]
    [MinLength(2)]
    [MaxLength(120)]
    public string Name { get; init; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(254)]
    public string Email { get; init; } = string.Empty;

    [MaxLength(160)]
    public string? Company { get; init; }

    [Required]
    [MinLength(10)]
    [MaxLength(4000)]
    public string Message { get; init; } = string.Empty;
}
