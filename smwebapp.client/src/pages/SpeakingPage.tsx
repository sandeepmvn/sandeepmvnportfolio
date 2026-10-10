import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { awards, certifications, speakingTopics } from "@/lib/site"

export default function SpeakingPage() {
  return (
    <>
      <Seo
        title="Speaking & Training"
        canonicalPath="/speaking"
        description="Microsoft Certified Trainer delivering enterprise developer training at Deccansoft — Azure architecture, ASP.NET Core, AI development, DevOps, and Power BI Embedded."
      />
      <Section
        eyebrow="Speaking & Training"
        title="Teaching, Training & Community"
        description="As a Microsoft Certified Trainer at Deccansoft, I deliver enterprise developer training across Azure, .NET, AI, and DevOps. Training is grounded in real project experience — every topic I teach, I have shipped in production."
        className="pt-32"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {speakingTopics.map((topic) => (
              <div key={topic.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="text-sm font-semibold">{topic.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Certifications</h2>
              <div className="mt-5 grid gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Awards</h2>
              <div className="mt-5 grid gap-3">
                {awards.map((award) => (
                  <div key={award} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
