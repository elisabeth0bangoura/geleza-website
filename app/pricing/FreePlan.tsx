"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const FreePlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10 text-white">
      <div className="flex items-center gap-3">
        <img src="/svg/pencil.svg" className="h-14 w-14" />
        <div>
          <h6 className="font-bold text-2xl text-white">Free Plan</h6>
          <p className="mt-1 font-light text-white">Perfect to get started.</p>
        </div>
      </div>

      <div className="mb-8 mt-10 text-white flex items-end gap-3 flex-wrap">
        <h1 className="text-5xl font-black text-primary flex items-center">
          $0.00
        </h1>
        <p>/ Per Month</p>
      </div>

      <div className="mb-5">
        <h6 className="mb-5 text-white text-xl font-medium">
          This plan includes
        </h6>

        <h1 className="mb-2 text-sm text-white">
          🌟 Performance & Stats Dashboard
        </h1>
        <h1 className="mb-2 text-sm text-white">
          🌟 Unlimited Files & Folders
        </h1>
        <h1 className="mb-2 text-sm text-white">🌟 Unlimited Notes</h1>
        <h1 className="mb-2 text-sm text-white">❌ Zeda AI Chat</h1>
        <h1 className="mb-2 text-sm text-white">❌ Content & Essay Writer</h1>
        <h1 className="mb-2 text-sm text-white">❌ Assignment Writer</h1>
        <h1 className="mb-2 text-sm text-white">❌ PrepPal - Exam Tool</h1>
        <h1 className="mb-2 text-sm text-white">❌ The Library</h1>
        <h1 className="mb-2 text-sm text-white">❌ All Upcoming Features</h1>
      </div>

      <Button
        component="a"
        href="https://platform.geleza.app"
        size="lg"
        className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
      >
        Start For Free
      </Button>
    </Card>
  );
};

export default FreePlan;
