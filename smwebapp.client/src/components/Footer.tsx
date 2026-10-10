import { GitBranch, Globe2, Mail, Package } from "lucide-react"
import { Link } from "react-router-dom"
import { Container } from "@/components/Container"
import { navItems, siteConfig } from "@/lib/site"

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedIn, icon: Globe2 },
  { label: "GitHub", href: siteConfig.social.github, icon: GitBranch },
  { label: "NPM", href: siteConfig.social.npm, icon: Package },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-12">
      <Container className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="text-lg font-semibold">
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            Building enterprise-grade cloud and AI systems.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Mail className="size-4" />
            {siteConfig.email}
          </a>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold">Links</h2>
          <div className="mt-4 grid gap-2">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <h2 className="text-sm font-semibold">Social</h2>
          <div className="mt-4 flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">© 2026 Sandeep MVN. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
