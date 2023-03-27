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
     
      <div className="mb-8 mt-10 flex items-end gap-3 flex-wrap">
        <h1 className="text-5xl font-black text-primary flex items-center">
          $10.00
        </h1>
        <p>/ Per Month</p>
      </div>

      <div className="mb-5">
        <h6 className="mb-5 text-white text-xl font-medium">
          This plan includes
        </h6>

        <h1 className="mb-2 text-sm">🌟 Unlimited Notes</h1>
        <h1 className="mb-2 text-sm">🌟 Unlimited Documents</h1>
        <h1 className="mb-2 text-sm">🌟 Performance & Stats Dashboard</h1>
        <h1 className="mb-2 text-sm">🌟 Unlimited Tasks & Reminders</h1>
        <h1 className="mb-2 text-sm">🌟 A.I Dictionary</h1>
        <h1 className="mb-2 text-sm">🌟 Courses & Lessons</h1>
        <h1 className="mb-2 text-sm">🌟 Image Generator</h1>
        <h1 className="mb-2 text-sm">🌟 Zeda Chat & Writer</h1>
        <h1 className="mb-2 text-sm">🌟 Teacher's Assistant</h1>
        <h1 className="mb-2 text-sm">🌟 Additional New Features</h1>
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
