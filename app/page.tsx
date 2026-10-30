import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  {
    label: "About the project",
    href: "https://joshuasells.com/projects/zeddius",
    primary: true,
  },
  { label: "API docs", href: "https://api.zeddius.com/docs", primary: false },
  { label: "GitHub", href: "https://github.com/zeddiushq", primary: false },
]

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md gap-5 p-8">
        <Logo />
        <Badge variant="warning" className="w-fit">
          Under construction
        </Badge>
        <p className="text-muted-foreground">
          Personal life software, in progress. There is nothing to sign up for
          yet.
        </p>
        <ul className="flex flex-wrap gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Button
                variant={l.primary ? "default" : "outline"}
                size="sm"
                render={<a href={l.href} />}
              >
                {l.label}
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  )
}
