export type ApiState = "idle" | "loading" | "success" | "error"

export type ContactPayload = {
  name: string
  email: string
  message: string
  company?: string
}

export type NewsletterPayload = {
  email: string
  name?: string
}

type ApiResult = {
  success: boolean
  message: string
}

async function postJson<T>(url: string, payload: T): Promise<ApiResult> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => null)) as Partial<ApiResult> | null

  if (!response.ok) {
    return {
      success: false,
      message: data?.message ?? "Something went wrong. Please try again.",
    }
  }

  return {
    success: true,
    message: data?.message ?? "Thanks, your request was received.",
  }
}

export function submitContact(payload: ContactPayload) {
  return postJson("/api/contact", payload)
}

export function submitNewsletter(payload: NewsletterPayload) {
  return postJson("/api/newsletter", payload)
}
