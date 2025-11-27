"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">TF</span>
            </div>
            <span className="hidden text-xl font-bold sm:inline">TaskFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden gap-3 md:flex">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Testimonials
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Sign In
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
        style={{ scaleX }}
      />
    </header>
  )
}
