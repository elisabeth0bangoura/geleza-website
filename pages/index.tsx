import React from 'react'
import About from '../components/homepage/About'
import Apps from '../components/homepage/Apps'
import Hero from '../components/homepage/Hero'
import CallToAction from '../components/public/CallToAction'

const Homepage = () => {
  return (
    <div>
      <Hero />
      {/* <Apps /> */}
      <About />
      <CallToAction />
    </div>
  )
}

export default Homepage
