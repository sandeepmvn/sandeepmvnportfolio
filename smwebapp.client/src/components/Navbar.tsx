import { Link, NavLink } from "react-router-dom"
import { Dialog } from "radix-ui"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/Container"
import { useTheme } from "@/hooks/useTheme"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { cn } from "@/lib/utils"
import { navItems, siteConfig } from "@/lib/site"

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    isActive && "bg-muted text-foreground",
  )
}

export function Navbar() {
  const isScrolled = useScrollPosition(24)
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        isScrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          to="/"
          className="rounded-md text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${siteConfig.shortName} home`}
        >
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" asChild>
            <a href="/Sandeep_MVN_Resume.pdf">Resume</a>
          </Button>
          <Button asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-secondary/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-4 top-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-border bg-background p-5 shadow-xl">
                <div className="mb-5 flex items-center justify-between">
                  <Dialog.Title className="text-base font-semibold">{siteConfig.shortName}</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="grid gap-1" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Dialog.Close key={item.href} asChild>
                      <NavLink to={item.href} className={navClass} end={item.href === "/"}>
                        {item.label}
                      </NavLink>
                    </Dialog.Close>
                  ))}
                </nav>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Button variant="outline" asChild>
                    <a href="/Sandeep_MVN_Resume.pdf">Resume</a>
                  </Button>
                  <Dialog.Close asChild>
                    <Button asChild>
                      <Link to="/contact">Contact</Link>
                    </Button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  )
}
