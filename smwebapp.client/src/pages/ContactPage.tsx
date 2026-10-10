import { ExternalLink, Link2, Mail, Package } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { Section } from "@/components/Section"
import { Seo } from "@/components/Seo"
import { siteConfig } from "@/lib/site"

const contactChannels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sandeepmvn",
    href: siteConfig.social.linkedIn,
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "github.com/sandeepmvn",
    href: siteConfig.social.github,
    icon: Link2,
  },
  {
    label: "NPM",
    value: "npmjs.com/~sandeepmvn",
    href: siteConfig.social.npm,
    icon: Package,
  },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        canonicalPath="/contact"
        description="Contact Sandeep MVN for Azure architecture, AI integration, full-stack engineering, training, and consulting."
      />
      <Section
        eyebrow="Contact"
        title="Let's Build Something"
        description="Open to conversations about cloud architecture, AI integration, full-stack engineering, enterprise consulting, and Microsoft Azure training."
        className="pt-32"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Get in touch</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Use the form or reach out directly through any of the channels below. I typically respond within one business day.
              </p>
              <div className="mt-6 grid gap-4">
                {contactChannels.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-muted"
                  >
                    <Icon className="size-4 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block font-medium">{label}</span>
                      <span className="block truncate text-muted-foreground">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
