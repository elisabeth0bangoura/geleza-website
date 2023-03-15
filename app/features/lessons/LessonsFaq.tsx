'use client'
import { Accordion, Badge } from '@mantine/core'
import React from 'react'
import lessonFaq from '../../../data/lessonFaq'

const LessonsFaq = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-3xl w-full py-20 flex flex-col justify-center items-center">
        <Badge size="lg">Lessons</Badge>
        <h1 className="text-4xl font-bold mb-10 text-white">
          Frequently Asked Asked
        </h1>
        <Accordion className="w-full">
          {lessonFaq?.map((faq: any, index: number) => {
            return (
              <Accordion.Item value={index.toString()}>
                <Accordion.Control>
                  <h2 className="font-bold">{faq?.question}</h2>
                </Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}

export default LessonsFaq
