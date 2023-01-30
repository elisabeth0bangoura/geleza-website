import { Badge } from '@mantine/core'
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
    <div>
      <Hero />

      <div className="w-full mx-auto max-w-4xl py-16 flex items-center justify-center flex-col px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-black text-white mb-5">
          Get <span className="text-primary">Free Account</span> And Earn{' '}
          <span className="text-primary">R1000</span> Monthly
        </h1>
        <Badge size="xl">Get paid R1000 for 3 month</Badge>
        <p className="text-center mt-4 text-white font-light text-lg">
          Are you good with people? Recruit 20 Students and get a free account
          until December, and get paid R1000 for 3 months. Only students are
          allowed to enter this promo.
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
    </div>
  )
}

export default Homepage
