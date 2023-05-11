"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const FreePlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10 text-white mt-10">
      <div className="flex items-center flex-wrap gap-3 justify-between">
        <div>
          <h6 className="font-bold text-2xl text-white">Free Plan</h6>
          <p className="mt-1 font-light text-white">Perfect to get started.</p>
        </div>
        <h1 className="text-5xl font-black text-primary flex items-center">
          $0.00
        </h1>
      </div>

      <div className="my-10">
        <h1 className="mb-2 text-sm text-white">
          🌟 Only access free AI tools
        </h1>
        <h1 className="mb-2 text-sm text-white">🌟 No monthly usage limits</h1>
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
