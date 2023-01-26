import React from 'react'
import { CLASS_URL } from '../../utils/urls'

const Apps = () => {
  return (
    <div className="w-full mx-auto max-w-2xl py-14 flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl text-gray-800">Mobile Apps</h1>
      <h1 className="font-medium text-4xl text-gray-800">Coming Soon</h1>
      <hr className="border-primary border my-4 w-[50%]" />
      <p className="text-center mb-5">
        Stay tuned! Mobile apps for both Android and iOS are on the way. For
        now, you can access classes and lessons using the web application.
      </p>
      <a href={CLASS_URL} className="btn">
        Take me to class
      </a>
    </div>
  )
}

export default Apps
