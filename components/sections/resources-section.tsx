'use client'

import { Container } from '@/components/ui/container'

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Resources</h2>
          <p className="text-xl text-muted-foreground mb-8">Coming soon - downloadable PDFs, brushing charts, and educational materials</p>
          <div className="max-w-md mx-auto p-8 border-2 border-dashed border-muted-foreground/30 rounded-lg">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-muted-foreground">Educational resources and materials will be available here soon.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResourcesSection