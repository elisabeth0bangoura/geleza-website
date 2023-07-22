"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const FreePlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10 text-white mt-10">
      <div className="flex items-center flex-wrap gap-3 justify-between">
        <div>
          <h6 className="font-bold text-2xl text-white">Pro Plan ⚡</h6>
          <p className="mt-1 font-light text-white">Perfect to get started.</p>
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="text-5xl font-black text-primary flex items-center">
            $15
          </h1>
          <p className="text-end">Monthly</p>
        </div>
      </div>

      <div className="my-10">
        <h1 className="mb-2 text-sm text-white">🌟 All Geleza features</h1>
        <h1 className="mb-2 text-sm text-white">🌟 No monthly usage limits</h1>
        <h1 className="mb-2 text-sm text-white">🌟 Cancel anytime</h1>
        <h1 className="mb-2 text-sm text-white">🌟 Premium support</h1>
      </div>

      <Button
        component="a"
        href="https://platform.geleza.app"
        size="lg"
        className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
      >
        Get Started Now
      </Button>
    </Card>
  );
};

export default FreePlan;
