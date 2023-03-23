import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { CLASS_URL } from '../../../utils/urls'

const Subjects = () => {
  return (
    <div className="!text-gray-800 px-5">
      <h1 className="text-center text-gray-200 pt-20 md:text-5xl  text-3xl font-black">
        Join the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
          Next Generation
        </span>{' '}
        of <br /> Learners with A.I.-Backed Education
      </h1>
      <p className="text-center text-gray-400 mt-5 text-xl">
        Geleza is able to teach you anything you ask, and help you advance your
        learning.
      </p>
      <div className="relative py-20">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="hover:scale-95 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-contain"
                src="/svg/learning.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Self-Paced Learning
              </h3>
              <p>
                Choose a high school subject or create a college course, choose
                the topics you want to learn and let AI do the rest.
              </p>
              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-95 border-b-8 border-primary scale-105 transition-all duration-500 group space-y-6  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-contain"
                src="/svg/chat.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Tutor's Assistance
              </h3>
              <p>
                Are you stuck on a lesson? Do not worry. Just chat with any of
                our available tutors and they will help you.
              </p>

              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-95 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-contain"
                src="/svg/pencil.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Test Your Skills
              </h3>
              <p>
                When you are confident that you have learned enough, you can use
                PrepPal AI to test and grade your skills.
              </p>
              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subjects
