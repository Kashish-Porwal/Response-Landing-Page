import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechCorp",
    content:
      "TaskFlow transformed how our team collaborates. We've cut project delivery time by 40% and our team loves the intuitive interface.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    title: "CEO at InnovateLabs",
    content:
      "The AI insights have been game-changing. It automatically flags risks and suggests optimizations we would've missed otherwise.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Team Lead at BuildFast",
    content:
      "Finally a project management tool that actually works the way we think. The automation features save us hours every week.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Loved by teams worldwide</h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            See how leading companies use TaskFlow to transform their workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-background">
              <CardContent className="pt-8">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-base text-foreground leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
