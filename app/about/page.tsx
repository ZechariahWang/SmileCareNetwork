import Navigation from '@/components/navigation'
import AboutPageClient from '@/components/about-page-client'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: "About Us - SmileCare Network",
  description: "Learn about SmileCare Network's mission, impact, and team. We believe everyone deserves to smile with confidence and are committed to promoting dignity and health in underserved communities.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutPageClient />
      <Footer />
    </>
  )
}