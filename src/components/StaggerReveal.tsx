'use client'

import { ReactNode, Children } from 'react'
import ScrollReveal from './ScrollReveal'

interface StaggerRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  staggerDelay?: number
  baseDelay?: number
  duration?: string
  distance?: string
  threshold?: number
  className?: string
}

export default function StaggerReveal({
  children,
  direction = 'up',
  staggerDelay = 100,
  baseDelay = 0,
  duration = '700ms',
  distance = '30px',
  threshold = 0.1,
  className = '',
}: StaggerRevealProps) {
  const childArray = Children.toArray(children)

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          distance={distance}
          threshold={threshold}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}