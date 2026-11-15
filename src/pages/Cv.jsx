import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CvLetter from '../components/cv/CvLetter'
import CvExperience from '../components/cv/CvExperience'
import CvCredentials from '../components/cv/CvCredentials'
import CvSkillsLink from '../components/cv/CvSkillsLink'
import CvPdf from '../components/cv/CvPdf'
import Hobbies from '../components/Hobbies'
import Contacto from '../components/Contacto'
import { useLanguage } from '../i18n/LanguageContext'

export default function Cv() {
  const { t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const id = location.state?.scrollTo
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [location])

  return (
    <main>
      <PageHeader eyebrow={t.pages.cvEyebrow} title={t.pages.cvTitle} />
      <CvLetter />
      <CvExperience />
      <CvCredentials numero="§ III" idsKey="educationIds" headingKey="education" anchor="education" />
      <CvCredentials numero="§ IV" idsKey="certificationIds" headingKey="certifications" anchor="certifications" />
      <CvSkillsLink />
      <CvPdf />
      <Hobbies />
      <Contacto />
    </main>
  )
}
