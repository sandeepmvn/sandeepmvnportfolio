import type { LucideIcon } from "lucide-react"

type ExpertiseCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function ExpertiseCard({ title, description, icon: Icon }: ExpertiseCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  )
}
