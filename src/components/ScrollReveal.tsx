'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: string
  distance?: string
  threshold?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = '700ms',
  distance = '30px',
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const { ref, style } = useScrollAnimation({
    direction,
    delay,
    duration,
    distance,
    threshold,
  })

  const combinedClassName = `${className}`.trim()

  return (
    <Component
      ref={ref as any}
      style={style}
      className={combinedClassName}
    >
      {children}
    </Component>
  )
}