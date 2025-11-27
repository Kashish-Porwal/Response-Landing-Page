import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Brain, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations to optimize your workflow, predict bottlenecks, and automate repetitive tasks.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Real-time collaboration tools help teams communicate better, share updates instantly, and stay aligned.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Lightning-quick performance with instant syncing across all devices. No more waiting for updates to load.",
  },
  {
    icon: Rocket,
    title: "Ship Faster",
    description: "Automate workflows and reduce manual work. Ship projects 5x faster with intelligent automation.",
  },
]

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Powerful features for modern teams
          </h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            Everything you need to manage projects, collaborate with your team, and deliver results faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group border-border bg-card/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg hover:border-primary/50"
              >
                <CardContent className="pt-8">
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
