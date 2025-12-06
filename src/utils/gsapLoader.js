// Safe GSAP loader with fallbacks
let gsap = null
let ScrollTrigger = null
let ScrollToPlugin = null

try {
  gsap = require('gsap')
  ScrollTrigger = require('gsap/ScrollTrigger')
  ScrollToPlugin = require('gsap/ScrollToPlugin')
  
  if (typeof window !== 'undefined' && gsap) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  }
} catch (error) {
  console.warn('GSAP not available, animations will be disabled:', error.message)
  // Create mock GSAP object
  gsap = {
    from: () => {},
    to: () => {},
    fromTo: () => {},
    context: (fn) => ({ revert: () => {} }),
    registerPlugin: () => {},
  }
  ScrollTrigger = {
    create: () => {},
  }
}

export { gsap, ScrollTrigger, ScrollToPlugin }

