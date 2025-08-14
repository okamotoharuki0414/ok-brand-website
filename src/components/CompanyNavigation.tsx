'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const navigationItems = [
  { id: 'greeting', labelKey: 'nav.greeting' },
  { id: 'mission', labelKey: 'nav.mission' },
  { id: 'overview', labelKey: 'nav.overview' },
  { id: 'history', labelKey: 'nav.history' },
  { id: 'features', labelKey: 'nav.features' },
  { id: 'production', labelKey: 'nav.production' },
  { id: 'access', labelKey: 'nav.access' }
]

export default function CompanyNavigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isSticky, setIsSticky] = useState(false)
  const t = useTranslations('company')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180 // Adjusted for fixed header + nav height

      // Check if navigation should be sticky
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsSticky(scrollPosition > heroBottom)
      }

      // Find active section
      for (const item of navigationItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 160 // Adjusted for fixed header + nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`transition-all duration-300 z-30 ${
      isSticky 
        ? 'fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md' 
        : 'relative bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-serif text-slate-800 hidden md:block">
            Company Information
          </h2>
          
          <nav className="flex-1 md:flex-none">
            <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}