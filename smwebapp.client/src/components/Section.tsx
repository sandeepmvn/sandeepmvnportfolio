import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/Container"

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-sm font-semibold uppercase text-primary">{eyebrow}</p>
            )}
            {title && <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
