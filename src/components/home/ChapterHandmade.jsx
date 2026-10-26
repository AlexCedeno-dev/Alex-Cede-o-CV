import ChapterHead from './ChapterHead'
import Reveal from '../Reveal'
import { useContent } from '../../data/useContent'

// § III Hecho a mano: cuatro afirmaciones verificables sobre este sitio y
// GreonTrack, en lista numerada.
export default function ChapterHandmade({ chapter }) {
  const { homeChapters } = useContent()
  const { title, subtitle, items } = homeChapters.handmade

  return (
    <section className="chapter chapter-handmade" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <ChapterHead chapter={chapter} title={title} />
        <p className="chapter-sub">{subtitle}</p>
        <ol className="handmade-list">
          {items.map((item, i) => (
            <Reveal as="li" className="handmade-row" delay={i * 0.06} key={item.title}>
              <span className="handmade-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="handmade-title">{item.title}</h3>
              <p className="handmade-text">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
