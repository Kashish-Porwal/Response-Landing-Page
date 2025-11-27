'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Brain, Rocket } from "lucide-react"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations to optimize your workflow, predict bottlenecks, and automate repetitive tasks.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Real-time collaboration tools help teams communicate better, share updates instantly, and stay aligned.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Lightning-quick performance with instant syncing across all devices. No more waiting for updates to load.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Ship Faster",
    description: "Automate workflows and reduce manual work. Ship projects 5x faster with intelligent automation.",
    gradient: "from-green-500 to-emerald-500",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group relative border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden h-full"
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl`} />
        </div>

        <CardContent className="relative pt-8 pb-8">
          {/* Icon with gradient background */}
          <motion.div
            className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>

          <h3 className="mb-3 text-xl font-semibold group-hover:text-primary transition-colors">
            {feature.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative px-4 py-20 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Powerful features for{' '}
            <span className="gradient-text">modern teams</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            Everything you need to manage projects, collaborate with your team, and deliver results faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
