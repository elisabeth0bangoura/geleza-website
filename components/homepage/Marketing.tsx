'use client'
import { Badge } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const Marketing = () => {
  return (
    <div className="bg-gray-900 w-full">
      <div className="w-full max-w-6xl mx-auto py-20 flex flex-col justify-center items-center px-5">
        <Image
          alt="marketing image"
          height={100}
          width={100}
          src="/svg/book.svg"
        />
        <Badge color="teal" size="xl" className="mt-5">
          Trusted by +140K Students
        </Badge>
        <h1 className="mt-5 text-4xl md:text-6xl text-center font-black text-gray-50">
          Join us today and transform <br className="hidden lg:inline" /> the
          way you learn!
        </h1>

        <p className="my-8 text-center text-white font-light text-lg">
          We believe that learning should be affordable and simplified, as the
          future of our world and coming generations depends on it.
        </p>

        <a
          className="px-20 py-4 text-white bg-gradient-to-br from-blue-500 rounded-full via-blue-700 to-purple-700 font-normal mt-5 text-xl"
          href={"https://classroom.geleza.app"}
        >
          Start Learning Now
        </a>
      </div>
    </div>
  )
}

export default Marketing
