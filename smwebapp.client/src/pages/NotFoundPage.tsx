import { Link } from "react-router-dom"
import { Container } from "@/components/Container"
import { Seo } from "@/components/Seo"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <Container className="grid min-h-[70svh] place-items-center py-32 text-center">
      <Seo title="Page Not Found" canonicalPath="/" />
      <div>
        <p className="font-mono text-sm font-semibold uppercase text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for is not available.</p>
        <Button asChild className="mt-8 rounded-xl">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </Container>
  )
}
