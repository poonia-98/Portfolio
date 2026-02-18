import { motion } from 'framer-motion'
import { FiMail, FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-slate-800"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-slate-500 mb-10"
        >
          I'm currently open to new opportunities and collaborations.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          href="mailto:kuldeeppoonia20298@gmail.com"
          className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
        >
          <FiMail className="group-hover:rotate-12 transition-transform" />
          kuldeeppoonia20298@gmail.com
          <FiSend className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  )
}

export default Contact