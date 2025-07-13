import { Show } from 'solid-js'
import { useAppState } from '~/AppContext'

export const KunFooter = () => {
  const context = useAppState()

  return (
    <div class="m-auto max-w-5xl flex flex-col justify-center content-center">
      <div class="m-auto mb-8 mt-16 md:mt-32 text-center">
        <Show when={context.locale === 'en-us'}>
          <p>
            Powered by{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href={`https://github.com/T1hu/Yu-ACG-nav/${
                context.locale === 'en-us' ? '' : 'zh-cn'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Star Dew on the Other Shore & KUN Visual Novel Navigation Page
            </a>{' '}
          </p>
        </Show>

        <Show when={context.locale === 'zh-cn'}>
          <p>
            由{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href={`https://github.com/T1hu/Yu-ACG-nav/${
                context.locale === 'en-us' ? '' : 'zh-cn'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              彼岸星露-羽ACG & 鲲 Galgame
            </a>{' '}
            提供支持
          </p>
        </Show>
      </div>
    </div>
  )
}
