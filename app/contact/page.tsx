import Navigation from '@/components/navigation'
import { PageWrapper } from '@/components/ui/page-wrapper'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: "Contact Us - SmileCare Network",
  description: "Get in touch with SmileCare Network to learn more about our mission, volunteer opportunities, or partnership possibilities.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <PageWrapper
        title="Contact Us"
        subtitle="Get in touch to learn more or get involved with our mission"
      >
        <ContactSection />
      </PageWrapper>
      <Footer />
    </>
  )
}