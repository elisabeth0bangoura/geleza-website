import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'

export const metadata = {
  title: 'Geleza - Zeda Chat',
  description:
    'Meet the ChatGPT Alternative, But With Superpowers. Zeda Chat is an advanced conversational AI chatbot that has been designed with the inclusion of built-in personalities.',
}

const ZedaChatPage = () => {
  return (
    <div className="!text-gray-800 px-5 pt-20">
      <h1 className="text-center text-white font-bold mb-2 text-2xl">
        Zeda Chat
      </h1>
      <div className="mb-8 flex items-center justify-center">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-4xl">
        <h1 className="text-center text-gray-200 md:text-5xl  text-3xl font-black">
          Meet the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            ChatGPT
          </span>{' '}
          Alternative, <br /> But With Superpowers.
        </h1>
        <p className="text-center text-gray-400 mt-5 text-xl">
          Zeda Chat is an advanced conversational AI chatbot that has been
          designed with the inclusion of built-in personalities.
        </p>
        <a
          className="px-20 py-4 text-white bg-gradient-to-br from-blue-500 rounded-full via-blue-700 to-purple-700 font-normal mt-8 text-xl"
          href={"https://classroom.geleza.app"}
        >
          Start Chatting Now
        </a>
        e
      </div>

      <div className="relative py-20">
        <div className="container relative m-auto px-3 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/svg/hamster.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Personalities
              </h3>
              <p>
                Zeda Chat includes personalities such as teacher, friend, poet,
                therapist, relationship coach, etc.
              </p>
              <a
                href={"https://classroom.geleza.app"}
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
                Human-Like Responses
              </h3>
              <p>
                Zeda Chat can act like a real person and can keep a conversation
                going by responding to follow-up questions.
              </p>

              <a
                href={"https://classroom.geleza.app"}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-cover rounded-full"
                src="/svg/file.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Copy Responses.
              </h3>
              <p>
                You can copy responses with ease, share with classmates or paste them under notes, to read later.
              </p>
              <a
                href={"https://classroom.geleza.app"}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-white mb-10 rounded-3xl">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="/images/chatbot.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
                More about...
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                The Best A.I ChatBot!
              </h2>
              <p className="my-8 text-gray-600 ">
                With its advanced natural language processing capabilities, Zeda
                Chat can engage with students in a personalized way, answering
                their queries and guiding them through the learning process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZedaChatPage
