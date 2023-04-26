"use client";
import React from "react";
import PostItem from "../PostItem";

const MorePosts = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex flex-wrap gap-5">
      {posts?.map((post) => (
        <PostItem
          category="Artificial Intelligence"
          id="23ief-1hd2ini1-dn2ibuqb-2nfinfw"
          image="/images/about.webp"
          title="Effects of AI in the education system"
        />
      ))}
    </div>
  );
};

export default MorePosts;
