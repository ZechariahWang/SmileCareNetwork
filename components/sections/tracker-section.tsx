'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gift, Package, MapPin, Users, Building2, Clock, type LucideIcon } from 'lucide-react'
import Counter from '@/components/counter'

const EASE = [0.22, 1, 0.36, 1] as const

const TrackerSection = () => {
  const trackerRef = useRef(null)
  const isTrackerInView = useInView(trackerRef, { once: true })

  const stats: { icon: LucideIcon; label: string; value: number; suffix: string }[] = [
    { icon: Gift, label: 'Dental Hygiene Products Donated', value: 1430, suffix: '+' },
    { icon: Package, label: 'SmileKits Assembled', value: 1100, suffix: '+' },
    { icon: MapPin, label: 'Drop-Off Locations Reached', value: 17, suffix: '' },
    { icon: Users, label: 'People Reached', value: 500, suffix: '+' },
    { icon: Building2, label: 'Sponsors/Partners', value: 8, suffix: '' },
    { icon: Clock, label: 'Volunteer Hours', value: 400, suffix: '+' }
  ]

  return (
    <motion.div
      ref={trackerRef}
      initial={{ opacity: 0, y: 16 }}
      animate={isTrackerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={isTrackerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: EASE, delay: index * 0.05 }}
            className="glass-panel rounded-2xl p-6 flex flex-col items-start"
          >
            <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default TrackerSection
