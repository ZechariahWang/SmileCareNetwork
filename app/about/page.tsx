import Navigation from '@/components/navigation'
import TrackerSection from '@/components/sections/tracker-section'
import AboutSection from '@/components/sections/about-section'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: "About Us - SmileCare Network",
  description: "Learn about SmileCare Network's mission, impact, and team. We believe everyone deserves to smile with confidence and are committed to promoting dignity and health in underserved communities.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background font-inter">
        <div className="pt-32 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              About SmileCare Network
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
              Our mission, impact, and the people making a difference
            </p>
          </div>

          <div className="space-y-24">
            {/* Mission Section */}
            <section className="px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We believe everyone deserves to smile with confidence
                  </p>
                </div>
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
              </div>
            </section>

            {/* Impact Tracker Section */}
            <section className="px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                    Our Impact
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    See the difference we&apos;re making in our community
                  </p>
                </div>
                <TrackerSection />
              </div>
            </section>

            {/* Meet Our Team & FAQ Section */}
            <section className="px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                    Meet Our Team
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The dedicated people behind SmileCare Network
                  </p>
                </div>
                <AboutSection />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}