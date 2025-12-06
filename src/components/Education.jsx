import { useEffect, useRef } from 'react'
import { FiFileText, FiMapPin, FiCalendar } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

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

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'Indira College of Commerce & Science',
      location: 'Pune, India',
      period: '2024 - Present',
      status: 'Pursuing',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      iconBg: 'bg-green-500',
      borderColor: 'border-green-500',
      subjects: ['Advanced Algorithms', 'Data Structures', 'Machine Learning', 'Software Architecture'],
    },
    {
      degree: 'Bachelor of Computer Science (BCS)',
      institution: 'K J Somaiya Arts, Commerce & Science College',
      location: 'Kopargaon, India',
      period: '2021 - 2024',
      status: 'Completed',
      statusColor: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-500',
      subjects: ['Object-Oriented Programming', 'Database Management', 'Web Development', 'Software Engineering'],
    },
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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Cards animation
      const cards = cardsRef.current?.children || []
      
      gsap.from(cards, {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100),
        scale: 0.9,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      // Card hover animations
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
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
      id="education"
      ref={sectionRef}
      className="section-container relative z-10 bg-white dark:bg-dark-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Education
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div ref={cardsRef} className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-800/60 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700"
              style={{
                borderBottomColor: edu.iconBg.includes('green') ? '#10b981' : '#3b82f6',
                borderBottomWidth: '4px',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className={`${edu.iconBg} p-3 sm:p-4 rounded-lg flex-shrink-0`}>
                  <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <span
                      className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold ${edu.statusColor} self-start sm:self-center`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                      <FiFileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="break-words">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                      <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                      <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-200 mb-2 sm:mb-3">
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-dark-700/50 text-gray-800 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
