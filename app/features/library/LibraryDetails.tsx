"use client";
import React from "react";
import { Accordion, Badge } from "@mantine/core";
import libraryFaq from "../../../data/library";

const LibraryDetails = () => {
  return (
    <div className="mx-auto max-w-3xl w-full py-20 flex flex-col justify-center items-center">
      <Badge size="lg">The Library</Badge>
      <h1 className="text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <Accordion className="w-full">
        {libraryFaq?.map((faq: any, index: number) => {
          return (
            <Accordion.Item value={index.toString()}>
              <Accordion.Control>
                <h2 className="font-bold">{faq?.question}</h2>
              </Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default LibraryDetails;
