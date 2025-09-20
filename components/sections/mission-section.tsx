'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'

const MissionSection = () => {
  const missionRef = useRef(null)
  const isMissionInView = useInView(missionRef, { once: true })

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            We believe everyone deserves to smile with confidence.
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            SmileCare Network is committed to promoting dignity and health by delivering essential oral hygiene products and accessible dental education to underserved communities. Through every SmileKit we assemble and every drop-off we complete, we aim to build healthier lives, restore confidence, and strengthen the bonds of care within our city and beyond.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

export default MissionSection