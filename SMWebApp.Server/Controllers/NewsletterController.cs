using Microsoft.AspNetCore.Mvc;
using SMWebApp.Server.Models;
using SMWebApp.Server.Services;

namespace SMWebApp.Server.Controllers;

[ApiController]
[Route("api/newsletter")]
public sealed class NewsletterController : ControllerBase
{
    private readonly IEmailDeliveryService _emailDeliveryService;
    private readonly IHostEnvironment _environment;
    private readonly ILogger<NewsletterController> _logger;

    public NewsletterController(
        IEmailDeliveryService emailDeliveryService,
        IHostEnvironment environment,
        ILogger<NewsletterController> logger)
    {
        _emailDeliveryService = emailDeliveryService;
        _environment = environment;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<ApiResponse>> Post(NewsletterRequest request, CancellationToken cancellationToken)
    {
        var result = await _emailDeliveryService.SendNewsletterAsync(request, cancellationToken);

        if (result.Configured)
        {
            return Ok(new ApiResponse(true, "Thanks, you are on the newsletter list."));
        }

        if (_environment.IsDevelopment())
        {
            _logger.LogInformation("Accepted newsletter signup in development without email delivery configured.");
            return Ok(new ApiResponse(true, "Thanks, your signup was received locally."));
        }

        return StatusCode(
            StatusCodes.Status503ServiceUnavailable,
            new ApiResponse(false, "Newsletter signup is temporarily unavailable."));
    }
}
