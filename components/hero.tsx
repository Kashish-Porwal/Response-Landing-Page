import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24 lg:py-32">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full bg-primary/20 blur-3xl opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="text-xs font-semibold text-primary">✨ NEW</span>
            <span className="text-xs text-muted-foreground">AI-powered collaboration tools</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Work smarter with AI-powered teamwork
          </h1>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            TaskFlow helps teams collaborate seamlessly, automate workflows, and ship projects faster with intelligent
            project management.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
            Start Free Trial
            <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <PlayCircle size={18} />
            Watch Demo
          </Button>
        </div>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <img src="/modern-project-management-dashboard-interface-with.jpg" alt="TaskFlow Dashboard" className="w-full object-cover" />
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <p className="text-sm font-medium text-muted-foreground">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["TechCorp", "InnovateLabs", "BuildFast", "CloudSync"].map((company) => (
              <div key={company} className="text-sm font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
