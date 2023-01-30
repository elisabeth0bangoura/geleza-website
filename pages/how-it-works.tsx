import Head from 'next/head'
import React from 'react'
import About from '../components/about/About'
import Connect from '../components/about/Connect'
import Features from '../components/about/Features'
import Subjects from '../components/homepage/Subjects'
import CallToAction from '../components/public/CallToAction'

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>Geleza - High School Extra Lessons Made Easy.</title>
        <meta
          name="description"
          content="Geleza offers a classroom portal for students find lessons,
                connect with teachers and other students, join live sessions,
                ask questions, and a lot more. Everything you need to make
                learning easy is available."
        />
        <meta
          name="og:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Geleza offers a classroom portal for students find lessons,
                connect with teachers and other students, join live sessions,
                ask questions, and a lot more. Everything you need to make
                learning easy is available."
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
          content="Geleza offers a classroom portal for students find lessons,
                connect with teachers and other students, join live sessions,
                ask questions, and a lot more. Everything you need to make
                learning easy is available."
        />
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>
      <About />
      <Features />
      <Connect />
      <CallToAction />
    </>
  )
}

export default HowItWorks
