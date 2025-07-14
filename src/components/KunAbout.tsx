import { Show } from 'solid-js'
import { A } from '@solidjs/router'
import { useAppState } from '~/AppContext'

export const KunAbout = () => {
  const context = useAppState()
  const { t } = context

  return (
    <div class="space-y-1">
      {/* 英文说明 */}
      <Show when={context.locale === 'en-us'}>
        <p>
          This site is a modified version based on the KUN Visual Novel Navigation Page, and its source code is
          available on{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://github.com/T1hu/Yu-ACG-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . We appreciate the original open-source project.
        </p>
        <p>
          We recommend you press <code>Ctrl + D</code> to bookmark this page to avoid losing contact with us.
        </p>
        <p>
          You can join our{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://t.me/xiaoyuO721"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram group
          </a>
          .
        </p>
        <p>
          <A
            href="/loli"
            class="underline underline-offset-2 decoration-kun-red dark:decoration-kun-blue5-dark"
          >
            {t('kun.loli')}
          </A>
        <br />
        </p>
        <p>Thank you to every organization and friend contributing to the open-source community!</p>
      </Show>

      {/* 简体中文说明 */}
      <Show when={context.locale === 'zh-cn'}>
        <p>
          本站基于 KUN Visual Novel Navigation Page 二次编写生产，源码在{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://github.com/T1hu/Yu-ACG-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ，在这里十分感谢这份开源项目。
        </p>
        <p>我们建议您 <code>Ctrl + D</code> 收藏该网页以防止与我们失去联系。</p>
        <p>
          您可以加入我们的{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://t.me/xiaoyuO721"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram 交流群
          </a>
          。
        </p>
        <p>
          <A
            href="/loli"
            class="underline underline-offset-2 decoration-kun-red dark:decoration-kun-blue5-dark"
          >
            {t('kun.loli')}
          </A>
        </p>
        <br /> 
        <p>感谢为开源事业做出贡献的每个组织和朋友！</p>
      </Show>
    </div>
  )
}
