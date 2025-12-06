import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'

const Collaborate = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const opportunities = [
    {
      title: 'Open Source Projects',
      description: "Let's contribute to meaningful open source projects together. I'm always excited to collaborate on projects that make a positive impact on the developer community.",
      icon: FaCode,
      iconBg: 'bg-green-500',
    },
    {
      title: 'Team Projects',
      description: "Looking for a reliable team member? I bring technical expertise, collaborative spirit, and dedication to delivering high-quality solutions.",
      icon: FaUsers,
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Innovative Ideas',
      description: "Have a brilliant idea that needs technical execution? Let's brainstorm and build something amazing together from concept to completion.",
      icon: FaLightbulb,
      iconBg: 'bg-orange-500',
    },
    {
      title: 'Startup Ventures',
      description: "Interested in joining early-stage startups or building MVP prototypes. I'm passionate about turning innovative concepts into reality.",
      icon: FaRocket,
      iconBg: 'bg-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="collaborate" ref={ref} className="section-container relative z-10 bg-white dark:bg-dark-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Let's Collaborate
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always excited to work on interesting projects and collaborate with passionate developers.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-2">
            Here's how we can work together to create something amazing.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {opportunities.map((opp, index) => {
            const IconComponent = opp.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-dark-800/60 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-purple-500/20"
              >
                <div className={`${opp.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                  {opp.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  {opp.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Collaborate

