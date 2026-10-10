namespace SMWebApp.Server.Options;

public sealed class AzureCommunicationEmailOptions
{
    public const string SectionName = "AzureCommunicationEmail";

    public string? ConnectionString { get; init; }

    public string? SenderAddress { get; init; }

    public string? RecipientAddress { get; init; }

    public bool IsConfigured =>
        !string.IsNullOrWhiteSpace(ConnectionString)
        && !string.IsNullOrWhiteSpace(SenderAddress)
        && !string.IsNullOrWhiteSpace(RecipientAddress);
}
