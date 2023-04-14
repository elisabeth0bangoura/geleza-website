'use client'
import { Badge } from '@mantine/core'
import React from 'react'
import { CLASS_URL } from '../../utils/urls'

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-800 via-cyan-900 to-purple-900">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mx-auto max-w-7xl py-20">
        <div>
          <Badge size="xl" color="orange" className="bg-teal-500 text-white">
            High School & College Students
          </Badge>
          <br />
          <h1
            className="text-5xl md:text-6xl font-black mb-7 mt-6 text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            #1 🎉
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              A.I Powered
            </span>{' '}
            Students Tools{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
              & Content Writer
            </span>
            .
          </h1>
          <p className="mb-14 font-light text-lg text-white">
            Write essays & homeworks, take notes, join study groups, and prepare for exams with Geleza as your study mate. Built for high school and college students.
          </p>
          <div>
            <a
              href={CLASS_URL}
              target="_blank"
              className="btn border-2 rounded-full bg-white px-24 border-white  text-dark text-lg font-bold"
            >
             Start For Free
            </a>
          </div>
         
        </div>
        <div>
          <img src="/cover.png" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Hero
