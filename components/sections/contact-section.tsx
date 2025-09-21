'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Mail, Smartphone } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mwpreeza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <Container>

        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Get in touch to donate, volunteer, or partner with us</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4">
          <Card className="p-4 md:p-6 lg:p-8">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>Send us a message and we&apos;ll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent h-32 md:h-32 resize-none text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 rounded-md bg-green-100 text-green-800 text-sm">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 rounded-md bg-red-100 text-red-800 text-sm">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            <Card className="p-4 md:p-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground break-all">info.smilecarenetwork@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span>Follow Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://instagram.com/smilecarenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@smilecarenetwork</span>
                </a>
              </CardContent>
            </Card>

            <Card className="p-4 md:p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">Sponsor a SmileKit</CardTitle>
                <CardDescription className="text-sm md:text-base">$2 covers one full SmileKit</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-base">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection