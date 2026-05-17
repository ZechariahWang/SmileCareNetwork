'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Mail, Instagram } from 'lucide-react'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
]

const Footer = () => {
  return (
    <footer className="bg-muted/20 py-6">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/SmileCare_Network_Logo.png"
              alt="SmileCare Network Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-bold text-foreground">SmileCare Network</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="mailto:info.smilecarenetwork@gmail.com"
              aria-label="Email SmileCare Network"
              className="hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/smilecarenetwork"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SmileCare Network on Instagram"
              className="hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground md:text-left">
          Founded 2025 · © SmileCare Network
        </p>
      </Container>
    </footer>
  )
}

export default Footer
