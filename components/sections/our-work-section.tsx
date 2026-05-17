'use client'

import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const smileKitContents = [
  'Toothbrush (adult or child size)',
  'Toothpaste (travel or full-size)',
  'Floss and dental picks',
  'Oral hygiene tips or educational card',
  'Handwritten encouragement note'
]

const deliveredTo = [
  'Street Sisters Society',
  'BeTheChangeYYC',
  'Cups Calgary'
]

const OurWorkSection = () => {
  return (
    <div id="our-work" className="space-y-20">
      {/* SmileKits */}
      <div id="smilekits">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              What Are SmileKits?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SmileKits are care packages designed to restore dignity and promote oral health among underserved populations. Each kit contains essential dental hygiene products that support daily care and long-term wellness.
            </p>

            <h4 className="text-xl font-semibold text-foreground mb-4">What&apos;s Inside a SmileKit?</h4>
            <ul className="space-y-2 text-muted-foreground mb-6">
              {smileKitContents.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
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

      {/* Drop-offs */}
      <div id="drop-offs">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
          What Are Drop-Offs?
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Drop-Offs are the direct outreach arm of SmileCare Network. Once SmileKits are assembled, our volunteers deliver them to local shelters, community centers, transitional housing units, and other partner organizations across Calgary and surrounding areas.
            </p>

            <h4 className="text-xl font-semibold text-foreground mb-4">Where We&apos;ve Delivered</h4>
            <ul className="space-y-2 text-muted-foreground mb-6">
              {deliveredTo.map((place) => (
                <li key={place} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              We are continually expanding our network of recipient sites to meet growing needs across the city.
            </p>
          </div>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>How Often Do Drop-Offs Happen?</CardTitle>
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
    </div>
  )
}

export default OurWorkSection
