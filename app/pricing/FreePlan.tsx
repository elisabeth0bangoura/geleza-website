"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const FreePlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10 text-white">
      <div className="flex items-center gap-3">
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
        <h6 className="mb-5 text-white text-xl font-medium">Free Tools Only</h6>

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
