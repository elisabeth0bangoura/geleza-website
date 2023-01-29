import { Badge } from '@mantine/core'
import React from 'react'
import { CLASS_URL } from '../../utils/urls'

const Marketing = () => {
  return (
    <div className="bg-gray-800 w-full">
      <div className="w-full max-w-7xl mx-auto py-20 flex flex-col justify-center items-center px-5">
        <Badge color="orange" size="xl">
          Trusted by +700 Students & Parents
        </Badge>
        <h1 className="mt-5 text-3xl md:text-5xl text-center font-black text-gray-50">
          <span className="text-red-500">Stop paying</span> for each subject.{' '}
          <br /> You get a lot more only{' '}
          <span className="text-primary ">R350 a month.</span>
        </h1>

        <p className="my-5 text-center text-white font-light text-xl">
          We believe learning should not be expensive, as the future of our
          nation and coming generations depends on it. <br /> That's why Geleza
          only charge a fixed fee for all major subjects. Only pay once, learn
          as much as you can.
        </p>

        <a
          className="btn bg-white text-black font-normal mt-5 text-xl"
          href={CLASS_URL}
        >
          Start Learning Now
        </a>
      </div>
    </div>
  )
}

export default Marketing
