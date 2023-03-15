'use client'
import { Button, Card } from '@mantine/core'
import React from 'react'

const PaidPlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10">
      <div className="flex items-center gap-3">
        <img src="/svg/pencil.svg" className="h-10 w-10" />
        <div>
          <h6 className="font-bold text-2xl text-white">Pro Plan</h6>
          <p className="mt-1 font-light">For best exam results.</p>
        </div>
      </div>

      <h1 className="line-through mt-8 text-xl text-red-600">$25.00</h1>
      <div className="mb-8 flex items-end gap-3 flex-wrap">
        <h1 className="text-5xl font-black text-primary flex items-center">
          $18.00
        </h1>
        <p>/ Per Month</p>
      </div>

      <div className="mb-5">
        <h6 className="mb-5 text-white text-xl font-medium">
          This plan includes
        </h6>

        <h1 className="mb-2 text-sm">🌟 Zeda Chat Full Access</h1>
        <h1 className="mb-2 text-sm">🌟 Zeda Writer Full Access</h1>
        <h1 className="mb-2 text-sm">🌟 Unlimited PrepPal Tests</h1>
        <h1 className="mb-2 text-sm">🌟 Unlimited Notes</h1>
        <h1 className="mb-2 text-sm">🌟 Courses & Lessons</h1>
        <h1 className="mb-2 text-sm">🌟 Smart Tools</h1>
        <h1 className="mb-2 text-sm">🌟 Teacher's Assistant</h1>
      </div>

      <Button
        component="a"
        href="https://classroom.geleza.app"
        size="lg"
        className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
      >
        Get Started
      </Button>
    </Card>
  )
}

export default PaidPlan
