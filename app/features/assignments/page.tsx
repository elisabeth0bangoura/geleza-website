import React from "react";
import { BiArrowToRight } from "react-icons/bi";

export const metadata = {
  title: "Geleza - Assignments Writer",
  description:
    "Stuck on an assignment question? Simply head to Geleza and punch in your assignment questions, provide a more information where necessary, and get all the answers and more information to help you understand the solution.",
};

const NotesPage = () => {
  return (
    <div className="!text-gray-800 px-5 pt-20">
      <h1 className="text-center  font-bold mb-2 text-2xl">Introducing...</h1>
      <div className="mb-3.5 flex items-center justify-center">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-4xl">
        <h1 className="text-center text-gray-700 md:text-6xl text-3xl font-black">
          The Best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Assignment
          </span>{" "}
          Writer.
        </h1>
      </div>

      <div className="mt-10 py-10 bg-[#C8E6FF] mb-10 rounded-3xl">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img src="/svg/learning.svg" alt="image" loading="lazy" />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
                Now you can...
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900">
                do assignments like a pro!
              </h2>
              <p className="my-8 text-gray-600 ">
                Stuck on an assignment question? Simply head to Geleza and punch
                in your assignment questions, provide a more information where
                necessary, and get all the answers and more information to help
                you understand the solution.
              </p>
              <a
                href={"https://classroom.geleza.app"}
                className="capitalize font-bold px-20 py-4 rounded-full bg-gradient-to-tr from-pink-700 to-blue-500 text-white"
              >
                Try it now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <h1 className="mb-10 font-bold capitalize text-4xl text-center">
          How Assignment Writer Can Help You.
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
                Any Question, Any Course/Subject.
              </h3>
              <p>
                Assignment writer can answer any academic related question. Our
                AI is trained to understand and respond to all question,
                regardless of the course or subjects you are doing.
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
                Learn From Assignment Answers.
              </h3>
              <p>
                Let the AI give you a complete answer to your question.
                Additionally, you will be provided with a more descriptive
                summary of the answer to help you learn more.
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
                src="/images/writer.jpg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Any Type Of Question.
              </h3>
              <p>
                You can ask any type of question, from simple direct questions,
                true or false questions, as well as multiple choice questions.
                The AI will be able to understand the structure of your question
                and answer accordingly.
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
    </div>
  );
};

export default NotesPage;
