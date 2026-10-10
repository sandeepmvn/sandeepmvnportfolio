import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

export function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
