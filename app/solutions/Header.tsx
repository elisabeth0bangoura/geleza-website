"use client";

import React from "react";

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-gray-200  md:text-6xl text-4xl font-black">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Geleza AI Tools.
          </span>{" "}
          <br />
          {title}
        </h1>
        <p className="text-center mt-3 text-lg text-white">{description}</p>
        <a
          href={"https://platform.geleza.app"}
          className="bg-gradient-to-bl text-white font-bold mt-6 mb-10 from-blue-600 to-teal-800 px-20 py-3 rounded-full"
        >
          Start For Free
        </a>
      </div>
    </div>
  );
};

export default Header;
