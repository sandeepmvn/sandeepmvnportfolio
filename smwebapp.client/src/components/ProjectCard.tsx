import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { ContentItem } from "@/lib/content"

export function ProjectCard({ project }: { project: ContentItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex flex-wrap gap-2">
        {(project.techStack ?? project.tags).slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {tech}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{project.summary}</p>
      <Link
        to={project.canonicalPath}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        aria-label={`View case study for ${project.title}`}
      >
        View Case Study
        <ArrowRight className="size-4" />
      </Link>
    </article>
  )
}
