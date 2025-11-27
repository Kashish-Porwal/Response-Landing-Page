'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from "react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse position values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics for rotation
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  // Transform mouse position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24 lg:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-30 animate-gradient"
            style={{ backgroundSize: '200% 200%' }} />
        </div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl opacity-20 animate-pulse-glow"
          style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full glassmorphism px-4 py-2 animate-shimmer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold text-primary">✨ NEW</span>
                <span className="text-xs text-muted-foreground">AI-powered collaboration tools</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Work smarter with{' '}
                <span className="gradient-text">AI-powered</span>{' '}
                teamwork
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                TaskFlow helps teams collaborate seamlessly, automate workflows, and ship projects faster with intelligent
                project management.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/50 animate-float">
                  Start Free Trial
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 glassmorphism hover:bg-white/10">
                  <PlayCircle size={18} />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-4 pt-8"
            >
              <p className="text-sm font-medium text-muted-foreground">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {["TechCorp", "InnovateLabs", "BuildFast", "CloudSync"].map((company, i) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard Image with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/10 to-purple-500/10 p-2 cursor-pointer"
            >
              {/* Glassmorphism frame */}
              <div className="relative rounded-xl overflow-hidden glassmorphism-strong transform-style-3d">
                <Image
                  src="/taskflow-dashboard.png"
                  alt="TaskFlow Dashboard Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Glare effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ mixBlendMode: 'overlay' }}
                />
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

              {/* Depth layers for 3D feel */}
              <motion.div
                style={{ translateZ: "50px" }}
                className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"
              />
            </motion.div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-60 blur-xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-40 blur-2xl animate-pulse-glow"
              style={{ animationDelay: '1.5s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
