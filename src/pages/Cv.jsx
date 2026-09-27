import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Experiencia from '../components/Experiencia'
import Formacion from '../components/Formacion'
import Skills from '../components/Skills'
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
    <>
      <PageHeader eyebrow={t.pages.cvEyebrow} title={t.pages.cvTitle} />
      <About />
      <Experiencia />
      <Formacion />
      <Skills />
      <Hobbies />
      <Contacto />
    </>
  )
}
