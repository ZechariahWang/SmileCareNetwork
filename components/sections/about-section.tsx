'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Moses M.',
      role: 'Founder & Co-President',
      bio: 'BHSc student at the University of Calgary passionate about dentistry and equitable care. Leads vision, partnerships, and strategy.',
      initials: 'MM'
    },
    {
      name: 'Omar N.',
      role: 'Co-Founder & Co-President',
      bio: 'Dedicated to expanding our reach and building meaningful community partnerships.',
      initials: 'ON'
    },
    {
      name: 'Zehaan W.',
      role: 'Executive Member',
      bio: 'Focuses on operations and ensuring our SmileKits reach those who need them most.',
      initials: 'ZW'
    },
    {
      name: 'Meherab W.',
      role: 'Executive Member',
      bio: 'Manages outreach initiatives and community engagement efforts.',
      initials: 'MW'
    },
    {
      name: 'Arsema B.',
      role: 'Executive Member',
      bio: 'Coordinates volunteer activities and educational program development.',
      initials: 'AB'
    }
  ]

  return (
    <div className="space-y-20">
      {/* Team */}
      <div id="team">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-accent/20">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                  <span className="text-background font-bold text-xl lg:text-2xl">{member.initials}</span>
                </div>
                <CardHeader className="pb-2 px-0">
                  <CardTitle className="text-lg lg:text-xl text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs">
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-muted-foreground">Everything you need to know about SmileCare Network</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🪥</span>
              </div>
              <h4 className="text-xl font-semibold text-accent">For Recipients & Community Organizations</h4>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-accent bg-card/30">
                <h5 className="font-semibold text-foreground mb-3 text-lg">Q: Who can receive a SmileKit?</h5>
                <p className="text-muted-foreground leading-relaxed">A: We work with shelters, community centers, and outreach teams to distribute SmileKits to anyone facing barriers to oral hygiene, no ID or sign-up required.</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent bg-card/30">
                <h5 className="font-semibold text-foreground mb-3 text-lg">Q: What&apos;s included in a SmileKit?</h5>
                <p className="text-muted-foreground leading-relaxed">A: Each kit includes a toothbrush, toothpaste, floss and dental picks, a hygiene tips card, and other essentials based on availability.</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent bg-card/30">
                <h5 className="font-semibold text-foreground mb-3 text-lg">Q: Can my organization request SmileKits?</h5>
                <p className="text-muted-foreground leading-relaxed">A: Absolutely. Please contact us and we&apos;ll coordinate a drop-off based on inventory and timing.</p>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-semibold text-primary">For Donors & Sponsors</h4>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary bg-card/30">
                <h5 className="font-semibold text-foreground mb-3 text-lg">Q: How are donations used?</h5>
                <p className="text-muted-foreground leading-relaxed">A: 100% of donations go toward purchasing dental hygiene supplies and funding drop-offs. We keep operational costs minimal and transparent.</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary bg-card/30">
                <h5 className="font-semibold text-foreground mb-3 text-lg">Q: Can I sponsor a drop-off or donate products directly?</h5>
                <p className="text-muted-foreground leading-relaxed">A: Yes! We welcome both financial support and in-kind donations like toothbrushes, toothpaste, or floss. Please contact us to learn more.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection