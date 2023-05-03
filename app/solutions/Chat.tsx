"use client";

import React from "react";

const Chat = () => {
  return (
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
              Meet Zada.
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              The Best A.I ChatBot!
            </h2>
            <p className="my-10 text-gray-600 ">
              With its advanced natural language processing capabilities, Zeda
              Chat can engage with users in a personalized way, answering their
              queries and guiding them through the learning and work process.
            </p>
            <a
              href={"https://platform.geleza.app"}
              className="bg-gradient-to-bl text-white font-bold mb-10 from-blue-600 to-teal-800 px-20 py-4 rounded-full"
            >
              Start For Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
