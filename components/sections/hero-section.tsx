'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// WebGL canvas — client only (no SSR)
const Aurora = dynamic(() => import('@/components/Aurora'), { ssr: false })

const EASE = [0.22, 1, 0.36, 1] as const

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-background min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated aurora background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={['#7cff67', '#B497CF', '#5227FF']}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8">
        <div className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight text-white drop-shadow-2xl whitespace-nowrap"
          >
            <span className="text-purple-400">SMILECARE</span> NETWORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.08 }}
            className="text-2xl lg:text-3xl text-blue-100 font-medium mb-10 drop-shadow-lg"
          >
            Student Club @ UofC
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.16 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/our-work">
              <Button
                size="lg"
                className="cursor-pointer text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-[0_8px_24px_-4px_rgba(0,0,0,0.7),0_0_50px_-2px_rgba(255,255,255,0.22)]"
              >
                Explore Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
              >
                Get Involved
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
