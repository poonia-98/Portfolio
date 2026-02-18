import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">
            Kuldeep
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">Contact</a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/poonia-98" target="_blank" rel="noopener" className="text-2xl text-slate-500 hover:text-blue-600 transition">
                <FiGithub />
              </a>
              <a href="#" target="_blank" rel="noopener" className="text-2xl text-slate-500 hover:text-blue-600 transition">
                <FiLinkedin />
              </a>
              <a href="mailto:kuldeeppoonia20298@gmail.com" className="text-2xl text-slate-500 hover:text-blue-600 transition">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-blue-600">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 border border-slate-200 shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com/poonia-98" target="_blank" rel="noopener" className="text-2xl text-slate-500 hover:text-blue-600">
                  <FiGithub />
                </a>
                <a href="#" target="_blank" rel="noopener" className="text-2xl text-slate-500 hover:text-blue-600">
                  <FiLinkedin />
                </a>
                <a href="mailto:kuldeeppoonia20298@gmail.com" className="text-2xl text-slate-500 hover:text-blue-600">
                  <FiMail />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar