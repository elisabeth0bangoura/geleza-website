import React from "react";

const WhatYouGet = () => {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="/images/about.webp"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-xl">
                Wondering...
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                How Geleza works?
              </h2>
              <p className="my-8 text-gray-600 font-light">
                Geleza offers a set of AI tools and features to help you save
                your time and money. Instead of using multiple platforms to get
                things done, do it all in one platform that has every feature
                you need.
              </p>
              <div className="divide-y space-y-4 divide-gray-100 ">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 "
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 ">
                      We Listen...
                    </h4>
                    <p className="text-gray-500 ">
                      No AI feature you are looking for? Tell us and we will
                      make it available for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
