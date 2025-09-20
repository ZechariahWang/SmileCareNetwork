'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import Image from 'next/image'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'HOME' },
    {
      id: 'our-work',
      label: 'OUR WORK',
      subItems: [
        { id: 'smilekits', label: 'SmileKits' },
        { id: 'drop-offs', label: 'Drop-Offs' }
      ]
    },
    {
      id: 'about',
      label: 'ABOUT US',
      subItems: [
        { id: 'mission', label: 'Mission' },
        { id: 'team', label: 'Team' },
        { id: 'faqs', label: 'FAQs' }
      ]
    },
    { id: 'resources', label: 'RESOURCES' },
    { id: 'contact', label: 'CONTACT US' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center p-1">
              <Image
                src="/SmileCare_Network_Logo.png"
                alt="SmileCare Network Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-inter font-bold text-xl text-foreground">SmileCare Network</div>
              <div className="text-xs text-muted-foreground">You Matter. Your Smile Matters.</div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-inter font-medium text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>

                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 py-2 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px]">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => scrollToSection(subItem.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Instagram Link */}
            <motion.a
              href="https://instagram.com/smilecarenetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 font-inter font-medium text-foreground hover:bg-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </button>
                  {item.subItems && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => scrollToSection(subItem.id)}
                          className="block w-full text-left px-4 py-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="https://instagram.com/smilecarenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  )
}

export default Navigation