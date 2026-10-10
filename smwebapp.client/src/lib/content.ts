type Frontmatter = Record<string, string | string[] | boolean>

export type ContentItem = {
  slug: string
  title: string
  summary: string
  date: string
  tags: string[]
  featured: boolean
  canonicalPath: string
  body: string
  techStack?: string[]
  image?: string
}

const projectModules = import.meta.glob("../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>

const blogModules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>

function parseArray(value: string): string[] {
  const trimmed = value.trim()

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean)
  }

  return trimmed
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean)
}

function parseValue(value: string): string | string[] | boolean {
  const trimmed = value.trim()

  if (trimmed === "true") return true
  if (trimmed === "false") return false
  if (trimmed.startsWith("[") || trimmed.includes("|")) return parseArray(trimmed)

  return trimmed.replace(/^["']|["']$/g, "")
}

function parseMarkdown(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, body: raw }
  }

  const frontmatter = match[1]
    .split(/\r?\n/)
    .filter(Boolean)
    .reduce<Frontmatter>((accumulator, line) => {
      const separatorIndex = line.indexOf(":")
      if (separatorIndex === -1) return accumulator

      const key = line.slice(0, separatorIndex).trim()
      const value = line.slice(separatorIndex + 1)
      accumulator[key] = parseValue(value)
      return accumulator
    }, {})

  return { frontmatter, body: match[2].trim() }
}

function fileSlug(path: string) {
  return path.split("/").pop()?.replace(/\.md$/, "") ?? "untitled"
}

function toArray(value: Frontmatter[string]) {
  return Array.isArray(value) ? value : typeof value === "string" && value.length > 0 ? [value] : []
}

function toContentItem(path: string, raw: string, basePath: "blog" | "projects"): ContentItem {
  const { frontmatter, body } = parseMarkdown(raw)
  const slug = String(frontmatter.slug ?? fileSlug(path))

  return {
    slug,
    title: String(frontmatter.title ?? slug),
    summary: String(frontmatter.summary ?? ""),
    date: String(frontmatter.date ?? ""),
    tags: toArray(frontmatter.tags),
    techStack: toArray(frontmatter.techStack),
    featured: Boolean(frontmatter.featured),
    canonicalPath: `/${basePath}/${slug}`,
    image: typeof frontmatter.image === "string" ? frontmatter.image : undefined,
    body,
  }
}

function sortByDate(items: ContentItem[]) {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const projects = sortByDate(
  Object.entries(projectModules).map(([path, raw]) => toContentItem(path, raw, "projects")),
)

export const blogPosts = sortByDate(
  Object.entries(blogModules).map(([path, raw]) => toContentItem(path, raw, "blog")),
)

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

export function getBlogPost(slug: string | undefined) {
  return blogPosts.find((post) => post.slug === slug)
}
