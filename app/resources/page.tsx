import Navigation from '@/components/navigation'
import { PageWrapper } from '@/components/ui/page-wrapper'
import ResourcesSection from '@/components/sections/resources-section'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: "Resources - SmileCare Network",
  description: "Find helpful information about oral health, dental care, and resources for maintaining good oral hygiene in your community.",
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <PageWrapper
        title="Resources"
        subtitle="Find helpful information about oral health and dental care"
      >
        <ResourcesSection />
      </PageWrapper>
      <Footer />
    </>
  )
}