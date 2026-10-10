import { CheckCircle2 } from "lucide-react"
import { ExpertiseCard } from "@/components/ExpertiseCard"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { expertise, schemaPerson } from "@/lib/site"

const principles = [
  "Design systems for long-term maintainability and business impact.",
  "Use Azure-native services where they reduce operational complexity.",
  "Keep frontend experiences fast, readable, and accessible.",
  "Bring AI into workflows where it improves decisions and delivery speed.",
]

export default function AboutPage() {
  return (
    <>
      <Seo title="About" canonicalPath="/about" jsonLd={schemaPerson} />
      <Section
        eyebrow="About"
        title="Engineering Solutions That Scale"
        description="I design and deliver cloud-native applications, distributed systems, AI workflows, and modern frontend platforms for teams that need reliable software."
        className="pt-32"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-lg leading-8 text-muted-foreground">
              I am Sandeep MVN, a Senior Software Engineer and Technical Lead with over 10 years of experience
              designing enterprise-grade software on Microsoft Azure. My work spans insurance, healthcare,
              automotive claims, media platforms, and AI-enabled business systems.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I build software with scalability, maintainability, security, and measurable business outcomes in mind.
            </p>
          </div>
          <div className="grid gap-3">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <CheckCircle2 className="mt-1 size-5 text-primary" />
                <span className="text-sm leading-7 text-muted-foreground">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Skills" title="Core Expertise" className="bg-muted/40">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </>
  )
}
