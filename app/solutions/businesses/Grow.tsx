"use client";

import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const Grow = () => {
  return (
    <div className="py-10 bg-white">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src="/images/marketing.webp"
              alt="image"
              loading="lazy"
              className="pt-5 rounded-2xl pr-5 bg-gradient-to-br from-blue-900  to-purple-900"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h1 className="text-xl font-medium">
              Our hard work, for your hard work.
            </h1>
            <h2 className="text-4xl md:text-5xl mt-2 font-black text-gray-900">
              Simplify your business operations
            </h2>
            <p className="my-8 text-gray-600 ">
              Our suite of AI tools can help businesses in a number of ways.
              From automating repetitive tasks to improving efficiency and
              productivity, our tools are designed to help businesses streamline
              their operations and save time and resources.
            </p>
            <div className="divide-y space-y-4 divide-gray-10 ">
              <div className="mt-8 flex gap-4 md:items-center">
                <BiCheckCircle className="text-primary text-4xl bg-indigo-200 p-2 rounded-full" />

                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 ">
                    Ready to grow?
                  </h4>
                  <p className="text-gray-500 ">
                    Try Geleza now and get your business moving towards the path
                    of success.
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

export default Grow;
