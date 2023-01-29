import '../styles/global.css'
import { MantineProvider } from '@mantine/core'
import NextNProgress from 'nextjs-progressbar'
import { useState, useEffect } from 'react'
import { ModalsProvider } from '@mantine/modals'
import NProgress from 'nprogress'
import { AiOutlineArrowUp } from 'react-icons/ai'
import PublicLayout from '../components/main/PublicLayout'

type Props = {
  Component: any
  pageProps: any
}
function MyApp({ Component, pageProps }: Props) {
  //
  const [showing, setShowing] = useState(false)

  NProgress.configure({ showSpinner: true })

  useEffect(() => {
    setShowing(true)
  }, [])

  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  if (!showing) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  }

  return (
    <>
      <NextNProgress
        options={{
          showSpinner: false,
        }}
        color="#1DBF73"
        height={5}
      />

      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
      >
        <ModalsProvider>
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
          {showTopBtn && (
            <div className="absolute">
              <AiOutlineArrowUp
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }}
                size={40}
                className="border-2 bg-primary text-dark cursor-pointer p-1.5 fixed rounded-full z-50 bottom-20 lg:bottom-10 right-3 lg:right-10"
              />
            </div>
          )}
        </ModalsProvider>
      </MantineProvider>
    </>
  )
}

export default MyApp
