"use client";
import { Badge, Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Connect = () => {
  return (
    <div className="bg-[#EEF0F4]">
      <div className="py-20 md:py-12 xl:container m-auto px-6 md:px-12">
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <Badge>We Work Hard, So You Don't Have To</Badge>
            <h1 className=" mt-3 font-black text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
              One{" "}
              <span className="text-primary dark:text-primaryLight">
                platform
              </span>
              , everything you{" "}
              <span className="text-primary dark:text-primaryLight">need.</span>
            </h1>
            <p className="mt-8 text-gray-800">
              Say goodbye to juggling multiple platforms - Geleza has got
              everything you need in one place. Streamline your workflow and
              unlock new possibilities with the power of cutting-edge AI
              technology.
            </p>
            <div className="my-16">
              <Button
                component={Link}
                href="/pricing"
                size="lg"
                className="px-16 bg-gradient-to-br from-primary via-blue-700 to-purple-700"
              >
                Pricing
              </Button>
            </div>
          </div>
          <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img
              src="/images/marketing.webp"
              className="pb-5 pr-5 bg-gradient-to-tr from-pink-700 via-purple-700 to-blue-700"
              alt="project illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
