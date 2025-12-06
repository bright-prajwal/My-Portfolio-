import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 border-t border-gray-300 dark:border-purple-500/20 text-gray-700 dark:text-gray-300 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm">
            © {currentYear} <span className="font-semibold gradient-text">Prajwal Hon</span>. 
            All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-500">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

