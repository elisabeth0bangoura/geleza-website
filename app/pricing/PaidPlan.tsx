"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const PaidPlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10 text-white">
      <div className="flex items-center gap-3">
        <div>
          <h6 className="font-bold text-2xl text-white">Special Offer</h6>
          <p className="mt-1 font-light">🎉 Get 50% off! Until 15 May 🎉</p>
        </div>
      </div>

      <div className="mb-8 mt-10 flex items-end gap-3 flex-wrap">
        <h1 className="text-5xl font-black text-primary">
          <span className="line-through text-red-500 text-3xl">$15</span> $7.50
        </h1>
        <p>/ Per Month</p>
      </div>

      <div className="mb-5">
        <h6 className="mb-5 text-white text-xl font-medium">
          Full Access Plan
        </h6>

        <h1 className="mb-2 text-sm">🌟 Gain access to all AI tools</h1>
        <h1 className="mb-2 text-sm">🌟 No monthly usage limits</h1>
      </div>

      <Button
        component="a"
        href="https://platform.geleza.app"
        size="lg"
        className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
      >
        Get Started
      </Button>
    </Card>
  );
};

export default PaidPlan;
