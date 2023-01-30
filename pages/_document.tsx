import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <title>Geleza - High School Extra Lessons Made Easy.</title>
          <meta
            name="description"
            content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
          />
          <meta
            name="og:title"
            content="Geleza - High School Extra Lessons Made Easy."
          />
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
          />
          <meta name="og:url" content="https://geleza.app" />
          <meta name="og:image" content="https://www.geleza.app/cover.png" />
          <meta name="og:image:width" content="1200" />
          <meta name="og:image:height" content="630" />
          <meta name="og:image:type" content="image/png" />
          <meta name="og:image:alt" content="Geleza" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Geleza" />
          <meta name="twitter:creator" content="@Geleza" />

          <meta
            name="twitter:title"
            content="Geleza - High School Extra Lessons Made Easy."
          />
          <meta
            name="twitter:description"
            content="Geleza is a South African online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
          />
          <meta
            name="twitter:image"
            content="https://www.geleza.app/cover.png"
          />
          <meta name="twitter:image:alt" content="Geleza" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
