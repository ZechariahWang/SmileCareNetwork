'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/container'

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <Container>
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center p-0.5">
              <Image
                src="/SmileCare_Network_Logo.png"
                alt="SmileCare Network Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain rounded-full"
              />
            </div>
            <span className="font-bold text-lg">SmileCare Network</span>
          </div>

          <div className="flex items-center justify-center space-x-6 text-muted-foreground">
            <span>hello@smilecarenetwork.org</span>
            <a
              href="https://instagram.com/smilecarenetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="text-muted-foreground text-sm">
            <p>Founded 2025 • Copyright © SmileCare Network</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer