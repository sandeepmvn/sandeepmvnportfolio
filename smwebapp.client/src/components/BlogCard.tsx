import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { ContentItem } from "@/lib/content"

export function BlogCard({ post }: { post: ContentItem }) {
  const date = post.date ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.date)) : ""

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="font-mono text-xs font-semibold uppercase text-primary">{date}</p>
      <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={post.canonicalPath}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        aria-label={`Read article ${post.title}`}
      >
        Read Article
        <ArrowRight className="size-4" />
      </Link>
    </article>
  )
}
