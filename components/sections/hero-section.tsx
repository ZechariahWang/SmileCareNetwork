'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface HeroSectionProps {
  setActiveSection: (section: string) => void
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="pt-24 pb-20 lg:pt-70 lg:pb-24 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 75%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-800/20 to-teal-700/25"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              SmileCare Network
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl lg:text-3xl text-blue-100 font-medium mb-8 drop-shadow-md"
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