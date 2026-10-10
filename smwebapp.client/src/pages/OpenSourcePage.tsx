import { ExternalLink, Link2 } from "lucide-react"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"
import { openSourceProject } from "@/lib/site"

export default function OpenSourcePage() {
  const Icon = openSourceProject.icon

  return (
    <>
      <Seo
        title="Open Source"
        canonicalPath="/open-source"
        description="Open source tools from Sandeep MVN — including React PDF Annotator V2, a zero-cost alternative to Syncfusion's $10,999/year PDF SDK, used in production."
      />
      <Section
        eyebrow="Open Source"
        title={openSourceProject.title}
        description={openSourceProject.description}
        className="pt-32"
      >
        <div className="grid gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              {openSourceProject.npmPackage}
            </span>
            <span className="rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              {openSourceProject.version}
            </span>
            <span className="rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
              {openSourceProject.license}
            </span>
          </div>

          <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-5">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-6" />
              </div>

              <p className="text-base leading-7 text-muted-foreground">{openSourceProject.detail}</p>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary">$10,999/year saved</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Replaced Syncfusion's commercial PDF annotation suite in production at an automotive warranty client with this package — at zero licensing cost.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <a href={openSourceProject.npmUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" />
                    View on NPM
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={openSourceProject.githubUrl} target="_blank" rel="noreferrer">
                    <Link2 className="size-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 content-start">
              {openSourceProject.highlights.map((highlight) => (
                <div key={highlight} className="rounded-xl bg-muted p-4 text-sm font-medium">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
