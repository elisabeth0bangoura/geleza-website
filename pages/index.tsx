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
      {/* <Apps /> */}
      <About />
      <hr />
      <Marketing />
      <Subjects />
      <CallToAction />
    </div>
  )
}

export default Homepage
