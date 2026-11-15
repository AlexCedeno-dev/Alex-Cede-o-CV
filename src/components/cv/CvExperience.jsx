import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import CvHeading from './CvHeading'
import CvSeal from './CvSeal'
import { easeOutStrong, cardStampDelay } from '../../motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'

const TILTS = [-4, 3, -2, 4]

// § II Experiencia: una card en acordeón por empresa, con su sello en la esquina.
export default function CvExperience() {
  const [openIndex, setOpenIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : 0.25
  const { t } = useLanguage()
  const { jobs, cvPage } = useContent()

  return (
    <section id="experience" aria-labelledby="cv-experience-title">
      <div className="wrap">
        <CvHeading numero="§ II" id="cv-experience-title">{cvPage.sections.experience}</CvHeading>
        <div className="cv-cards">
          {jobs.map((job, i) => {
            const isOpen = openIndex === i
            const triggerId = `cv-job-trigger-${i}`
            const panelId = `cv-job-panel-${i}`
            return (
              <Reveal as="article" key={job.id} className="cv-card card-fx" card delay={i * 0.09}>
                <div className="cv-card-seal">
                  <CvSeal seal={cvPage.seals[job.id]} tilt={TILTS[i % TILTS.length]} delay={cardStampDelay + i * 0.09} />
                </div>
                <p className="cv-card-date">{job.date}</p>
                <h3 className="cv-card-heading">
                  <button
                    id={triggerId}
                    className="cv-card-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="cv-card-trigger-text">
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
                      <p className="job-descripcion cv-text">{job.descripcion}</p>
                      <div className="tags">
                        {job.tecnologias.map((tech) => (
                          <span key={tech} className="tag">{tech}</span>
                        ))}
                      </div>
                      <p className="folio job-ref">{t.experience.ref} {job.id}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
