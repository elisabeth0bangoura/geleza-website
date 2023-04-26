"use client";
import React from "react";
import { Avatar } from "@mantine/core";
import moment from "moment";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const PostDetails = ({}) => {
  return (
    <div>
      <div className="flex items-center gap-10 justify-between flex-wrap">
        <div className="flex items-center gap-4">
          <Avatar src={"/icon.png"} size="lg" />
          <div>
            <h1 className="font-bold text-lg">By Geleza</h1>
            <p>{moment(new Date()).fromNow()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <IconBrandFacebook />
          <IconBrandTwitter />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
