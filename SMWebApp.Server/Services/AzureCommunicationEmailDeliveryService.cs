using Azure;
using Azure.Communication.Email;
using Microsoft.Extensions.Options;
using SMWebApp.Server.Models;
using SMWebApp.Server.Options;

namespace SMWebApp.Server.Services;

public sealed class AzureCommunicationEmailDeliveryService : IEmailDeliveryService
{
    private readonly AzureCommunicationEmailOptions _options;
    private readonly ILogger<AzureCommunicationEmailDeliveryService> _logger;

    public AzureCommunicationEmailDeliveryService(
        IOptions<AzureCommunicationEmailOptions> options,
        ILogger<AzureCommunicationEmailDeliveryService> logger)
    {
        _options = options.Value;
        _logger = logger;
    }

    public Task<EmailDeliveryResult> SendContactAsync(ContactRequest request, CancellationToken cancellationToken)
    {
        var subject = $"Portfolio contact from {request.Name}";
        var plainText = $"""
            Name: {request.Name}
            Email: {request.Email}
            Company: {request.Company}

            Message:
            {request.Message}
            """;

        var html = $"""
            <h2>Portfolio contact</h2>
            <p><strong>Name:</strong> {Escape(request.Name)}</p>
            <p><strong>Email:</strong> {Escape(request.Email)}</p>
            <p><strong>Company:</strong> {Escape(request.Company ?? "Not provided")}</p>
            <p><strong>Message:</strong></p>
            <p>{Escape(request.Message).ReplaceLineEndings("<br />")}</p>
            """;

        return SendAsync(subject, plainText, html, cancellationToken);
    }

    public Task<EmailDeliveryResult> SendNewsletterAsync(NewsletterRequest request, CancellationToken cancellationToken)
    {
        var subject = "New portfolio newsletter signup";
        var plainText = $"""
            Name: {request.Name}
            Email: {request.Email}
            """;

        var html = $"""
            <h2>Newsletter signup</h2>
            <p><strong>Name:</strong> {Escape(request.Name ?? "Not provided")}</p>
            <p><strong>Email:</strong> {Escape(request.Email)}</p>
            """;

        return SendAsync(subject, plainText, html, cancellationToken);
    }

    private async Task<EmailDeliveryResult> SendAsync(
        string subject,
        string plainText,
        string html,
        CancellationToken cancellationToken)
    {
        if (!_options.IsConfigured)
        {
            _logger.LogWarning("Azure Communication Services Email settings are not configured.");
            return new EmailDeliveryResult(Sent: false, Configured: false);
        }

        var client = new EmailClient(_options.ConnectionString);
        var message = new EmailMessage(
            senderAddress: _options.SenderAddress,
            content: new EmailContent(subject)
            {
                PlainText = plainText,
                Html = html,
            },
            recipients: new EmailRecipients([
                new EmailAddress(_options.RecipientAddress)
            ]));

        var operation = await client.SendAsync(WaitUntil.Started, message, cancellationToken);
        return new EmailDeliveryResult(Sent: true, Configured: true, operation.Id);
    }

    private static string Escape(string value)
    {
        return System.Net.WebUtility.HtmlEncode(value);
    }
}
