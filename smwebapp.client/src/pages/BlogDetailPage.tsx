import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Container } from "@/components/Container"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"
import { getBlogPost } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <Container className="py-32">
        <Seo title="Article Not Found" canonicalPath="/blog" />
        <h1 className="text-3xl font-semibold">Article not found</h1>
        <Button asChild className="mt-6 rounded-xl">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </Container>
    )
  }

  const date = post.date ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.date)) : ""

  return (
    <>
      <Seo
        title={post.title}
        description={post.summary}
        canonicalPath={post.canonicalPath}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          author: { "@type": "Person", name: "Sandeep MVN" },
          url: `${siteConfig.baseUrl}${post.canonicalPath}`,
          keywords: post.tags.join(", "),
        }}
      />
      <article className="pt-32">
        <Container className="max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 rounded-xl">
            <Link to="/blog">
              <ArrowLeft className="size-4" />
              Blog
            </Link>
          </Button>
          <p className="font-mono text-sm font-semibold uppercase text-primary">{date}</p>
          <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <MarkdownRenderer content={post.body} />
          </div>
        </Container>
      </article>
    </>
  )
}
