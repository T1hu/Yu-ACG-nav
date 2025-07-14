// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href="/favicon.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href="/favicon.webp"
          />
          <meta name="msapplication-TileImage" content="/ms-icon-192x192.png" />
          <meta name="msapplication-TileColor" content="#0969da" />
          <meta name="theme-color" content="#0969da" />
          <meta name="msapplication-TileColor" content="#0969da" />
          <meta name="theme-color" content="#0969da" />
          <meta name="og:title" content="The Star of the Other Shore | 彼岸星露-羽ACG" />
          <meta name="og:url" content="https://seve.yugal.cc" />
          <meta name="og:type" content="article" />
          <meta name="og:image:width" content="1920" />
          <meta name="og:image:height" content="1080" />
          <meta
            name="og:image:url"
            content="https://img.yugal.cc/i/2025/07/15/2kjkfo.webp"
          />
          <meta
            name="og:image:secure_url"
            content="https://img.yugal.cc/i/2025/07/15/2kjkfo.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://img.yugal.cc/i/2025/07/15/2kjkfo.webp"
          />
          <meta name="twitter:site" content="@kungalgame" />
          <meta
            name="og:description"
            content="The Star of the Other Shore | 彼岸星露-羽ACG | 专注分享免费Galgame，涵盖PC、安卓、模拟器，希望在这里能找到你喜欢的游戏~"
          />
          <meta
            name="description"
            content="The Star of the Other Shore | 彼岸星露-羽ACG | 专注分享免费Galgame，涵盖PC、安卓、模拟器，希望在这里能找到你喜欢的游戏~"
          />
          <link rel="icon" type="image/webp" href="/favicon.webp" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
