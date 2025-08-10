'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'

interface CategoryNavigationProps {
  categories: string[]
}

export default function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = useState('')
  const locale = useLocale()

  const scrollToCategory = (categoryTitle: string) => {
    const element = document.getElementById(`category-${categoryTitle}`)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveCategory(categoryTitle)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(category => ({
        id: `category-${category}`,
        element: document.getElementById(`category-${category}`)
      })).filter(section => section.element)

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })

      if (currentSection) {
        setActiveCategory(currentSection.id.replace('category-', ''))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories])

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          <span className="text-sm text-slate-500 font-medium tracking-wide whitespace-nowrap mr-4">
            {locale === 'ja' ? 'カテゴリ:' : 'Categories:'}
          </span>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wide whitespace-nowrap rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}