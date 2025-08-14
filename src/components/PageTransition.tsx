'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative">
      {/* ページ遷移オーバーレイ */}
      <div 
        className={`fixed inset-0 z-40 bg-gradient-to-br from-slate-900 to-slate-800 transition-opacity duration-300 pointer-events-none ${
          isTransitioning ? 'opacity-20' : 'opacity-0'
        }`}
      />
      
      {/* フェードイン効果 */}
      <div 
        className={`transition-all duration-300 ${
          isTransitioning 
            ? 'opacity-0 transform translate-y-2' 
            : 'opacity-100 transform translate-y-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}