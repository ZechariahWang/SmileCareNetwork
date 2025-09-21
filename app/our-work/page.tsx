import Navigation from '@/components/navigation'
import { PageWrapper } from '@/components/ui/page-wrapper'
import OurWorkSection from '@/components/sections/our-work-section'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: "Our Work - SmileCare Network",
  description: "Discover how SmileCare Network is making a difference through SmileKits and community outreach programs in underserved communities.",
}

export default function OurWorkPage() {
  return (
    <>
      <Navigation />
      <PageWrapper
        title="Our Work"
        subtitle="Discover how we're making a difference through SmileKits and community outreach"
      >
        <OurWorkSection />
      </PageWrapper>
      <Footer />
    </>
  )
}