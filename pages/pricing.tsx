import React from 'react'
import CallToAction from '../components/public/CallToAction'
import { CLASS_URL } from '../utils/urls'

const Pricing = () => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <div className="py-20 flex flex-col justify-center items-center max-w-xl mx-auto">
          <span className="font-semibold text-lg text-center text-primary mb-2">
            Pricing Table
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-center  mb-4">
            Our Pricing Plan
          </h2>
          <p className="text-base text-center text-body-color">
            Our pricing is straightforward and simple to understand. Choose what
            works best for you and get started now.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-10 bg-white border shadow-gray-400 shadow-lg rounded-lg">
            <div>
              <span className="text-primary font-semibold text-lg block mb-2">
                Student Free
              </span>
              <h2 className="font-bold text-dark mb-5 text-[32px]">
                FREE{' '}
                <span className="text-base text-gray-700 font-medium">
                  / Month
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ☑️ Access to the classroom portal
              </p>

              <p className="text-base text-gray-700 leading-loose mb-1">
                ☑️ Access to all documents and previous exam papers
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ❌ School lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ❌ Extra lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ❌ Social lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ❌ Students chatroom (Coming soon)
              </p>
            </div>
            <div className="mt-5">
              <a href={CLASS_URL} target="_blank">
                <button className="py-5 w-full bg-primary text-white rounded-md shadow-xl hover:scale-105 transition-all">
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className="p-10 bg-white border shadow-gray-400 shadow-lg rounded-lg">
            <div>
              <span className="text-primary font-semibold text-lg block mb-2">
                Student Pro -{' '}
                <span className="bg-primary text-white rounded-full py-1 px-5">
                  22% OFF
                </span>
              </span>
              <h2 className="font-bold text-dark mb-5 text-[32px]">
                <span className="line-through text-gray-400">R450</span>
                <span> R350</span>
                <span className="text-base text-gray-700 font-medium">
                  / Month
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Access to the classroom portal
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Social & Lifestyle lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Access to all documents and previous exam papers
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ All extra lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ School subjects lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Students chatroom (Coming soon)
              </p>
            </div>
            <div className="mt-5">
              <a href={CLASS_URL} target="_blank">
                <button className="py-5 w-full bg-black text-white rounded-md shadow-xl hover:scale-105 transition-all">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  )
}

export default Pricing
