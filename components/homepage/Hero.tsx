'use client'
import { Badge } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { CLASS_URL } from '../../utils/urls'

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-800 via-cyan-900 to-purple-900">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mx-auto max-w-7xl py-20">
        <div>
          <Badge size="xl" color="orange" className="bg-teal-500 text-white">
            THE FUTURE IS ...
          </Badge>
          <br />
          <h1 className="text-5xl md:text-7xl font-black mb-7 mt-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              A.I Powered
            </span>{' '}
            High School{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
              Extra Classes
            </span>
            .
          </h1>
          <p className="mb-14 font-light text-lg text-white">
            Study, do your homeworks and prepare for exams with Geleza as your
            study mate and companion.
          </p>
          <div>
            <a
              href={CLASS_URL}
              target="_blank"
              className="btn border-2 bg-white px-24 border-white  text-dark text-lg font-bold"
            >
              Start For Free
            </a>
          </div>
          <Badge size="xs" className="capitalize py-2 mt-7 font-bold text-sm">
            <p className="py-2">No Credit Card Required</p>
          </Badge>
        </div>
        <div>
          <img src="/cover.png" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Hero
