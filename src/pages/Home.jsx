import ScrollProgress from '../components/home/ScrollProgress'
import LedgerGlow from '../components/home/LedgerGlow'
import ChapterIndex from '../components/home/ChapterIndex'
import ChapterIntro from '../components/home/ChapterIntro'
import ChapterBuild from '../components/home/ChapterBuild'
import ChapterStack from '../components/home/ChapterStack'
import ChapterContact from '../components/home/ChapterContact'
import { useContent } from '../data/useContent'

// Home como narrativa de 4 capítulos (§ I a § IV).
export default function Home() {
  const { homeChapters } = useContent()
  const [intro, build, stack, contact] = homeChapters.chapters

  return (
    <>
      <ScrollProgress />
      <LedgerGlow />
      <ChapterIndex chapters={homeChapters.chapters} label={homeChapters.indexLabel} />
      <ChapterIntro chapter={intro} />
      <ChapterBuild chapter={build} />
      <ChapterStack chapter={stack} />
      <ChapterContact chapter={contact} />
    </>
  )
}
