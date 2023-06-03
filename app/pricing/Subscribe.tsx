"use client";

import { Badge, Button, Card } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  //

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 my-10 w-full mx-auto max-w-2xl">
      <Card className="bg-white text-dark">
        <Card.Section className="bg-black text-white py-5">
          <h6 className="text-center text-xl font-bold text-white">
            Student Plan
          </h6>
        </Card.Section>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-center text-5xl font-black text-dark !mt-5">
            $10{" "}
            <span className="text-base font-normal text-gray-500">/ Month</span>
          </h1>
          <Badge color="green" className="text-dark capitalize" size="lg">
            Start For Free
          </Badge>
        </div>
        <div className="my-10 flex flex-col gap-2 text-sm">
          <h5>✓ 1 day free</h5>
          <h5>✓ Cancel anytime</h5>
          <h5>✓ AI Chat & Content Writer</h5>
          <h5>✓ All students features</h5>
          <h5>✓ Basic support</h5>
        </div>
        <Button
          className="bg-primary"
          fullWidth
          size="lg"
          component="a"
          href="https://platform.geleza.app"
          target={"_blank"}
        >
          Start For Free
        </Button>
      </Card>
      <Card className="bg-white text-dark">
        <Card.Section className="bg-black text-white py-5">
          <h6 className="text-center text-xl font-bold text-white">
            All Access Plan
          </h6>
        </Card.Section>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-center text-5xl font-black text-dark !mt-5">
            $29{" "}
            <span className="text-base font-normal text-gray-500">/ Month</span>
          </h1>
          <Badge color="green" className="text-dark capitalize" size="lg">
            Start today.
          </Badge>
        </div>
        <div className="my-10 flex flex-col gap-2 text-sm">
          <h5>✓ Cancel anytime</h5>
          <h5>✓ All Geleza features</h5>
          <h5>✓ Unlimited content</h5>
          <h5>✓ Unlimited usage</h5>
          <h5>✓ Premium support</h5>
        </div>
        <Button
          className="bg-primary"
          fullWidth
          size="lg"
          component="a"
          href="https://platform.geleza.app"
          target={"_blank"}
        >
          Get Started
        </Button>
      </Card>
    </div>
  );
};

export default Subscribe;
