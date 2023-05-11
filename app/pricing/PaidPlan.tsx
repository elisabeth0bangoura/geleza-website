"use client";
import { Button, Card } from "@mantine/core";
import React from "react";

const PaidPlan = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
      <Card withBorder className="">
        <Card.Section className="bg-gradient-to-tr from-purple-400 to-blue-600 py-5">
          <h6 className="text-center text-xl font-medium text-white">
            STARTER PLAN
          </h6>
        </Card.Section>
        <h1 className="text-center text-6xl font-bold text-primary mt-10">
          $15
        </h1>
        <h6 className="text-center mt-3">Per Month</h6>
        <div className="my-10 flex flex-col gap-2 text-sm">
          <h6>✓ All Geleza features</h6>
          <h6>✓ Unlimited usage</h6>
          <h6>✓ Cancel anytime</h6>
          <h6>✓ Premium support</h6>
        </div>
        <Button
          component="a"
          href="https://platform.geleza.app"
          size="xl"
          mb="xl"
          className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
        >
          Start For Free
        </Button>
      </Card>

      <Card withBorder className="">
        <Card.Section className="bg-gradient-to-tr from-purple-400 to-blue-600 py-5">
          <h6 className="text-center text-xl font-medium text-white">
            SAVE $10
          </h6>
        </Card.Section>
        <h1 className="text-center text-6xl font-bold text-primary mt-10">
          $35
        </h1>
        <h6 className="text-center mt-3">Every 3 Months</h6>
        <div className="my-10 flex flex-col gap-2 text-sm">
          <h6>✓ All Geleza features</h6>
          <h6>✓ Unlimited usage</h6>
          <h6>✓ Cancel anytime</h6>
          <h6>✓ Premium support</h6>
        </div>
        <Button
          component="a"
          href="https://platform.geleza.app"
          size="xl"
          mb="xl"
          className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
        >
          Start For Free
        </Button>
      </Card>
    </div>
  );
};

export default PaidPlan;
