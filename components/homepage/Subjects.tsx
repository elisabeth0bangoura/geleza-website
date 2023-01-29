import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { CLASS_URL } from '../../utils/urls'

const Subjects = () => {
  return (
    <div className="!text-gray-800 bg-white px-5">
      <h1 className="text-center text-gray-800 pt-20 md:text-5xl lg:text-6xl text-3xl font-black">
        More for less, Always
      </h1>
      <p className="text-center text-gray-800 mt-5 text-xl">
        Geleza offers all major subjects, health and lifestyle lessons, and
        skills development courses
      </p>
      <div className="relative py-20">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/images/subjects.webp"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                School Subjects
              </h3>
              <p>
                These include all major subjects such as Mathematics, Physical
                Sciences, Geography, History, Commerce and More.
              </p>
              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/images/social.webp"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Social Lessons
              </h3>
              <p>
                Social lessons include health lessons, relationship, mental &
                physical fitness, psychology and more.
              </p>

              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-cover rounded-full"
                src="/images/coding.webp"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Extra Lessons
              </h3>
              <p>
                This includes music lessons, programming, drawing, and any other
                courses that can help develop skills.
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
