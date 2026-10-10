using Microsoft.AspNetCore.Mvc;
using SMWebApp.Server.Models;
using SMWebApp.Server.Services;

namespace SMWebApp.Server.Controllers;

[ApiController]
[Route("api/contact")]
public sealed class ContactController : ControllerBase
{
    private readonly IEmailDeliveryService _emailDeliveryService;
    private readonly IHostEnvironment _environment;
    private readonly ILogger<ContactController> _logger;

    public ContactController(
        IEmailDeliveryService emailDeliveryService,
        IHostEnvironment environment,
        ILogger<ContactController> logger)
    {
        _emailDeliveryService = emailDeliveryService;
        _environment = environment;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<ApiResponse>> Post(ContactRequest request, CancellationToken cancellationToken)
    {
        var result = await _emailDeliveryService.SendContactAsync(request, cancellationToken);

        if (result.Configured)
        {
            return Ok(new ApiResponse(true, "Thanks, your message was sent."));
        }

        if (_environment.IsDevelopment())
        {
            _logger.LogInformation("Accepted contact request in development without email delivery configured.");
            return Ok(new ApiResponse(true, "Thanks, your message was received locally."));
        }

        return StatusCode(
            StatusCodes.Status503ServiceUnavailable,
            new ApiResponse(false, "Contact delivery is temporarily unavailable."));
    }
}
