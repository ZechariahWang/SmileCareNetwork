'use client'

import TrackerSection from '@/components/sections/tracker-section'
import AboutSection from '@/components/sections/about-section'
import { Container } from '@/components/ui/container'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
    {children}
  </span>
)

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-36 pb-20">
        <Container size="xl">
          {/* Page header */}
          <AnimatedWrapper className="max-w-3xl mb-20">
            <Eyebrow>About Us</Eyebrow>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              We believe everyone deserves to smile with confidence
            </h1>
            <p className="text-xl text-muted-foreground">
              Our mission, our impact, and the people making a difference.
            </p>
          </AnimatedWrapper>

          <div className="space-y-24">
            {/* Mission */}
            <section>
              <AnimatedWrapper className="max-w-2xl mb-8">
                <Eyebrow>Our Mission</Eyebrow>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Dignity and health, delivered with care
                </h2>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.05}>
                <div className="glass-panel rounded-3xl p-8 lg:p-12 shadow-xl grid gap-6 lg:grid-cols-2">
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    SmileCare Network is committed to promoting dignity and health by delivering essential oral hygiene products and accessible dental education to underserved communities.
                  </p>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    Through every SmileKit we assemble and every drop-off we complete, we aim to build healthier lives, restore confidence, and strengthen the bonds of care within our city and beyond.
                  </p>
                </div>
              </AnimatedWrapper>
            </section>

            {/* Impact */}
            <section>
              <AnimatedWrapper className="max-w-2xl mb-8">
                <Eyebrow>Our Impact</Eyebrow>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  The difference we&apos;re making
                </h2>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.05}>
                <TrackerSection />
              </AnimatedWrapper>
            </section>

            {/* Team */}
            <section>
              <AnimatedWrapper className="max-w-2xl mb-8">
                <Eyebrow>Our Team</Eyebrow>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  The people behind SmileCare Network
                </h2>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.05}>
                <AboutSection />
              </AnimatedWrapper>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}
