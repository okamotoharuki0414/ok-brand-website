'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function NavigationProgress() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
      setProgress(0)
      
      // プログレスバーのアニメーション
      let currentProgress = 0
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15
        if (currentProgress > 90) {
          clearInterval(interval)
        }
        setProgress(Math.min(currentProgress, 90))
      }, 100)

      return () => clearInterval(interval)
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 200)
    }

    // パスが変更されたときの処理
    let timeoutId: NodeJS.Timeout
    if (pathname) {
      // 短い遅延でローディング開始を検知
      timeoutId = setTimeout(() => {
        handleComplete()
      }, 50)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 transition-all duration-300 ease-out shadow-lg"
        style={{ 
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(148, 163, 184, 0.8)'
        }}
      />
    </div>
  )
}