import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    price: "$29",
    period: "/month",
    features: [
      "Up to 10 team members",
      "Basic project management",
      "Email support",
      "5 GB storage",
      "Basic integrations",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams",
    price: "$79",
    period: "/month",
    features: [
      "Unlimited team members",
      "Advanced AI features",
      "Priority support",
      "500 GB storage",
      "Advanced integrations",
      "Custom workflows",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited storage",
      "99.9% SLA",
      "Advanced security",
      "White-label options",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border transition-all ${
                plan.highlighted ? "border-primary bg-primary/5 shadow-lg md:scale-105" : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.highlighted ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </Button>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3">
                      <Check size={20} className="shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
