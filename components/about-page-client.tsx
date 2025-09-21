'use client'

import TrackerSection from '@/components/sections/tracker-section'
import AboutSection from '@/components/sections/about-section'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <AnimatedWrapper className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            About SmileCare Network
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
            Our mission, impact, and the people making a difference
          </p>
        </AnimatedWrapper>

        <div className="space-y-24">
          {/* Mission Section */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <AnimatedWrapper className="text-center mb-16" delay={0.2}>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  We believe everyone deserves to smile with confidence
                </p>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.4}>
                <div className="max-w-5xl mx-auto">
                  <div className="bg-card rounded-3xl p-8 lg:p-16 shadow-xl border border-border">
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 text-center">
                      SmileCare Network is committed to promoting dignity and health by delivering essential oral hygiene products and accessible dental education to underserved communities.
                    </p>
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center">
                      Through every SmileKit we assemble and every drop-off we complete, we aim to build healthier lives, restore confidence, and strengthen the bonds of care within our city and beyond.
                    </p>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </section>

          {/* Impact Tracker Section */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <AnimatedWrapper className="text-center mb-16" delay={0.6}>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Impact
                </h2>
                <p className="text-lg text-muted-foreground">
                  See the difference we&apos;re making in our community
                </p>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.8}>
                <TrackerSection />
              </AnimatedWrapper>
            </div>
          </section>

          {/* Meet Our Team & FAQ Section */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <AnimatedWrapper className="text-center mb-16" delay={1.0}>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                  Meet Our Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  The dedicated people behind SmileCare Network
                </p>
              </AnimatedWrapper>
              <AnimatedWrapper delay={1.2}>
                <AboutSection />
              </AnimatedWrapper>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}