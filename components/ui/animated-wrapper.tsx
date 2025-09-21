'use client'

import { motion } from 'framer-motion'

interface AnimatedWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const AnimatedWrapper = ({ children, className = '', delay = 0 }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}