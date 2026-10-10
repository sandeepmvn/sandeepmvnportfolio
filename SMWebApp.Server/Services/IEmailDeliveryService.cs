using SMWebApp.Server.Models;

namespace SMWebApp.Server.Services;

public interface IEmailDeliveryService
{
    Task<EmailDeliveryResult> SendContactAsync(ContactRequest request, CancellationToken cancellationToken);

    Task<EmailDeliveryResult> SendNewsletterAsync(NewsletterRequest request, CancellationToken cancellationToken);
}
