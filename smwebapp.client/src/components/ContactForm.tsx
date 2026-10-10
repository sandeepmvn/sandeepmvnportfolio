import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitContact, type ApiState } from "@/lib/api"

export function ContactForm() {
  const [state, setState] = useState<ApiState>("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("loading")

    const formData = new FormData(event.currentTarget)
    const response = await submitContact({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    })

    setMessage(response.message)
    setState(response.success ? "success" : "error")

    if (response.success) {
      event.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          autoComplete="organization"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {message && (
        <p className={state === "error" ? "text-sm text-destructive" : "text-sm text-primary"} role="status">
          {message}
        </p>
      )}
      <Button type="submit" size="lg" disabled={state === "loading"} className="h-11 rounded-xl">
        <Send className="size-4" />
        {state === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
