'use client'
import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { CLASS_URL } from '../../utils/urls'

const Hero = () => {
  return (
    <div className="bg-primary ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mx-auto max-w-7xl py-20">
        <div>
          <Badge size="lg" color="gray">
            GRADE 8 - 12
          </Badge>
          <br />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-7 mt-6 text-gray-800">
            Extra Classes <span className="text-white">Made Easy</span> &
            Affordable
          </h1>
          <p className="mb-14 font-light text-xl">
            Zeta is a South African online tutoring platforms that connects
            students with top educators, providing quality high school education
            as well as extra classes to help development skills.
          </p>
          <a
            href={CLASS_URL}
            target="_blank"
            className="px-14 py-4 bg-dark border-4  border-white mt-10 rounded-full text-white font-bold"
          >
            Go To Class
          </a>
        </div>
        <div>
          <img src="/cover.png" />
        </div>
      </div>
    </div>
  )
}

export default Hero
