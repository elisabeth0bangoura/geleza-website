import React from 'react'
import CallToAction from '../../components/public/CallToAction'
import Prices from './Prices'

const Page = () => {
  return (
    <div>
      <div className="w-full mx-auto max-w-3xl px-5">
        <Prices />
      </div>
      <CallToAction />
    </div>
  )
}

export default Page
