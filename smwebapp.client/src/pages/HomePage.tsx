import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero.png"
import { BlogCard } from "@/components/BlogCard"
import { ContactForm } from "@/components/ContactForm"
import { Container } from "@/components/Container"
import { ExpertiseCard } from "@/components/ExpertiseCard"
import { NewsletterForm } from "@/components/NewsletterForm"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/content"
import {
  awards,
  certifications,
  domains,
  expertise,
  openSourceProject,
  qualitySignals,
  schemaPerson,
  siteConfig,
  speakingTopics,
  trustBadges,
} from "@/lib/site"

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)
  const OpenSourceIcon = openSourceProject.icon

  return (
    <>
      <Seo
        title="Sandeep MVN | Azure Architect | .NET Developer | React Engineer | AI Integration"
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            schemaPerson,
            {
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.baseUrl,
              description: siteConfig.description,
            },
          ],
        }}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <Container className="grid min-h-[calc(100svh-72px)] items-center gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 font-mono text-sm font-semibold uppercase text-primary">Build With Sandeep MVN</p>
            <h1 className="max-w-4xl text-5xl font-semibold text-balance sm:text-6xl lg:text-7xl">
              Building enterprise-grade cloud and AI systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I design and deliver scalable cloud-native applications using Azure, .NET, Python, React, AI, and
              DevOps, solving complex business problems with modern engineering.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-xl">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-xl">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-xl">
              <img
                src={heroImage}
                alt="Abstract cloud engineering workspace"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                decoding="async"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {qualitySignals.map((signal) => {
                  const Icon = signal.icon

                  return (
                    <div key={signal.label} className="rounded-xl bg-muted p-3 text-sm font-medium">
                      <Icon className="mb-2 size-4 text-primary" />
                      {signal.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="Trusted Across Industries"
        description="Over the past decade, I have built and delivered software platforms across insurance, healthcare, automotive, media, and AI-enabled systems."
        className="bg-muted/40"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {domains.map((domain) => (
            <div key={domain} className="rounded-2xl border border-border bg-background p-5 text-sm font-medium shadow-sm">
              {domain}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="About" title="Engineering Solutions That Scale">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-lg leading-8 text-muted-foreground">
              I am Sandeep MVN, a Senior Software Engineer and Technical Lead with over 10 years of experience
              designing enterprise-grade software on Microsoft Azure.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-xl">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Cloud-native architecture", "Distributed systems", "AI-powered workflows", "Modern frontend engineering"].map(
              (skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section eyebrow="Expertise" title="Core Expertise">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Open Source" title="Open Source Contributions">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[0.7fr_1fr]">
          <div>
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <OpenSourceIcon className="size-6" />
            </div>
            <h3 className="text-2xl font-semibold">{openSourceProject.title}</h3>
            <p className="mt-4 leading-8 text-muted-foreground">{openSourceProject.description}</p>
            <Button asChild className="mt-6 rounded-xl">
              <a href={openSourceProject.npmUrl} target="_blank" rel="noreferrer">
                Explore Package
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {openSourceProject.highlights.map((highlight) => (
              <div key={highlight} className="rounded-xl bg-muted p-4 text-sm font-medium">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Awards & Certifications" className="bg-muted/40">
        <div className="grid gap-6 md:grid-cols-2">
          {[...awards, ...certifications].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5 shadow-sm">
              <CheckCircle2 className="size-5 text-primary" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Speaking"
        title="Teaching, Training & Community"
        description="As a Microsoft Certified Trainer, I actively contribute to technical education and enterprise learning programs."
      >
        <div className="flex flex-wrap gap-2">
          {speakingTopics.map((topic) => (
            <span key={topic.title} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              {topic.title}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8 rounded-xl">
          <Link to="/speaking">View Sessions</Link>
        </Button>
      </Section>

      <Section
        eyebrow="Blog"
        title="Latest Articles"
        description="Sharing engineering insights, architecture decisions, Azure learnings, and AI integration patterns."
        className="bg-muted/40"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </Section>

      <Section title="Let's Build Something Meaningful">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Whether it is cloud architecture, AI integration, full-stack engineering, or consulting, let us connect.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
