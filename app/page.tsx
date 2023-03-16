import About from '../components/homepage/About'
import Connect from '../components/homepage/Connect'
import Hero from '../components/homepage/Hero'
import Marketing from '../components/homepage/Marketing'
import WhatYouGet from '../components/homepage/WhatYouGet'

export const metadata = {
  title: 'Geleza - Home',
  description:
    'Revolutionizing High School Education with AI Technology: Experience it Now!',
}

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Marketing />
      <WhatYouGet />
      <Connect />
    </div>
  )
}

export default Home
