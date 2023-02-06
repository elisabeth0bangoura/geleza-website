import { Badge } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import About from '../components/homepage/About'
import Apps from '../components/homepage/Apps'
import Hero from '../components/homepage/Hero'
import Marketing from '../components/homepage/Marketing'
import Subjects from '../components/homepage/Subjects'
import CallToAction from '../components/public/CallToAction'

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Geleza - High School Extra Lessons Made Easy.</title>
        <meta
          name="description"
          content="Geleza is a global online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
        />
        <meta
          name="og:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Geleza is a global online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
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
          content="Geleza is a global online tutoring platforms that connects students with top educators, providing quality high school education as well as extra classes to help development skills."
        />
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>
      <Hero />
      <About />
      <hr />
      <Marketing />
      <Subjects />
      <CallToAction />
    </>
  )
}

export default Homepage
