'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  delay?: number
  duration?: string
  distance?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = '700ms',
    distance = '30px',
    direction = 'up'
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}, 0)`
      case 'down':
        return `translate3d(0, -${distance}, 0)`
      case 'left':
        return `translate3d(${distance}, 0, 0)`
      case 'right':
        return `translate3d(-${distance}, 0, 0)`
      default:
        return `translate3d(0, ${distance}, 0)`
    }
  }

  const style = {
    transform: getTransform(),
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  }

  return { ref, style, isVisible }
}