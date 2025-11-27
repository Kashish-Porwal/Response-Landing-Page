'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechCorp",
    content:
      "TaskFlow transformed how our team collaborates. We've cut project delivery time by 40% and our team loves the intuitive interface.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marcus Johnson",
    title: "CEO at InnovateLabs",
    content:
      "The AI insights have been game-changing. It automatically flags risks and suggests optimizations we would've missed otherwise.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Rodriguez",
    title: "Team Lead at BuildFast",
    content:
      "Finally a project management tool that actually works the way we think. The automation features save us hours every week.",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
    >
      <Card className="group relative border-border bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
        {/* Gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />

        {/* Quote icon background */}
        <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Quote size={80} />
        </div>

        <CardContent className="relative pt-8 pb-8">
          {/* Rating */}
          <div className="mb-4 flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
              >
                <Star size={16} className={`fill-gradient bg-gradient-to-r ${testimonial.gradient} text-transparent`} style={{ fill: 'url(#star-gradient)' }} />
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <p className="mb-6 text-base text-foreground leading-relaxed relative z-10">
            <span className="text-primary text-2xl leading-none">"</span>
            {testimonial.content}
            <span className="text-primary text-2xl leading-none">"</span>
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </div>
          </div>
        </CardContent>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
      </Card>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative px-4 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Loved by teams{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            See how leading companies use TaskFlow to transform their workflows.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
