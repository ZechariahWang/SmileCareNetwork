'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram } from 'lucide-react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'our-work', label: 'Work', href: '/our-work' },
    { id: 'resources', label: 'Resources', href: '/resources' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-4 inset-x-0 z-50 px-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-background/70 backdrop-blur-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.7),0_0_50px_-2px_rgba(255,255,255,0.22)] px-4 sm:px-5">
        <div className="flex h-12 items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-inter font-semibold text-sm tracking-wide rounded-full px-3 py-1.5 transition-colors ${
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Instagram Link */}
            <div className="border-l border-border ml-2 pl-3">
              <motion.a
                href="https://instagram.com/smilecarenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-muted/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="SmileCare Network on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all mt-1 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="lg:hidden mt-2 mb-3 rounded-2xl border border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block mx-2 px-4 py-3 font-inter font-semibold rounded-xl transition-colors ${
                    pathname === item.href
                      ? 'text-accent bg-accent/15'
                      : 'text-foreground hover:bg-muted/50 hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <a
                  href="https://instagram.com/smilecarenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navigation
