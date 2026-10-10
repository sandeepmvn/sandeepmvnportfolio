import {
  Blocks,
  Bot,
  Cloud,
  Code2,
  GitBranch,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

export const siteConfig = {
  name: "Build With Sandeep MVN",
  shortName: "Sandeep MVN",
  projectName: "buildwithsandeepmvn",
  baseUrl: "https://buildwithsandeepmvn.com",
  email: "hello@buildwithsandeepmvn.com",
  description:
    "Senior Software Engineer and Technical Lead specializing in Azure, ASP.NET Core, React, AI integrations, DevOps automation, and enterprise cloud platforms.",
  keywords: [
    "Azure Architect",
    "Dotnet Developer",
    "React Developer",
    "Technical Lead",
    "Azure DevOps",
    "AI Engineer",
    "Microsoft Certified Trainer",
  ],
  social: {
    linkedIn: "https://www.linkedin.com/in/sandeepmvn",
    github: "https://github.com/sandeepmvn",
    npm: "https://www.npmjs.com/~sandeepmvn",
  },
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Open Source", href: "/open-source" },
  { label: "Blog", href: "/blog" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
]

export const trustBadges = [
  "10+ Years Experience",
  "Microsoft Certified Trainer",
  "Top 100 Quality Award",
  "Azure Certified Architect",
  "Open Source Contributor",
]

export const domains = [
  "Insurance Technology",
  "Healthcare Platforms",
  "Automotive Claims Systems",
  "AI Workflow Automation",
  "Media Platforms",
]

export const expertise = [
  {
    title: "Cloud Architecture",
    description: "Designing scalable cloud-native systems on Microsoft Azure.",
    icon: Cloud,
  },
  {
    title: "Backend Engineering",
    description: "Building reliable APIs and enterprise platforms using ASP.NET Core and .NET.",
    icon: ServerCog,
  },
  {
    title: "Frontend Engineering",
    description: "Developing modern, high-performance web applications using React and TypeScript.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    description: "Building AI-enabled workflows with Azure AI Foundry, Semantic Kernel, and RAG systems.",
    icon: Bot,
  },
  {
    title: "DevOps Automation",
    description: "CI/CD pipelines, infrastructure automation, deployment optimization.",
    icon: GitBranch,
  },
  {
    title: "Open Source",
    description: "Publishing reusable engineering tools for the developer community.",
    icon: Blocks,
  },
]

export const certifications = [
  "Microsoft Certified Trainer (MCT)",
  "Azure Solutions Architect Expert",
  "Azure DevOps Engineer Expert",
  "Azure Security Engineer Associate",
  "Azure Developer Associate",
  "Azure Fundamentals",
  "MCP: Developing ASP.NET MVC Web Applications",
]

export const awards = ["MCT Top 100 Quality Award"]

export const speakingTopics = [
  {
    title: "Azure Architecture",
    description: "Designing cloud-native systems on Azure — App Service, Functions, Service Bus, API Management, and beyond.",
  },
  {
    title: "ASP.NET Core",
    description: "Building production-grade Web APIs with Clean Architecture, CQRS, Entity Framework Core, and .NET 8.",
  },
  {
    title: "AI Development",
    description: "Practical AI integration using Azure AI Foundry, Semantic Kernel, RAG pipelines, and Model Context Protocol.",
  },
  {
    title: "GitHub Copilot",
    description: "Using AI-assisted development effectively — prompt engineering, code review, and responsible adoption.",
  },
  {
    title: "DevOps Practices",
    description: "CI/CD pipelines, Azure DevOps, Docker, infrastructure automation, and production deployment patterns.",
  },
  {
    title: "Power BI Embedded",
    description: "Embedding analytics into enterprise applications — workspaces, licensing, report authoring, and deployment.",
  },
]

export const openSourceProject = {
  title: "React PDF Annotator V2",
  npmPackage: "@sandeepmvn/react-pdf-annotator-v2",
  version: "v1.2.12",
  license: "MIT",
  description:
    "A feature-rich React PDF viewer and annotator built with TypeScript, PDF.js, and pdf-lib. A zero-cost alternative to Syncfusion's PDF annotation suite — eliminating $10,999/year in licensing while delivering the same enterprise annotation capabilities.",
  detail:
    "Actively used in production for automotive warranty dealer document workflows. Built with React 18, TypeScript, PDF.js, pdf-lib, and Tailwind CSS.",
  highlights: [
    "PDF Rendering & Navigation",
    "Drawing Tools (Pen, Highlighter)",
    "Text & Shape Annotations",
    "Digital Signature Support",
    "Undo/Redo History",
    "Save & Restore State",
    "Read-Only View Mode",
    "Fully Typed TypeScript API",
  ],
  npmUrl: "https://www.npmjs.com/package/@sandeepmvn/react-pdf-annotator-v2",
  githubUrl: "https://github.com/sandeepmvn/react-pdf-annotator-v2-package",
  icon: Sparkles,
}

export const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandeep MVN",
  url: siteConfig.baseUrl,
  jobTitle: "Senior Software Engineer and Technical Lead",
  email: siteConfig.email,
  sameAs: [siteConfig.social.linkedIn, siteConfig.social.github, siteConfig.social.npm],
  knowsAbout: ["Azure", "ASP.NET Core", "React", "AI Integration", "DevOps", "Open Source"],
}

export const qualitySignals = [
  { label: "Enterprise systems", icon: ShieldCheck },
  { label: "Cloud native delivery", icon: Cloud },
  { label: "AI-enabled workflows", icon: Bot },
]
