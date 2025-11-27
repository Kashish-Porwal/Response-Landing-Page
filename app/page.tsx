import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import ThreeDWrapper from "@/components/3d-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* 3D Background Elements */}
      <ThreeDWrapper />

      {/* Page Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </main>
  )
}
