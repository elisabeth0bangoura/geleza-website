'use client'

import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <div className="w-full bg-gray-900 mx-auto">
      <div className=" mx-auto w-full text-white max-w-2xl py-20 px-5 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl mb-2">Got Any Questions?</h1>
        <p className="text-center mt-2 mb-10 text-md font-light">
          Do not hesitate to contact us if you have any questions, or would like
          to know more about us. Our team is always ready to hear from you.
        </p>
        <Button
          size="lg"
          color={'green'}
          component={Link}
          href="/help"
          className="bg-primary text-white px-10"
        >
          Get in touch
        </Button>
      </div>
    </div>
  )
}

export default CallToAction
