import Link from 'next/link'
import React from 'react'

const Connect = () => {
  return (
    <div className="py-20 md:py-12 xl:container m-auto px-6 md:px-12">
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
            One platform, everything you{' '}
            <span className="text-primary dark:text-primaryLight">need.</span>
          </h1>
          <p className="mt-8 text-gray-600 dark:text-gray-300">
            With Geleza, you get everything you need to make your learning as
            easy as possible. Our professional tutors are always available and
            ready to help you whenever you get stuck with any lesson.
          </p>
          <div className="my-16">
            <Link className="btn" href="/pricing">
              Our Pricing
            </Link>
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
          <img
            src="/images/connect.jpg"
            alt="project illustration"
            height=""
            width=""
          />
        </div>
      </div>
    </div>
  )
}

export default Connect
