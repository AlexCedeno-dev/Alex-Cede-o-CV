import ScrollProgress from '../components/home/ScrollProgress'
import LedgerGlow from '../components/home/LedgerGlow'
import ChapterIndex from '../components/home/ChapterIndex'
import ChapterIntro from '../components/home/ChapterIntro'
import ChapterSeals from '../components/home/ChapterSeals'
import ChapterHandmade from '../components/home/ChapterHandmade'
import FeaturedProject from '../components/home/FeaturedProject'
import ChapterContact from '../components/home/ChapterContact'
import { useContent } from '../data/useContent'

// Home como narrativa de 4 capítulos (§ I a § IV).
export default function Home() {
  const { homeChapters } = useContent()
  const [intro, seals, handmade, contact] = homeChapters.chapters

  return (
    <>
      <ScrollProgress />
      <LedgerGlow />
      <ChapterIndex chapters={homeChapters.chapters} label={homeChapters.indexLabel} />
      <ChapterIntro chapter={intro} />
      <ChapterSeals chapter={seals} />
      <ChapterHandmade chapter={handmade} />
      <FeaturedProject />
      <ChapterContact chapter={contact} />
    </>
  )
}
