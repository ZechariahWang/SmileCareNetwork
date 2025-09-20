'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 leading-tight">
              SmileCare Network
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl lg:text-3xl text-accent font-medium mb-8"
            >
              You Matter. Your Smile Matters.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => setActiveSection('our-work')}
            >
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
              onClick={() => setActiveSection('contact')}
            >
              Get Involved
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection