import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = (animationFn, dependencies = []) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current && animationFn) {
      const ctx = gsap.context(() => {
        animationFn(elementRef.current)
      }, elementRef)

      return () => ctx.revert()
    }
  }, dependencies)

  return elementRef
}

export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
    }
  )
}

export const fadeIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
    }
  )
}

export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'back.out(1.7)',
    }
  )
}

export const slideInLeft = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
    }
  )
}

export const slideInRight = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
    }
  )
}

export const staggerChildren = (parent, children, delay = 0.1) => {
  gsap.fromTo(
    children,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: delay,
      ease: 'power2.out',
    }
  )
}

export const scrollReveal = (element, options = {}) => {
  const {
    trigger = element,
    start = 'top 80%',
    end = 'bottom 20%',
    animation = fadeInUp,
    ...rest
  } = options

  ScrollTrigger.create({
    trigger,
    start,
    end,
    onEnter: () => animation(element),
    ...rest,
  })
}

export default useGSAP

