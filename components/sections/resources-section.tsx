'use client'

import { Container } from '@/components/ui/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ResourcesSection = () => {
  const dentalPrograms = [
    {
      title: "Alberta Health Services Community Oral Health Programs",
      description: "Community dental clinics offering reduced-fee services",
      eligibility: "Low income families without dental insurance"
    },
    {
      title: "Smiles 4 Canada",
      description: "Orthodontic services for children",
      eligibility: "Low income youths before their 14th birthday with orthodontic needs"
    },
    {
      title: "Non-Insured Health Benefits Program (NIHB)",
      description: "Comprehensive dental services for First Nations and Inuit",
      eligibility: "All registered First Nations and Inuit residents in Canada"
    },
    {
      title: "Mustard Seed",
      description: "Dental services in Calgary, Red Deer, Edmonton",
      eligibility: "Children and seniors who are residents of the Mustard Seed"
    },
    {
      title: "Mosaic Primary Health Network (MPCN)",
      description: "Free dental screenings and fluoride varnish for children",
      eligibility: "Children age 1-5 in Calgary MPCN catchment area"
    },
    {
      title: "Interim Federal Health Program (IFHP)",
      description: "Emergency dental care for refugees",
      eligibility: "Individuals covered under Supplemental Coverage"
    },
    {
      title: "Dental and Optical Assistance for Seniors Program (DASP)",
      description: "Up to $5,000 coverage every 5 years for seniors",
      eligibility: "Alberta residents 65+ based on income"
    },
    {
      title: "About Face",
      description: "Support for individuals with facial differences including cleft palate",
      eligibility: "Anyone of any age with a facial difference"
    },
    {
      title: "Children's Oral Health Initiative (COHI)",
      description: "Free preventive services for First Nations children",
      eligibility: "Infants and children in First Nations Communities"
    },
    {
      title: "Burns Memorial Fund",
      description: "Payment assistance for urgent dental needs",
      eligibility: "Children under 21 in Calgary with urgent dental needs not covered by insurance"
    },
    {
      title: "Alberta Child Health Benefit (ACHB)",
      description: "Free basic health benefits and routine dental services",
      eligibility: "Children under 18 in low-income families"
    },
    {
      title: "Alberta Adult Health Benefit (AAHB)",
      description: "Basic dental services for eligible adults",
      eligibility: "People leaving income support, pregnant women, those with prescription needs"
    },
    {
      title: "AISH (Assured Income for the Severely Handicapped)",
      description: "Routine dental services and dentures",
      eligibility: "AISH clients and their dependants"
    },
    {
      title: "Alberta Works",
      description: "Dental coverage for income support recipients",
      eligibility: "People receiving social assistance and their dependants"
    },
    {
      title: "University Dental Clinics",
      description: "Affordable dental services at training institutions",
      eligibility: "General public seeking reduced-cost dental care"
    },
    {
      title: "Community Health Centres",
      description: "Dental services for vulnerable populations",
      eligibility: "Those with health, social, or financial hardships"
    }
  ]

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-accent/5 to-primary/10">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Educational Resources</h2>
          <p className="text-xl text-muted-foreground mb-8">Alberta Dental Programs and Services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalPrograms.map((program, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <strong>Eligibility:</strong> {program.eligibility}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">Need Help Accessing These Services?</h3>
            <p className="text-muted-foreground">
              Contact your local health authority or visit community health centers for assistance with applications and referrals to these dental programs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResourcesSection