import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { CLASS_URL } from '../../../utils/urls'

export const metadata = {
  title: 'Geleza - Notes',
  description:
    'With organizational tools, cross-platform compatibility, and easy note-taking features, students can easily capture their thoughts, ideas, and lecture notes in one central location.',
}

const NotesPage = () => {
  return (
    <div className="!text-gray-800 px-5 pt-20">
      <h1 className="text-center text-white font-bold mb-2 text-2xl">
        Geleza Notes
      </h1>
      <div className="mb-8 flex items-center justify-center">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-4xl">
        <h1 className="text-center text-gray-200 md:text-6xl text-3xl font-black">
          The Best{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Notes App
          </span>{' '}
          For Students
        </h1>
      </div>

      <div className="mt-10 py-10 bg-[#C8E6FF] mb-10 rounded-3xl">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img src="/svg/notes.svg" alt="image" loading="lazy" />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
                Now you can...
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                Take notes like a pro!
              </h2>
              <p className="my-8 text-gray-600 ">
                Our notes app is a powerful and user-friendly tool designed to
                help students organize their studies and take notes more
                efficiently. With organizational tools, cross-platform
                compatibility, and easy note-taking features, students can
                easily capture their thoughts, ideas, and lecture notes in one
                central location.
              </p>
              <a
                href={CLASS_URL}
                className="capitalize font-bold px-20 py-4 rounded-full bg-gradient-to-tr from-pink-700 to-blue-500 text-white"
              >
                Try it now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <h1 className="mb-10 font-bold capitalize text-4xl text-white text-center">
          What you can do with notes
        </h1>
        <div className="container relative m-auto px-3 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/svg/book.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Search & Filter By Course
              </h3>
              <p>
                You can search and filter your notes by the subject or course
                you are doing. You can select which subject or course and module
                you are creating a note for.
              </p>
              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-contain"
                src="/images/bot.png"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Notes Summary
              </h3>
              <p>
                Let the AI give you a summary of your notes, in just a click of
                a button. The summary is 100% accurate to the content of the
                notes and is generated randomly.
              </p>

              <a
                href={CLASS_URL}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-cover rounded-full"
                src="/images/writer.jpg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Add Note From Anywhere
              </h3>
              <p>
                It does not matter where you are chatting to Zeda, learning a
                course or writing an essay, you can create a note from anywhere
                on Geleza, anytime.
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

export default NotesPage
