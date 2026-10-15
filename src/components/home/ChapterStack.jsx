import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import ChapterHead from './ChapterHead'
import Reveal from '../Reveal'
import { useLanguage } from '../../i18n/LanguageContext'
import { useContent } from '../../data/useContent'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useRowHighlight } from '../../hooks/useRowHighlight'

const LEVEL_KEYS = { 1: 'level1', 2: 'level2', 3: 'level3' }

// § III Con qué: una fila de libro contable por categoría, con los mismos
// datos y niveles que /skills (skillsDetailed), más el enlace a esa página.
export default function ChapterStack({ chapter }) {
  const { t } = useLanguage()
  const { skillsDetailed, homeChapters } = useContent()
  const finePointer = useMediaQuery('(pointer: fine) and (hover: hover)')
  const shouldReduceMotion = useReducedMotion()
  const highlight = finePointer && !shouldReduceMotion
  const { listRef, barRef } = useRowHighlight(highlight)

  return (
    <section className="chapter chapter-stack" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <ChapterHead chapter={chapter} />
        <Reveal className="stack-ledger-wrap">
          <div className="stack-ledger" ref={listRef}>
            {highlight && <span className="stack-highlight" ref={barRef} aria-hidden="true" />}
            {skillsDetailed.map((group) => (
              <div className="stack-row" data-row key={group.title}>
                <h3 className="stack-field">{group.title}</h3>
                <ul className="stack-items">
                  {group.items.map((item) => (
                    <li className={`stack-item level-${item.level}`} key={item.name}>
                      <span className="stack-item-name">{item.name}</span>
                      <span
                        className="skill-level-dots"
                        role="img"
                        aria-label={`${t.skillsPage.levelLabel}: ${t.skillsPage[LEVEL_KEYS[item.level]]}`}
                      >
                        {[1, 2, 3].map((n) => (
                          <span key={n} className={`skill-level-dot${n <= item.level ? ' filled' : ''}`} aria-hidden="true" />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        <Link to="/skills" className="chapter-link">
          {homeChapters.stack.allSkills} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
