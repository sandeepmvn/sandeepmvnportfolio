import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { projects } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        canonicalPath="/projects"
        description="Case studies from Sandeep MVN across Azure, ASP.NET Core, React, AI, and enterprise platforms."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects",
          url: `${siteConfig.baseUrl}/projects`,
        }}
      />
      <Section
        eyebrow="Projects"
        title="Featured Engineering Work"
        description="Markdown-driven case studies covering cloud-native platforms, insurance systems, healthcare products, and AI-enabled workflows."
        className="pt-32"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  )
}
