"use client";

import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="relative py-10">
        <h1 className="mb-10 font-bold text-4xl text-center">
          Discover AI Tools For Businesses.
        </h1>
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/svg/productivity.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Productivity Tools
              </h3>
              <p>
                Productivity tools that can help you save time and resources,
                automate repetitive tasks, and streamline their workflows. With
                our suite of AI-powered productivity tools, businesses can do
                just that.
              </p>
              <a
                href={"https://platform.geleza.app"}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 rounded-full object-cover"
                src="/svg/write.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Content Writers
              </h3>
              <p>
                Write contracts, emails, proposals and a lot more with Geleza AI
                tools. Simplify your work flow and get a lot done faster, better
                and smarter.
              </p>
              <a
                href={"https://platform.geleza.app"}
                className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
              >
                <BiArrowToRight />
              </a>
            </div>

            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-cover rounded-full"
                src="/images/grow.png"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">Growth Tools</h3>
              <p>
                Our AI-powered growth tools are designed to help businesses
                unlock their full potential. Whether you're a small startup or a
                large enterprise, our growth tools can help you achieve your
                goals and drive sustainable growth.
              </p>
              <a
                href={"https://platform.geleza.app"}
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

export default Features;
