'use client'

import 'react-toastify/dist/ReactToastify.css'
import { CacheProvider } from '@emotion/react'
import { useEmotionCache, MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'

export default function RootWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  //
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return null
  }

  if (typeof window === 'undefined') {
    return <div></div>
  }

  return (
    // <CacheProvider value={cache}>
    <MantineProvider
      // withGlobalStyles
      // withNormalizeCSS
      // withCSSVariables
      theme={{
        colorScheme: 'light',
        fontSizes: { sm: 14 },
      }}
    >
      <ToastContainer position="bottom-center" theme="colored" />
      {children}
    </MantineProvider>
    // </CacheProvider>
  )
}
