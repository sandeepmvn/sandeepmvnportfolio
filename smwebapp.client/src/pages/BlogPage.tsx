import { BlogCard } from "@/components/BlogCard"
import { NewsletterForm } from "@/components/NewsletterForm"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { blogPosts } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog"
        canonicalPath="/blog"
        description="Architecture notes, Azure learnings, AI integration patterns, and full-stack engineering articles from Sandeep MVN."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Build With Sandeep MVN Blog",
          url: `${siteConfig.baseUrl}/blog`,
        }}
      />
      <Section
        eyebrow="Blog"
        title="Latest Articles"
        description="Markdown-driven articles about cloud architecture, AI workflows, Azure delivery, and modern application engineering."
        className="pt-32"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10">
          <NewsletterForm />
        </div>
      </Section>
    </>
  )
}
