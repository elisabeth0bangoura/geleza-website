import React from "react";
import MorePosts from "./MorePosts";
import PostDetails from "./PostDetails";

const SingleBlogPost = () => {
  return (
    <>
      <div className="px-5 py-10 grid place-items-center bg-gradient-to-tr w-full from-purple-600 to-indigo-600">
        <div className="w-full mx-auto max-w-lg">
          <div className="mb-3.5 flex items-center justify-center">
            <span className="inline-block w-40 h-1 bg-blue-100 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-100 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-100 rounded-full"></span>
          </div>
          <h1 className="text-white font-bold text-center text-4xl">
            The effects of AI in the Education Industry
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 px-5 lg:grid-cols-3 lg:gap-24 gap-10 w-full mx-auto max-w-7xl my-14">
        {/* POST DETAILS */}
        <div className="lg:col-span-2">
          <PostDetails />
        </div>

        {/* RELATED POSTS */}
        <div className="">
          <h1 className="font-bold text-2xl">Related Posts</h1>
          <div className="mb-3.5 flex items-center mt-2">
            <span className="inline-block w-40 h-1 bg-blue-100 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-100 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-100 rounded-full"></span>
          </div>
          <MorePosts />
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
