import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

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

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const projects = [
    {
      title: 'Water Potability Prediction System',
      description: 'ML-based model to predict drinking water safety using chemical, physical & biological parameters. Achieved 99% accuracy with XGBoost and added Power BI dashboards.',
      tech: ['Python', 'R', 'Power BI', 'XGBoost', 'Machine Learning'],
      icon: '💧',
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart Contact Manager',
      description: 'Secure contact management system with authentication, role-based access, CRUD operations, and data storage.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: '📇',
      github: '#',
      demo: '#',
    },
    {
      title: 'OYO Clone Website',
      description: 'A hotel booking UI clone with search, filters, responsive design, and fully functional front-end interface.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: '🏨',
      github: '#',
      demo: '#',
    },
    {
      title: 'Expense Tracker (Django)',
      description: 'Personal finance management app with daily expense logging, category management, reporting, and admin interface.',
      tech: ['Django', 'SQLite', 'Bootstrap', 'Python'],
      icon: '💰',
      github: '#',
      demo: '#',
    },
    {
      title: 'NASA APOD Explorer',
      description: 'Fetches NASA Astronomy Picture of the Day with date-based search, image viewer, and API integration.',
      tech: ['React.js', 'Axios', 'NASA API'],
      icon: '🚀',
      github: '#',
      demo: '#',
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

      // Cards animation with scroll trigger
      const cards = cardsRef.current?.children || []
      
      gsap.from(cards, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 5,
        duration: 0.8,
        stagger: {
          amount: 1,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })

      // Hover animations
      cards.forEach((card) => {
        const cardElement = card.querySelector('.project-card')
        
        card.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -15,
            scale: 1.02,
            rotation: 1,
            boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)',
            duration: 0.4,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            rotation: 0,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            duration: 0.4,
            ease: 'power2.out',
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-500 dark:to-purple-600 bg-clip-text text-transparent">
              My
            </span>{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 dark:from-purple-400 dark:via-pink-500 dark:to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card-wrapper">
              <div className="project-card bg-white dark:bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-6 border border-gray-200 dark:border-purple-500/20 h-full flex flex-col">
                <div className="text-4xl sm:text-5xl mb-4">{project.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-purple-600 dark:text-purple-400">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-dark-700/50 border border-gray-300 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300 rounded text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm sm:text-base"
                  >
                    <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm sm:text-base"
                  >
                    <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
