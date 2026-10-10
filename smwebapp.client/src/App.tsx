import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RootLayout } from "@/layouts/RootLayout"
import { ThemeProvider } from "@/components/ThemeProvider"

const HomePage = lazy(() => import("@/pages/HomePage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const BlogPage = lazy(() => import("@/pages/BlogPage"))
const BlogDetailPage = lazy(() => import("@/pages/BlogDetailPage"))
const OpenSourcePage = lazy(() => import("@/pages/OpenSourcePage"))
const SpeakingPage = lazy(() => import("@/pages/SpeakingPage"))
const ContactPage = lazy(() => import("@/pages/ContactPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">
              Loading buildwithsandeepmvn...
            </div>
          }
        >
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogDetailPage />} />
              <Route path="open-source" element={<OpenSourcePage />} />
              <Route path="speaking" element={<SpeakingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
