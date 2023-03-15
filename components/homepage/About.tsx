'use client'
import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="bg-[#EEF0F4]">
      <div className="w-full mx-auto max-w-7xl py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-2">
            Here's Why <br /> Geleza + A.I ...
          </h1>
          <Badge
            size="lg"
            className="mt-2 mb-5 font-bold capitalize bg-gradient-to-tl from-purple-600 to-teal-700 text-white"
          >
            Equals a brighter future.
          </Badge>

          <p className="text-gray-800">
            With the release of ChatGPT and other A.I Powered Solutions, it was
            about time an A.I powered education platform emerges. <br /> <br />{' '}
            Geleza makes use of multiple A.I models to learn student's study
            patterns, assist them with homework, write letters & essay as well
            as generate test to prepare them for exams.
          </p>
          <br />
          <br />
          <Link href="/features/smart-tools" className="btn bg-[#02B670]">
            More Features
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
