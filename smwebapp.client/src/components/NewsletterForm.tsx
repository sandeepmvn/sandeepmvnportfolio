import { useState, type FormEvent } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitNewsletter, type ApiState } from "@/lib/api"

export function NewsletterForm() {
  const [state, setState] = useState<ApiState>("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("loading")

    const formData = new FormData(event.currentTarget)
    const response = await submitNewsletter({
      email: String(formData.get("email") ?? ""),
      name: String(formData.get("name") ?? ""),
    })

    setMessage(response.message)
    setState(response.success ? "success" : "error")

    if (response.success) {
      event.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="newsletter-name">
        Name
      </label>
      <input
        id="newsletter-name"
        name="name"
        className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        placeholder="Name"
        autoComplete="name"
      />
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:col-span-1"
        placeholder="Email address"
        autoComplete="email"
      />
      <Button type="submit" disabled={state === "loading"} className="h-11 rounded-xl sm:row-start-1 sm:row-end-3 sm:h-full">
        <Mail className="size-4" />
        {state === "loading" ? "Joining..." : "Join"}
      </Button>
      {message && (
        <p className={state === "error" ? "text-sm text-destructive sm:col-span-2" : "text-sm text-primary sm:col-span-2"} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
