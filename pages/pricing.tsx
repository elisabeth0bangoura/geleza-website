import Head from 'next/head'
import React from 'react'
import CallToAction from '../components/public/CallToAction'
import { CLASS_URL } from '../utils/urls'

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Geleza - High School Extra Lessons Made Easy.</title>
        <meta
          name="description"
          content="Join now for only R350 a month and get access to all subjects, study groups, live sessions and a lot more"
        />
        <meta
          name="og:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Join now for only R350 a month and get access to all subjects, study groups, live sessions and a lot more"
        />
        <meta name="og:url" content="https://geleza.app" />
        <meta name="og:image" content="https://www.geleza.app/cover.png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:alt" content="Geleza" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Geleza" />
        <meta name="twitter:creator" content="@Geleza" />

        <meta
          name="twitter:title"
          content="Geleza - High School Extra Lessons Made Easy."
        />
        <meta
          name="twitter:description"
          content="Join now for only R350 a month and get access to all subjects, study groups, live sessions and a lot more"
        />
        <meta name="twitter:image" content="https://www.geleza.app/cover.png" />
        <meta name="twitter:image:alt" content="Geleza" />
      </Head>
      <div className="w-full max-w-4xl mx-auto px-5">
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

        <div className="mb-20 grid grid-cols-1 max-w-md mx-auto gap-10">
          <div className="p-10 bg-white border shadow-gray-400 shadow-lg rounded-lg">
            <div>
              <span className="text-primary font-semibold text-lg block mb-2">
                Student Pro -{' '}
                <span className="bg-primary text-white rounded-full py-1 px-5">
                  All Access Plan
                </span>
              </span>
              <h2 className="font-bold text-dark mb-5 text-[32px]">
                <span> $20</span>
                <span className="text-base text-gray-700 font-medium">
                  / Month
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ A.I Chat
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Live lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Chat with teachers
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ School lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Extra lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Social lessons
              </p>
              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Access to the classroom portal
              </p>

              <p className="text-base text-gray-700 leading-loose mb-1">
                ✅ Access to all documents and study materials.
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
