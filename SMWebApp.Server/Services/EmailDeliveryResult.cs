namespace SMWebApp.Server.Services;

public sealed record EmailDeliveryResult(bool Sent, bool Configured, string? ProviderMessageId = null);
