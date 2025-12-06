import { useEffect, useRef } from 'react'
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiSpring, SiNodedotjs,
  SiPython, SiCplusplus, SiMongodb, SiPostgresql, SiGit,
  SiCsharp, SiDotnet, SiDjango, SiMysql, SiDocker, SiAmazonaws
} from 'react-icons/si'
import { FaJava, FaMicrosoft } from 'react-icons/fa'

// Safe GSAP import with fallback
let gsap, ScrollTrigger
try {
  gsap = require('gsap')
  ScrollTrigger = require('gsap/ScrollTrigger')
  if (typeof window !== 'undefined' && gsap) {
    gsap.registerPlugin(ScrollTrigger)
  }
} catch (e) {
  gsap = {
    from: () => {},
    to: () => {},
    context: (fn) => {
      try { fn() } catch (e) {}
      return { revert: () => {} }
    },
  }
  ScrollTrigger = { create: () => {} }
}

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const technologies = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    // { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    // { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Spring', icon: SiSpring, color: 'text-green-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    // { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
    { name: 'C#', icon: SiCsharp, color: 'text-purple-500' },
    { name: '.NET', icon: SiDotnet, color: 'text-purple-600' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    // { name: 'Power BI', icon: FaMicrosoft, color: 'text-yellow-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-500' },
  ]

  useEffect(() => {
    if (!gsap || !gsap.context) return
    
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out',
      })

      // Cards stagger animation with scroll trigger
      const cards = cardsRef.current?.children || []
      
      gsap.from(cards, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        rotation: -5,
        duration: 0.6,
        stagger: {
          amount: 0.8,
          from: 'start',
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none none',
        },
      })

      // Hover animations for cards
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.1,
            y: -10,
            rotation: 2,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-container relative z-10 bg-white dark:bg-dark-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Technologies I work with
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-dark-800/60 border border-gray-200 dark:border-transparent rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${tech.color} mb-2 sm:mb-3`} />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
