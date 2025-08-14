'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'

interface CategoryNavigationProps {
  categories: string[]
}

export default function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = useState('')
  const locale = useLocale()
  const t = useTranslations('products')

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
    <ScrollReveal direction="down" delay={100}>
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          {/* ナビゲーション背景装飾 */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-white/80 to-slate-50/50"></div>
          
          <div className="relative z-10 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            <ScrollReveal direction="left" delay={200}>
              <div className="flex items-center space-x-3 whitespace-nowrap mr-6">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600 font-bold tracking-widest uppercase">
                  {t('selectCategory')}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full animate-pulse delay-300"></div>
              </div>
            </ScrollReveal>
            
            <StaggerReveal staggerDelay={100} baseDelay={300} className="flex space-x-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={`group relative px-6 py-3 text-sm font-bold tracking-wide whitespace-nowrap rounded-xl transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white scale-105 shadow-2xl'
                      : 'text-slate-700 hover:text-white bg-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-700 border-2 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {/* アクティブ状態の背景グロー */}
                  {activeCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-700/20 blur-xl"></div>
                  )}
                  
                  {/* ホバー時の光る効果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  
                  <span className="relative z-10">{category}</span>
                  
                  {/* アクティブ時のインジケーター */}
                  {activeCategory === category && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-slate-300 to-white rounded-full shadow-lg animate-pulse"></div>
                  )}
                  
                  {/* カテゴリ番号バッジ */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-gradient-to-br from-slate-300 to-white text-slate-800 scale-100 opacity-100'
                      : 'bg-gradient-to-br from-slate-500 to-slate-600 text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </button>
              ))}
            </StaggerReveal>
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
    </ScrollReveal>
  )
}