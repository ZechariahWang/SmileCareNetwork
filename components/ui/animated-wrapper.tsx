'use client'

import { motion } from 'framer-motion'

interface AnimatedWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const EASE = [0.22, 1, 0.36, 1] as const

export const AnimatedWrapper = ({ children, className = '', delay = 0 }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
