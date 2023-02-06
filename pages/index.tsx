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
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>
      <Hero />

      <div className="w-full mx-auto max-w-4xl py-16 flex items-center justify-center flex-col px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-black text-white mb-5">
          Get <span className="text-primary">Free Account</span> And Earn{' '}
          <span className="text-primary">$55</span> Monthly
        </h1>
        <Badge size="xl">Get paid $55 for 3 month</Badge>
        <p className="text-center mt-4 text-white font-light text-lg">
          Are you good with people? Recruit 20 Students and get a free account
          until December. You will also get paid $55 for 3 months, paid to your
          PayPal account. Only students are allowed to enter this promo.
        </p>
        <br />
        <Link className="btn px-20" href="/earn">
          Learn More
        </Link>
      </div>
      <About />
      <hr />
      <Marketing />
      <Subjects />
      <CallToAction />
    </>
  )
}

export default Homepage
