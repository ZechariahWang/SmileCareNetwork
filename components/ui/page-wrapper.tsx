import { Container } from '@/components/ui/container'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

interface PageWrapperProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  className?: string
}

export const PageWrapper = ({ children, title, subtitle, className = '' }: PageWrapperProps) => {
  return (
    <div className={`min-h-screen bg-background font-inter ${className}`}>
      <div className="pt-32 pb-16">
        <Container>
          <AnimatedWrapper className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.2}>
            {children}
          </AnimatedWrapper>
        </Container>
      </div>
    </div>
  )
}