"use client";
import React from "react";

const Docs = () => {
  return (
    <div className="mt-10 px-4 bg-white rounded-3xl w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 px-3 text-gray-600">
        <div>
          <img src="/images/file.jpg" alt="image" loading="lazy" />
        </div>
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-black text-2xl">
            Do more with
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Smart Docs & Summarizer
          </h2>

          <p className="my-8 text-gray-600 ">
            Upload and manage your documents and files the smart way. Sort and
            group by folders and types, summarize the context of your documents
            and a lot more. Powered by Geleza's AI.
          </p>

          <a
            href={"https://platform.geleza.app"}
            className="bg-gradient-to-bl text-dark border-dark border-2 font-bold mt-6 mb-10  px-20 py-3 rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Docs;
