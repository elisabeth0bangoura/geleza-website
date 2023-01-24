import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="w-full mx-auto max-w-7xl py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-2">
          Why Zeta?
        </h1>
        <Badge className="mt-2 mb-5 font-bold">
          Because the future matters.
        </Badge>

        <p>
          Most students opt in for extra classes to improve on what they are
          learning from schools. But those extra lessons can be very expensive
          sometimes. <br /> <br /> Instead of paying a fee for each subject,
          Zita combines all subjects in one platform, and add extra lessons as
          well, for one fixed fee.
        </p>
        <br />
        <br />
        <Link href="/how-it-works" className="bg-primary font-bold px-10 py-4">
          How it works
        </Link>
      </div>
    </div>
  )
}

export default About
