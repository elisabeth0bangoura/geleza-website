"use client";

import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="relative py-10">
        <h1 className="mb-10 font-bold text-4xl text-center">
          Other AI Tools For Students
        </h1>
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
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
                Content writers are one of the most useful AI tools for
                students. These tools can help students in writing assignments,
                research papers, and other academic documents
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
                className="mx-auto w-24 h-24 object-contain"
                src="/svg/test.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Assignment Writer
              </h3>
              <p>
                These tools use advanced algorithms to generate unique answers
                for academic assignments, and ensures that students receive high
                academic success while still maintaining their busy schedules.
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
                src="/svg/study.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">Study Tools</h3>
              <p>
                Improve the way you study. Utilize Geleza's AI tools to do
                things the smart way. You can ready about any academic topic,
                save notes, study materials and more, all powered by AI.
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
