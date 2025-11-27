'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-green-500 to-emerald-500",
  },
]

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${plan.highlighted ? 'md:scale-105 z-10' : ''}`}
    >
      <Card
        className={`relative border transition-all duration-300 hover:shadow-2xl h-full overflow-hidden group ${plan.highlighted
            ? "border-primary bg-gradient-to-br from-primary/10 to-purple-500/10 shadow-xl shadow-primary/20"
            : "border-border bg-card/50 backdrop-blur-sm hover:border-primary/50"
          }`}
      >
        {/* Popular badge */}
        {plan.highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${plan.gradient} px-4 py-1 text-xs font-semibold text-white shadow-lg`}
            >
              <Sparkles size={12} />
              Most Popular
            </motion.div>
          </div>
        )}

        {/* Gradient background animation */}
        {plan.highlighted && (
          <div className="absolute inset-0 opacity-30">
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} animate-gradient`}
              style={{ backgroundSize: '200% 200%' }} />
          </div>
        )}

        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-bl-full`} />

        <CardHeader className="relative">
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* Pricing */}
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold ${plan.highlighted ? 'gradient-text' : ''}`}>
              {plan.price}
            </span>
            <span className="text-muted-foreground">{plan.period}</span>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className={`w-full relative overflow-hidden ${plan.highlighted
                  ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white shadow-lg shadow-primary/50`
                  : "bg-secondary hover:bg-secondary/80"
                }`}
            >
              <span className="relative z-10">Get Started</span>
              {plan.highlighted && (
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0.3 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </Button>
          </motion.div>

          {/* Features List */}
          <div className="space-y-3 pt-4">
            {plan.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                className="flex gap-3 items-start"
              >
                <div className={`shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg`} />
      </Card>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative px-4 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute right-1/3 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-6xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
