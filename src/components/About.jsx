import { useEffect, useRef } from 'react'

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

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!gsap || !gsap.context) return
    
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Content paragraphs animation
      const paragraphs = contentRef.current?.children || []
      gsap.from(paragraphs, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      })

      // Stats animation
      const stats = statsRef.current?.children || []
      gsap.from(stats, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
      })

      // Counter animation for stats
      stats.forEach((stat) => {
        const valueElement = stat.querySelector('.stat-value')
        const finalValue = valueElement?.textContent || '0'
        const numericValue = parseInt(finalValue) || 0
        
        if (numericValue > 0) {
          ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
              gsap.fromTo(
                { value: 0 },
                {
                  value: numericValue,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: function () {
                    if (valueElement) {
                      valueElement.textContent = Math.ceil(this.targets()[0].value) + '+'
                    }
                  },
                }
              )
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Heading */}
        <div ref={titleRef} className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-500 dark:to-purple-600 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 dark:from-purple-400 dark:via-pink-500 dark:to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div ref={contentRef} className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Hi there! I'm a passionate{' '}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Full Stack Developer</span> with experience building
            exceptional digital experiences. I love crafting efficient, scalable, and user-friendly applications that
            solve real-world problems. Specializing in <span className="text-purple-600 dark:text-purple-400">Java</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400">C#</span>, <span className="text-purple-600 dark:text-purple-400">.NET</span>, and{' '}
            <span className="text-purple-600 dark:text-purple-400">Python</span> development.
          </p>

          <p>
            My journey in software development began during my computer science studies, where I discovered my passion
            for turning complex problems into elegant solutions. Since then, I've worked with various technologies and
            frameworks including <span className="text-emerald-600 dark:text-emerald-400">Spring Boot</span>,{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Django</span>, <span className="text-emerald-600 dark:text-emerald-400">React</span>, and{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Machine Learning</span> to create applications that users love.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through writing technical articles and mentoring aspiring developers. I'm always eager
            to learn and take on challenging projects that push the boundaries of what's possible.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: 'Years of Experience', value: '3+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Technologies', value: '10+' },
            { label: 'Happy Clients', value: '15+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-gray-100 dark:bg-dark-800/60 border border-gray-300 dark:border-purple-500/20 rounded-xl backdrop-blur-sm hover:border-purple-600 dark:hover:border-purple-400 transition-colors cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  y: -5,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out',
                })
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2 stat-value">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
