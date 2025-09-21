'use client'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero-section'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  )
}