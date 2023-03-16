import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import smartTools from '../../../data/smartTools'
import { CLASS_URL } from '../../../utils/urls'

export const metadata = {
  title: 'Geleza - Smart Tools',
  description:
    "A.I powered innovative and cutting-edge tools designed to enhance students' academic performance.",
}

const SmartToolsPage = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-gray-200  md:text-6xl text-4xl font-black">
          A.I Powered{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Smart Tools
          </span>{' '}
          For Students.
        </h1>
        <p className="text-center mt-3 text-lg">
          Innovative and cutting-edge tools designed to enhance students'
          academic performance.
        </p>
        <a
          href={'https://classroom.geleza.app'}
          className="bg-white text-black font-bold mt-6 mb-10 px-20 py-4 rounded-full"
        >
          Go To Class
        </a>
      </div>

      <div className="!text-gray-800 px-5">
        <div className="relative py-20">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {smartTools?.map((item: any, index) => {
                return (
                  <div
                    key={index}
                    className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 "
                  >
                    <img
                      className="mx-auto w-24 h-24 object-contain"
                      src={`/svg/${item.image}`}
                      alt="illustration"
                      loading="lazy"
                    />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                    <a
                      href={CLASS_URL}
                      className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                    >
                      <BiArrowToRight />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartToolsPage
