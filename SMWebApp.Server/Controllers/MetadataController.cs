using Microsoft.AspNetCore.Mvc;
using SMWebApp.Server.Models;

namespace SMWebApp.Server.Controllers;

[ApiController]
public sealed class MetadataController : ControllerBase
{
    private static readonly MetadataDto[] Projects =
    [
        new(
            "wpi",
            "Warranty Processing Platform (WPI)",
            "Cloud-native warranty claims management platform replacing a legacy system with Azure-based architecture and AI automation.",
            "2026-01-15",
            ["Azure", "ASP.NET Core", "React", "Power BI", "Azure AI"],
            true,
            "/projects/wpi",
            ["Azure", "ASP.NET Core", "React", "Power BI", "Azure AI"]),
        new(
            "riskdx",
            "RiskDX",
            "Digital insurance distribution platform supporting quoting, underwriting, and policy delivery workflows.",
            "2025-10-20",
            ["ASP.NET Core", "Angular", "Azure", "Power BI"],
            true,
            "/projects/riskdx",
            ["ASP.NET Core", "Angular", "Azure", "Power BI"]),
        new(
            "elixir-social",
            "Elixir Social",
            "Healthcare-first social networking platform with AI-powered content intelligence and HIPAA-compliant architecture.",
            "2025-08-12",
            ["React", "React Native", "ASP.NET Core", "Azure", "AI"],
            true,
            "/projects/elixir-social",
            ["React", "React Native", "ASP.NET Core", "Azure"])
    ];

    private static readonly MetadataDto[] BlogPosts =
    [
        new(
            "azure-ai-workflows",
            "Building AI Workflows on Azure Without Losing Engineering Discipline",
            "Practical patterns for adding AI to business workflows while keeping systems observable, testable, and maintainable.",
            "2026-02-10",
            ["Azure", "AI", "Architecture"],
            true,
            "/blog/azure-ai-workflows"),
        new(
            "cloud-native-dotnet",
            "Cloud-Native .NET Systems That Stay Maintainable",
            "A short architecture note on boundaries, deployment ergonomics, and operational clarity for ASP.NET Core systems.",
            "2026-01-28",
            [".NET", "Azure", "Backend"],
            true,
            "/blog/cloud-native-dotnet"),
        new(
            "react-enterprise-ui",
            "Designing React Interfaces For Enterprise Workflows",
            "Notes on building frontend experiences that support scanning, repeated action, and reliable decision-making.",
            "2025-12-18",
            ["React", "TypeScript", "Frontend"],
            true,
            "/blog/react-enterprise-ui")
    ];

    [HttpGet("api/projects")]
    public ActionResult<IReadOnlyCollection<MetadataDto>> GetProjects()
    {
        return Ok(Projects);
    }

    [HttpGet("api/blog")]
    public ActionResult<IReadOnlyCollection<MetadataDto>> GetBlog()
    {
        return Ok(BlogPosts);
    }
}
