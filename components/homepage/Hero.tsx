'use client'
import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { CLASS_URL } from '../../utils/urls'

const Hero = () => {
  return (
    <div className="bg-primary ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mx-auto max-w-7xl py-20">
        <div>
          <Badge size="xl" color="orange" className="bg-orange-500 text-white">
            GRADE 8 - 12
          </Badge>
          <br />
          <h1 className="text-5xl  lg:text-7xl font-black mb-7 mt-6 text-gray-800">
            Extra Classes <span className="text-white">Made Easy</span> &
            Affordable
          </h1>
          <p className="mb-14 font-light text-xl text-white">
            Geleza is a global online tutoring platforms that connects students
            with top educators, providing quality high school education as well
            as extra classes to help development skills.
          </p>
          <div className="flex items-center gap-3 flex-wrap mt-10">
            <a
              href={CLASS_URL}
              target="_blank"
              className="btn border-2  border-white rounded-full text-white font-bold"
            >
              Go To Class
            </a>
            <Link
              href="/pricing"
              className="btn rounded-full bg-white text-gray-800 border-black border-2"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <img src="/cover.png" />
        </div>
      </div>
    </div>
  )
}

export default Hero
