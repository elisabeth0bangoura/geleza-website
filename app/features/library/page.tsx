import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import LibraryDetails from './LibraryDetails'

export const metadata = {
  title: 'Geleza - The Library',
  description:
    'Read anything you want, anytime you want, anywhere you want. Powered by Geleza AI.',
}

const PrepPal = () => {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-gray-200  md:text-6xl text-4xl font-black">
          Introducing{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Geleza
          </span>{" "}
         Library
        </h1>
        <p className="text-center mt-3 text-lg">
        Read anything you want, anytime you want, anywhere you want. Powered by Geleza AI.
        </p>
        <a
          href={'https://classroom.geleza.app'}
          className="bg-gradient-to-bl text-white font-bold mt-6 mb-10 from-blue-600 to-teal-800 px-20 py-3 rounded-full"
        >
          Get Started
        </a>
      </div>

      <div className="py-16 bg-white">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="/svg/library.svg"
                alt="image"
                loading="lazy"
                className="pt-5 rounded-2xl pr-5 bg-gradient-to-br from-orange-600  to-purple-700"
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
                Rumours are true!
              </h1>
              <h2 className="text-4xl md:text-5xl mt-2 font-black text-gray-900">
                You can read anything you want.
              </h2>
              <p className="my-8 text-gray-600 ">
                To begin, choose what you want to read, choose the topic, and our in-app AI, Zeda, will write something unique for you to read. The library always provide unique and different content each and every time so you never have to read the same thing twice, even under the same topic.
              </p>
              <div className="divide-y space-y-4 divide-gray-10 ">
                <div className="mt-8 flex gap-4 md:items-center">
                  <BiCheckCircle className="text-primary text-4xl bg-indigo-200 p-2 rounded-full" />
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      Personalized reading.
                    </h4>
                    <p className="text-gray-500 ">
                     Content under the library is personalized for the reader. Your name, country and other information may be included in the content, to help you connect and relate more to what you are reading.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LibraryDetails />
    </div>
  )
}

export default PrepPal
