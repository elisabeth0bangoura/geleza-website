import { TextInput } from "@mantine/core";
import React from "react";
import PostItem from "./PostItem";

export const metadata = {
  title: "Geleza - Blog",
  description:
    "Geleza blog. Keeping you updated about what's happening in the A.I, tech and education industry.",
};

const BlogPage = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7];

  //
  return (
    <div className="py-20 w-full bg-gray-900">
      <div className="w-full max-w-7xl px-5 mx-auto">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto w-full">
          <h1 className="text-4xl lg:text-6xl text-white font-black mb-3 text-center">
            Geleza Blog.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Keeping You Updated
            </span>
            , Always
          </h1>
        </div>
        <div className="mb-8 mt-5 flex items-center justify-center">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts?.map((post: any, index: number) => {
            return (
              <PostItem
                category="A.I"
                id="1"
                image="/images/about.webp"
                title="What is Geleza"
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
