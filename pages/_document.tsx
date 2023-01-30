import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <Script
            type="text/javascript"
            id="zsiqchat"
            async
            onLoad={() => {
              var $zoho: any = $zoho || {}
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode:
                  '33f5795d4c1a756f96a2df22d7b0597a9e8cd7705c735bf49f90107f9804525b',
                values: {},
                ready: function () {},
              }
              var d = document
              let s
              s = d.createElement('script')
              s.type = 'text/javascript'
              s.id = 'zsiqscript'
              s.defer = true
              s.src = 'https://salesiq.zoho.com/widget'
              let t: any
              t = d.getElementsByTagName('script')[0]
              t.parentNode.insertBefore(s, t)
            }}
          ></Script>
        </body>
      </Html>
    )
  }
}
