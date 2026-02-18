import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'AI Ticket Automation',
    description: 'End‑to‑end automation platform that uses ML to classify, prioritise, and assign support tickets. Built with FastAPI, Celery, Redis, and scikit‑learn.',
    icon: '🤖',
    links: {  github: 'https://github.com/poonia-98/autosupport_agent' },
  },
  {
    title: 'DocMind',
    description: 'AI‑powered Android app that manages documents and extracts intelligent insights. Uses TensorFlow Lite for on‑device NLP.',
    icon: '🧠',
    links: { github: 'https://github.com/poonia-98/DocMind-App' },
  },
  {
    title: 'CodivraFrame',
    description: 'Modern website layout generator that produces clean, exportable HTML/CSS code. Built with React and Node.js.',
    icon: '💻',
    links: { demo: 'https://poonia-98.github.io/CodivraFrame/', github: 'https://github.com/poonia-98/codivraframe' },
  },
  {
    title: 'ML Model Serving API',
    description: 'Production‑ready API for serving multiple ML models with FastAPI, Prometheus monitoring, and Docker‑based deployment.',
    icon: '📈',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Elasticsearch Dashboard',
    description: 'Real‑time analytics dashboard for Elasticsearch with Kibana visualisations and a Flask backend.',
    icon: '📊',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Distributed Task Scheduler',
    description: 'Celery + Redis based distributed task queue with Flower monitoring, designed for large‑scale background jobs.',
    icon: '⏱️',
    links: { demo: '#', github: '#' },
  },
]

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:border-blue-400 transition-all"
            >
              <div className="h-48 flex items-center justify-center text-7xl bg-slate-50">
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-500 mb-5 text-sm leading-relaxed">{project.description}</p>

                <div className="flex gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium text-white transition"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-medium text-slate-700 transition"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects