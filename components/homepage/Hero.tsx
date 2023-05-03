"use client";
import { Badge } from "@mantine/core";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mx-auto max-w-7xl py-10">
        <div>
          <Badge className="capitalize" size="xl">
            All AI tools in one place.
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl capitalize font-black mb-7 mt-6 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              The only
            </span>{" "}
            <span className="stroke">AI Platform</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
              You will ever need
            </span>
            !
          </h1>
          <p className="mb-14 font-light text-lg ">
            Tired of too many AI platforms? Us Too! Find all the tools in one
            place. Revolutionize your work with AI. Join us and start innovating
            today.
          </p>
          <div>
            <a
              href={"https://platform.geleza.app"}
              target="_blank"
              className="btn border-2 rounded-full bg-black px-24 border-black  text-white text-lg font-bold"
            >
              Start For Free 🎉
            </a>
          </div>
        </div>
        <div>
          <img src="/images/work.jpg" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
