"use client";

import React from "react";
import { BiCheckCircle, BiPlay } from "react-icons/bi";

const Play = () => {
  return (
    <div className="py-10 bg-white">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src="/images/stream.png"
              alt="image"
              loading="lazy"
              className="pt-5 rounded-2xl pr-5 bg-gradient-to-br from-blue-900  to-purple-900"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h1 className="text-xl font-medium">
              Create better with Geleza tools.
            </h1>
            <h2 className="text-4xl md:text-5xl mt-2 font-black text-gray-900">
              Click. Create. <span className="text-red-500">Play</span>
            </h2>
            <p className="my-8 text-gray-600 ">
              Our suite of AI tools includes a video and audio editing tool,
              image editing tool, content optimization tool, and a transcription
              tool. With these tools, you can easily create engaging and
              high-quality content for your audience.
            </p>
            <div className="divide-y space-y-4 divide-gray-10 ">
              <div className="mt-8 flex gap-4 md:items-center">
                <BiPlay className="text-red-500 text-4xl bg-indigo-200 p-2 rounded-full" />
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 ">
                    Ready?
                  </h4>
                  <p className="text-gray-500 ">
                    Start creating today and engage your audience with better
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
