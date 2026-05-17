'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, ChevronDown } from 'lucide-react'

type Category =
  | 'Children & Youth'
  | 'Seniors'
  | 'Indigenous Communities'
  | 'Low-Income Adults'
  | 'General Access'

interface Program {
  title: string
  description: string
  eligibility: string
  category: Category
}

const CATEGORY_ORDER: Category[] = [
  'Children & Youth',
  'Seniors',
  'Indigenous Communities',
  'Low-Income Adults',
  'General Access'
]

const dentalPrograms: Program[] = [
  {
    title: 'Alberta Health Services Community Oral Health Programs',
    description: 'Community dental clinics offering reduced-fee services',
    eligibility: 'Low income families without dental insurance',
    category: 'General Access'
  },
  {
    title: 'Smiles 4 Canada',
    description: 'Orthodontic services for children',
    eligibility: 'Low income youths before their 14th birthday with orthodontic needs',
    category: 'Children & Youth'
  },
  {
    title: 'Non-Insured Health Benefits Program (NIHB)',
    description: 'Comprehensive dental services for First Nations and Inuit',
    eligibility: 'All registered First Nations and Inuit residents in Canada',
    category: 'Indigenous Communities'
  },
  {
    title: 'Mustard Seed',
    description: 'Dental services in Calgary, Red Deer, Edmonton',
    eligibility: 'Children and seniors who are residents of the Mustard Seed',
    category: 'General Access'
  },
  {
    title: 'Mosaic Primary Health Network (MPCN)',
    description: 'Free dental screenings and fluoride varnish for children',
    eligibility: 'Children age 1-5 in Calgary MPCN catchment area',
    category: 'Children & Youth'
  },
  {
    title: 'Interim Federal Health Program (IFHP)',
    description: 'Emergency dental care for refugees',
    eligibility: 'Individuals covered under Supplemental Coverage',
    category: 'General Access'
  },
  {
    title: 'Dental and Optical Assistance for Seniors Program (DASP)',
    description: 'Up to $5,000 coverage every 5 years for seniors',
    eligibility: 'Alberta residents 65+ based on income',
    category: 'Seniors'
  },
  {
    title: 'About Face',
    description: 'Support for individuals with facial differences including cleft palate',
    eligibility: 'Anyone of any age with a facial difference',
    category: 'General Access'
  },
  {
    title: "Children's Oral Health Initiative (COHI)",
    description: 'Free preventive services for First Nations children',
    eligibility: 'Infants and children in First Nations Communities',
    category: 'Indigenous Communities'
  },
  {
    title: 'Burns Memorial Fund',
    description: 'Payment assistance for urgent dental needs',
    eligibility: 'Children under 21 in Calgary with urgent dental needs not covered by insurance',
    category: 'Children & Youth'
  },
  {
    title: 'Alberta Child Health Benefit (ACHB)',
    description: 'Free basic health benefits and routine dental services',
    eligibility: 'Children under 18 in low-income families',
    category: 'Children & Youth'
  },
  {
    title: 'Alberta Adult Health Benefit (AAHB)',
    description: 'Basic dental services for eligible adults',
    eligibility: 'People leaving income support, pregnant women, those with prescription needs',
    category: 'Low-Income Adults'
  },
  {
    title: 'AISH (Assured Income for the Severely Handicapped)',
    description: 'Routine dental services and dentures',
    eligibility: 'AISH clients and their dependants',
    category: 'Low-Income Adults'
  },
  {
    title: 'Alberta Works',
    description: 'Dental coverage for income support recipients',
    eligibility: 'People receiving social assistance and their dependants',
    category: 'Low-Income Adults'
  },
  {
    title: 'University Dental Clinics',
    description: 'Affordable dental services at training institutions',
    eligibility: 'General public seeking reduced-cost dental care',
    category: 'General Access'
  },
  {
    title: 'Community Health Centres',
    description: 'Dental services for vulnerable populations',
    eligibility: 'Those with health, social, or financial hardships',
    category: 'General Access'
  }
]

const ResourcesSection = () => {
  const [query, setQuery] = useState('')
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const isSearching = query.trim().length > 0

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = dentalPrograms.filter((p) =>
      q === '' ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.eligibility.toLowerCase().includes(q)
    )
    return CATEGORY_ORDER.map((category) => ({
      category,
      programs: matches.filter((p) => p.category === category)
    })).filter((group) => group.programs.length > 0)
  }, [query])

  const toggleCategory = (category: string) => {
    setCollapsed((prev) => ({ ...prev, [category]: !prev[category] }))
  }

  return (
    <div id="resources" className="space-y-8">
      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search programs..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base"
          aria-label="Search dental programs"
        />
      </div>

      {/* Grouped accordion */}
      {grouped.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          No programs match your search.
        </p>
      ) : (
        <div className="space-y-4">
          {grouped.map(({ category, programs }) => {
            const isOpen = isSearching || !collapsed[category]
            return (
              <div
                key={category}
                className="glass-panel rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/20 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">
                    {category}
                    <span className="text-muted-foreground font-normal ml-2">
                      ({programs.length})
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-4 p-6 pt-2">
                        {programs.map((program) => (
                          <div
                            key={program.title}
                            className="rounded-2xl border border-border bg-muted/10 p-5"
                          >
                            <h3 className="font-semibold text-foreground leading-snug mb-1">
                              {program.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {program.description}
                            </p>
                            <span className="inline-block rounded-full bg-accent/10 text-accent text-xs px-3 py-1">
                              {program.eligibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      )}

      {/* Help callout */}
      <div className="max-w-2xl mx-auto p-8 bg-muted/20 rounded-2xl text-center">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Need Help Accessing These Services?
        </h3>
        <p className="text-muted-foreground">
          Contact your local health authority or visit community health centers for assistance with applications and referrals to these dental programs.
        </p>
      </div>
    </div>
  )
}

export default ResourcesSection
