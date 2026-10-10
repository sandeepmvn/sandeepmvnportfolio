import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Container } from "@/components/Container"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"
import { getProject } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <Container className="py-32">
        <Seo title="Project Not Found" canonicalPath="/projects" />
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Button asChild className="mt-6 rounded-xl">
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </Container>
    )
  }

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        canonicalPath={project.canonicalPath}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: `${siteConfig.baseUrl}${project.canonicalPath}`,
          keywords: project.tags.join(", "),
        }}
      />
      <article className="pt-32">
        <Container className="max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 rounded-xl">
            <Link to="/projects">
              <ArrowLeft className="size-4" />
              Projects
            </Link>
          </Button>
          <p className="font-mono text-sm font-semibold uppercase text-primary">Case Study</p>
          <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(project.techStack ?? project.tags).map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <MarkdownRenderer content={project.body} />
          </div>
        </Container>
      </article>
    </>
  )
}
