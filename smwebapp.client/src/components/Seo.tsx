import { useEffect } from "react"
import { siteConfig } from "@/lib/site"

type SeoProps = {
  title: string
  description?: string
  canonicalPath?: string
  image?: string
  type?: "website" | "article"
  jsonLd?: Record<string, unknown>
}

function setMeta(selector: string, attribute: "content" | "href", value: string) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)

  if (!element) {
    element = selector.startsWith("link")
      ? document.createElement("link")
      : document.createElement("meta")

    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "")
    }

    if (selector.includes("name=")) {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "")
    }

    if (selector.startsWith("link")) {
      element.setAttribute("rel", "canonical")
    }

    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

export function Seo({
  title,
  description = siteConfig.description,
  canonicalPath = "/",
  image = "/og-image.svg",
  type = "website",
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonical = new URL(canonicalPath, siteConfig.baseUrl).toString()
    const absoluteImage = new URL(image, siteConfig.baseUrl).toString()
    const fullTitle = title.includes(siteConfig.shortName) ? title : `${title} | ${siteConfig.shortName}`

    document.title = fullTitle
    setMeta('meta[name="description"]', "content", description)
    setMeta('meta[name="keywords"]', "content", siteConfig.keywords.join(", "))
    setMeta('link[rel="canonical"]', "href", canonical)
    setMeta('meta[property="og:title"]', "content", fullTitle)
    setMeta('meta[property="og:description"]', "content", description)
    setMeta('meta[property="og:type"]', "content", type)
    setMeta('meta[property="og:url"]', "content", canonical)
    setMeta('meta[property="og:image"]', "content", absoluteImage)
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image")
    setMeta('meta[name="twitter:title"]', "content", fullTitle)
    setMeta('meta[name="twitter:description"]', "content", description)
    setMeta('meta[name="twitter:image"]', "content", absoluteImage)

    const existing = document.getElementById("schema-jsonld")
    existing?.remove()

    if (jsonLd) {
      const script = document.createElement("script")
      script.id = "schema-jsonld"
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [canonicalPath, description, image, jsonLd, title, type])

  return null
}
