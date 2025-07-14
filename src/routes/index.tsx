import { useAppState } from '~/AppContext'
import { NavigationCards } from '~/components/NavigationCards'
import { KunHeader } from '~/components/KunHeader'
import { KunFooter } from '~/components/KunFooter'
import { KunAbout } from '~/components/KunAbout'
import { CardContainer } from '~/components/CardContainer'
import type { KunCard } from '~/types/card'

const siteData: KunCard[] = [
  {
    title: 'forum',
    details: 'forum',
    link: 'https://seve.yugal.cc',
    githubLink: 'https://seve.yugal.cc'
  },
  {
    title: 'backup',
    details: 'backup',
    link: 'https://xy.yugal.cc',
    githubLink: 'https://xy.yugal.cc',
    important: true
  }
]

const subSiteData: KunCard[] = [
  {
    title: 'sticker',
    details: 'sticker',
    link: 'https://github.com/T1hu/Yu-ACG-nav',
    githubLink: 'https://github.com/T1hu/Yu-ACG-nav'
  },
]
export default function Home() {
  const context = useAppState()
  const { t } = context

  return (
    <main class="mx-auto max-w-5x p-4">
      <h1 class="max-6-xs text-center text-4xl font-medium text-kun-blue5-light dark:text-kun-blue5-dark my-16">
        {t('kun.title')}
      </h1>

      <NavigationCards
        cards={siteData}
        title={<KunHeader size={2} title={t('kun.main')} />}
      />

      <NavigationCards
        cards={subSiteData}
        title={<KunHeader size={2} title={t('kun.sub')} class="mt-8" />}
      />

      <CardContainer
        content={
          <>
            <KunHeader size={2} title={t('kun.about')} class="mt-8" />
            <KunAbout />
          </>
        }
      />

      <KunFooter />
    </main>
  )
}
