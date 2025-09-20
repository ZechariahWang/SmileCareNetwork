'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'

const OurWorkSection = () => {
  return (
    <section id="our-work" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a difference through SmileKits and community drop-offs
          </p>
        </div>

        {/* SmileKits Section */}
        <div id="smilekits" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                🧼 What Are SmileKits?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SmileKits are care packages designed to restore dignity and promote oral health among underserved populations. Each kit contains essential dental hygiene products that support daily care and long-term wellness.
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">📦 What&apos;s Inside a SmileKit?</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>🪥 Toothbrush (adult or child size)</li>
                <li>🦷 Toothpaste (travel or full-size)</li>
                <li>🧵 Floss and dental picks</li>
                <li>📝 Oral hygiene tips or educational card</li>
                <li>💙 Handwritten encouragement note</li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Kits may vary slightly depending on inventory and donations.
              </p>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl">Why SmileKits Matter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground">Hygiene is dignity</h5>
                  <p className="text-sm text-muted-foreground">Access to oral care is one of the most overlooked needs in shelters and transitional housing.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Prevention is powerful</h5>
                  <p className="text-sm text-muted-foreground">Regular brushing and flossing prevent infections, pain, and long-term dental complications.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Confidence starts with a smile</h5>
                  <p className="text-sm text-muted-foreground">Many people avoid smiling, speaking, or applying for jobs due to poor oral health. This changes that.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Drop-offs Section */}
        <div id="drop-offs">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            🚗 What Are Drop-Offs?
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Drop-Offs are the direct outreach arm of SmileCare Network. Once SmileKits are assembled, our volunteers deliver them to local shelters, community centers, transitional housing units, and other partner organizations across Calgary and surrounding areas.
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">📍 Where We&apos;ve Delivered</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Street Sisters Society</li>
                <li>• BeTheChangeYYC</li>
              </ul>
              <p className="text-muted-foreground">
                We are continually expanding our network of recipient sites to meet growing needs across the city.
              </p>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>📅 How Often Do Drop-Offs Happen?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground">Bi-Monthly Drop-Offs</h5>
                  <p className="text-sm text-muted-foreground">We aim to deliver SmileKits at least once every two months, often aligning with community events or seasons of high demand.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Pop-Up Deliveries</h5>
                  <p className="text-sm text-muted-foreground">We also conduct urgent or seasonal drop-offs based on surplus inventory or special donor campaigns.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurWorkSection