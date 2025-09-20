'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/container'
import Counter from '@/components/counter'

const TrackerSection = () => {
  const trackerRef = useRef(null)
  const isTrackerInView = useInView(trackerRef, { once: true })

  const stats = [
    { icon: '🪥', label: 'Dental Hygiene Products Donated', value: 1430, suffix: '+' },
    { icon: '🎒', label: 'SmileKits Assembled', value: 290, suffix: '+' },
    { icon: '📍', label: 'Drop-Off Locations Reached', value: 17, suffix: '' },
    { icon: '🙌', label: 'People Reached', value: 2500, suffix: '+' },
    { icon: '🏢', label: 'Sponsors/Partners', value: 8, suffix: '' },
    { icon: '⏱️', label: 'Volunteer Hours', value: 400, suffix: '+' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/15 relative overflow-hidden">
      <Container>
        <motion.div
          ref={trackerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTrackerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
            SmileCare in Action
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isTrackerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default TrackerSection