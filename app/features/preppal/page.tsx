import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import PrepPalFaq from './PrepPalFaq'

const PrepPal = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-gray-200  md:text-6xl text-4xl font-black">
          Meet{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            PrepPal.
          </span>{' '}
          Your A.I Exam Prep.
        </h1>
        <p className="text-center mt-3 text-lg">
          Revolutionize your exam preparation with PrepPal, your personal A.I
          tutor.
        </p>
        <a
          href={'https://classroom.geleza.app'}
          className="bg-gradient-to-bl text-white font-bold mt-6 mb-10 from-blue-600 to-teal-800 px-20 py-3 rounded-full"
        >
          Go To Class
        </a>
      </div>

      <div className="py-16 bg-white">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="/images/exam.jpg"
                alt="image"
                loading="lazy"
                className="pt-5 rounded-2xl pr-5 bg-gradient-to-br from-orange-600  to-purple-700"
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
                It's time to...
              </h1>
              <h2 className="text-4xl md:text-5xl mt-2 font-black text-gray-900">
                Master your exams with PrepPal.
              </h2>
              <p className="my-8 text-gray-600 ">
                To begin, select the topic, number of questions, and question
                format - true/false, multi-choice, or Q&A. PrepPal will then
                create random exam questions to assess your abilities.
              </p>
              <div className="divide-y space-y-4 divide-gray-10 ">
                <div className="mt-8 flex gap-4 md:items-center">
                  <BiCheckCircle className="text-primary text-4xl bg-indigo-200 p-2 rounded-full" />

                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      Get instant response.
                    </h4>
                    <p className="text-gray-500 ">
                      PrepPal will correct and mark your answers in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrepPalFaq />
    </div>
  )
}

export default PrepPal
