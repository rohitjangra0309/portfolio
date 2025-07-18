import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, linkedin } from '../assets'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: github,
      url: 'https://github.com/rohitjangra0309?tab=repositories', // Replace with your GitHub URL
    },
    {
      name: 'LinkedIn',
      icon: linkedin,
      url: 'https://www.linkedin.com/in/rohit-jangra-72453418b/', // Replace with your LinkedIn URL
    },
    {
      name: 'Resume',
      icon: null, // We'll use a text-based link
      url: 'https://drive.google.com/file/d/1pek1UsiaSx5hrvtESyvnFqPjUmuQfdD1/view?usp=sharing', // Replace with your Google Drive resume link
    },
  ]

  return (
    <motion.footer 
      className={`${styles.paddingX} py-8 bg-black-gradient border-t border-[#915eff]/20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Left side - Copyright */}
        <div className="flex items-center mb-4 sm:mb-0">
          <p className="text-secondary text-sm">
            © {currentYear} Rohit. All rights reserved.
          </p>
        </div>

        {/* Right side - Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon ? (
                <img 
                  src={link.icon} 
                  alt={link.name}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <span className="text-sm font-medium hover:text-[#915eff] transition-colors">
                  {link.name}
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Bottom divider line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#915eff] to-transparent mt-6" />
    </motion.footer>
  )
}

export default Footer 