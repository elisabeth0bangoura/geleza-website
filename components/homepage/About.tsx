"use client";
import { ActionIcon, Button } from "@mantine/core";
import {
  IconBrandYoutube,
  IconBriefcase,
  IconRocket,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-7xl px-5 pt-20 pb-24 mx-auto grid place-items-center">
      <h1 className="text-center text-4xl font-bold capitalize">
        Say goodbye to scattered AI solutions.
      </h1>
      <p className="mt-3 font-light">
        Find and use any AI feature you need with Geleza.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mt-20">
        <div className="flex items-start gap-x-5 flex-wrap">
          <ActionIcon
            color={"cyan"}
            component="div"
            variant={"filled"}
            size={"xl"}
          >
            <IconSchool />
          </ActionIcon>
          <div>
            <h1 className="text-xl mb-2 font-medium mt-3">For Students</h1>
            <p className="font-light">
              Your AI-powered study buddy. Get all the AI tools and guidance you
              need to ace your exams!
            </p>
            <Button
              color="cyan"
              variant={"outline"}
              component={Link}
              href="/solutions/students"
              mt={"md"}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-x-5 flex-wrap">
          <ActionIcon
            color={"green"}
            component="div"
            variant={"filled"}
            size={"xl"}
          >
            <IconBriefcase />
          </ActionIcon>
          <div>
            <h1 className="text-xl mb-2 font-medium mt-3">For Businesses</h1>
            <p className="font-light">
              Discover all the AI tools you need to grow your business. Run your
              business the smarter way.
            </p>
            <Button
              color="green"
              variant={"outline"}
              component={Link}
              href="/solutions/businesses"
              mt={"md"}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-x-5 flex-wrap">
          <ActionIcon
            color={"grape"}
            component="div"
            variant={"filled"}
            size={"xl"}
          >
            <IconRocket />
          </ActionIcon>
          <div>
            <h1 className="text-xl mb-2 font-medium mt-3">For Professionals</h1>
            <p className="font-light">
              Geleza empowers professionals to work smarter, not harder, with AI
              at their fingertips.
            </p>
            <Button
              color="grape"
              variant={"outline"}
              component={Link}
              href="/solutions/professionals"
              mt={"md"}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-x-5 flex-wrap">
          <ActionIcon
            color={"red"}
            component="div"
            variant={"filled"}
            size={"xl"}
          >
            <IconBrandYoutube />
          </ActionIcon>
          <div>
            <h1 className="text-xl mb-2 font-medium mt-3">For Creators</h1>
            <p className="font-light">
              With Geleza, you can produce higher quality content in less time,
              allowing you to focus on what you do best - creating.
            </p>
            <Button
              color="red"
              variant={"outline"}
              component={Link}
              href="/solutions/creators"
              mt={"md"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
