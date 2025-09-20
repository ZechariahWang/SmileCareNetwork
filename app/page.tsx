'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/sections/hero-section'
import MissionSection from '@/components/sections/mission-section'
import TrackerSection from '@/components/sections/tracker-section'
import OurWorkSection from '@/components/sections/our-work-section'
import AboutSection from '@/components/sections/about-section'
import ResourcesSection from '@/components/sections/resources-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/sections/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <MissionSection />
      <TrackerSection />
      <OurWorkSection />
      <AboutSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}