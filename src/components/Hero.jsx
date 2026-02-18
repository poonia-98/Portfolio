import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 opacity-80"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-800"
        >
          Python & AI Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-600 mb-4"
        >
          FastAPI • Machine Learning • Elasticsearch • Docker
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-500 max-w-2xl mx-auto mb-10"
        >
          Building AI automation systems that analyse, decide, and execute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition shadow-md"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-100 transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero