'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Moses M.',
      role: 'Founder & Co-President',
      bio: 'BHSc student at the University of Calgary passionate about dentistry and equitable care. Leads vision, partnerships, and strategy.'
    },
    {
      name: 'Omar N.',
      role: 'Co-Founder and Co-President',
      bio: ''
    },
    {
      name: 'Zehaan W.',
      role: 'Founding Partner and Vice President',
      bio: ''
    },
    {
      name: 'Meherab',
      role: 'Founding Partner and Vice President',
      bio: ''
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Us</h2>
        </div>

        {/* Mission */}
        <div id="mission" className="mb-20">
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe everyone deserves to smile with confidence. SmileCare Network is committed to promoting dignity and health by delivering essential oral hygiene products and accessible dental education to underserved communities. Through every SmileKit we assemble and every drop-off we complete, we aim to build healthier lives, restore confidence, and strengthen the bonds of care within our city and beyond.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div id="team" className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-background font-bold text-2xl">{member.name.split(' ')[0][0]}</span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div id="faqs">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-accent mb-4">🪥 For Recipients & Community Organizations</h4>
              <div className="space-y-4">
                <Card className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">Q: Who can receive a SmileKit?</h5>
                  <p className="text-sm text-muted-foreground">A: We work with shelters, community centers, and outreach teams to distribute SmileKits to anyone facing barriers to oral hygiene, no ID or sign-up required.</p>
                </Card>
                <Card className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">Q: What&apos;s included in a SmileKit?</h5>
                  <p className="text-sm text-muted-foreground">A: Each kit includes a toothbrush, toothpaste, floss and dental picks, a hygiene tips card, and other essentials based on availability.</p>
                </Card>
                <Card className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">Q: Can my organization request SmileKits?</h5>
                  <p className="text-sm text-muted-foreground">A: Absolutely. Please contact us and we&apos;ll coordinate a drop-off based on inventory and timing.</p>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-accent mb-4">💰 For Donors & Sponsors</h4>
              <div className="space-y-4">
                <Card className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">Q: How are donations used?</h5>
                  <p className="text-sm text-muted-foreground">A: 100% of donations go toward purchasing dental hygiene supplies and funding drop-offs. We keep operational costs minimal and transparent.</p>
                </Card>
                <Card className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">Q: Can I sponsor a drop-off or donate products directly?</h5>
                  <p className="text-sm text-muted-foreground">A: Yes! We welcome both financial support and in-kind donations like toothbrushes, toothpaste, or floss. Please contact us to learn more.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection