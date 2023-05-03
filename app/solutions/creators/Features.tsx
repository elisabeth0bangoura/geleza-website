"use client";

import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="relative py-10">
        <h1 className="mb-10 font-bold text-4xl text-center">
          AI Tools For Creators.
        </h1>
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="hover:scale-105 transition-all duration-500 group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-400 ">
              <img
                className="mx-auto w-24 h-24 object-cover"
                src="/svg/rating.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">Growth Tools</h3>
              <p>
                Grow your audience by utilizing a wide range of AI tools built
                specifically for creators. Learn how to deliver high quality
                content, learn about marketing yourself, editing content, and a
                lot more.
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
                className="mx-auto w-24 h-24 object-cover"
                src="/svg/write.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Script Writers
              </h3>
              <p>
                Write high quality script for your videos. Revise and edit as
                required. Utilize a collection of advanced AI tools to help you
                deliver a clearer message to your audience.
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
                className="mx-auto w-24 h-24 object-cover"
                src="/svg/edit.svg"
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Editing Tools
              </h3>
              <p>
                The editing tools on Geleza empower professionals with advanced
                AI technology for photo restoration, code translation, content
                editing, image editing, paraphrasing, and more.
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
