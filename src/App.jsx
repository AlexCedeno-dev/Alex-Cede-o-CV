import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import AccessibilityPanel from './components/AccessibilityPanel'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Proyectos from './pages/Proyectos'
import SkillsDetail from './pages/SkillsDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/skills" element={<SkillsDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AccessibilityPanel />
    </>
  )
}
