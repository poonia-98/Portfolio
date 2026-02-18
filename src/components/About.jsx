import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'FastAPI', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Elasticsearch', level: 75 },
  { name: 'Docker', level: 80 },
  { name: 'AI Automation', level: 85 },
  { name: 'Celery / Redis', level: 75 },
  { name: 'Next.js', level: 70 },
]

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                I am a Python & AI Engineer focused on building intelligent backend systems and automation platforms that solve real-world problems. My primary interest lies in combining backend engineering with artificial intelligence to create systems that can analyse data, make decisions, and execute workflows automatically.
              </p>
              <p>
                I specialise in developing scalable backend services using <strong className="text-blue-600">Python</strong> and <strong className="text-blue-600">FastAPI</strong>, and integrating machine learning models into production environments. I enjoy working on systems that go beyond basic CRUD applications — systems that automate complex processes, handle background tasks reliably, and provide meaningful insights from data.
              </p>
              <p>
                One of my key projects is an <strong className="text-blue-600">AI-powered support ticket automation platform</strong> that can automatically analyse tickets, predict severity using machine learning, assign them based on workload, and manage the entire lifecycle without manual intervention. This project gave me hands-on experience with distributed task processing, workflow automation, and production-level backend architecture.
              </p>
              <p>
                I have experience working with technologies such as <strong className="text-blue-600">FastAPI, Elasticsearch, Redis, Celery, Docker, and Next.js</strong>. I am comfortable designing end-to-end systems, from backend APIs and automation workflows to deployment and monitoring.
              </p>
              <p>
                I am continuously learning and building projects that improve my understanding of scalable system design, AI integration, and backend engineering. My goal is to contribute to building reliable, intelligent systems that improve efficiency and reduce manual effort.
              </p>
              <p className="bg-slate-100 p-4 rounded-lg border-l-4 border-blue-500 text-slate-700">
                I am currently seeking opportunities as a Python Backend Engineer or AI Engineer where I can apply my skills, contribute to real-world systems, and continue growing as a developer.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-slate-800">
              Core Competencies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About