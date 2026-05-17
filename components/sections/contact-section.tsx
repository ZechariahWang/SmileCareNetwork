'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Smartphone, Instagram } from 'lucide-react'

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
    <div id="contact">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-base"
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
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-base"
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
                    className="w-full px-3 py-3 md:py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent h-32 md:h-32 resize-none text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 rounded-xl bg-green-100 text-green-800 text-sm">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-800 text-sm">
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
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
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
    </div>
  )
}

export default ContactSection