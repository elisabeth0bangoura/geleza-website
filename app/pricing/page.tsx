import React from 'react'
import { CallToAction } from '../../components/public/CallToAction'
import FreePlan from './FreePlan'
import PaidPlan from './PaidPlan'

export const metadata = {
  title: 'Geleza - Pricing Plans',
  description:
    "Affordable pricing to achieve academic success! Enroll now and discover why Geleza is the best investment you'll ever make in yourself.",
}

const PricingPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-20 max-w-4xl px-5 w-full">
        <div className="mb-8 flex items-center justify-center">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <h1 className="text-3xl md:text-4xl text-white font-black text-center">
          Get Started <br /> With A{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            3 Days Free{' '}
          </span>
          Trial Today
          <br />{' '}
        </h1>
        <h2 className="text-center text-lg text-white mt-3">
          Affordable Pricing to Achieve Academic Success!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <FreePlan />
          <PaidPlan />
        </div>
      </div>
    </div>
  )
}

export default PricingPage
