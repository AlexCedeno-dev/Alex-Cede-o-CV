import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { easeOutStrong } from '../motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useContent } from '../data/useContent'

export default function Experiencia() {
  const [openIndex, setOpenIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : 0.22
  const { t } = useLanguage()
  const { jobs } = useContent()

  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading numero="§ II">{t.experience.heading}</SectionHeading>
        {jobs.map((job, i) => {
          const isOpen = openIndex === i
          const triggerId = `job-trigger-${i}`
          const panelId = `job-panel-${i}`
          return (
            <Reveal key={job.id} className="job">
              <div className="job-date">{job.date}</div>
              <div>
                <h3 className="job-heading">
                  <button
                    id={triggerId}
                    className="job-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="job-trigger-text">
                      <span className="job-role">{job.role}</span>
                      <span className="job-org">{job.org}</span>
                    </span>
                    <motion.span
                      className="job-chevron"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration, ease: easeOutStrong }}
                      aria-hidden="true"
                    >
                      ▶
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration, ease: easeOutStrong }}
                      className="job-panel"
                    >
                      <p className="job-descripcion">{job.descripcion}</p>
                      <div className="tags">
                        {job.tecnologias.map((tech) => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>
                      <p className="folio job-ref">{t.experience.ref} {job.id}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
