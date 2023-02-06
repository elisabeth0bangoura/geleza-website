import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="bg-[#EEF0F4]">
      <div className="w-full mx-auto max-w-7xl py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-2">
            Why Geleza?
          </h1>
          <Badge className="mt-2 mb-5 font-bold  bg-orange-500 text-white">
            Because the future matters.
          </Badge>

          <p className="text-gray-800">
            Our aim is not to replace the education system but improve what is
            already being offered. <br /> <br /> Instead of paying a fee for
            each subject, Geleza combines all major subjects in one platform,
            and add extra lessons as well, for one fixed fee.
          </p>
          <br />
          <br />
          <Link href="/how-it-works" className="btn">
            How it works
          </Link>
        </div>
        <div>
          <img src="/images/marketing.webp" sizes="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export default About
