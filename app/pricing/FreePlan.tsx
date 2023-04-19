'use client'
import { Button, Card } from '@mantine/core'
import React from 'react'

const FreePlan = () => {
  return (
    <Card className="bg-gray-800 py-5 px-10">
    

      <div className="flex items-center gap-3">
        <img src="/svg/pencil.svg" className="h-14 w-14" />
        <div>
          <h6 className="font-bold text-2xl text-white">Free Plan</h6>
          <p className="mt-1 font-light">Perfect to get started.</p>
        </div>
      </div>

      <div className="mb-8 mt-10 flex items-end gap-3 flex-wrap">
        <h1 className="text-5xl font-black text-primary flex items-center">
          $0.00
        </h1>
        <p>/ Per Month</p>
      </div>

      <div className="mb-5">
        <h6 className="mb-5 text-white text-xl font-medium">
          This plan includes
        </h6>

        <h1 className="mb-2 text-sm">🌟 Performance & Stats Dashboard</h1>
        <h1 className="mb-2 text-sm">🌟 AI Chat - 2 Days Free</h1>
        <h1 className="mb-2 text-sm">🌟 Unlimited Notes</h1>
        <h1 className="mb-2 text-sm">🌟 AI Dictionary</h1>
        <h1 className="mb-2 text-sm">❌ PrepPal - Exam Tools</h1>
        <h1 className="mb-2 text-sm">❌ Essay & Content Writer</h1>
        <h1 className="mb-2 text-sm">❌ Unlimited Documents</h1>
        <h1 className="mb-2 text-sm">❌ Study Groups</h1>
        <h1 className="mb-2 text-sm">❌ AI Art Generator</h1>
        <h1 className="mb-2 text-sm">❌ Zeda Chat & Writer</h1>
        <h1 className="mb-2 text-sm">❌ All Upcoming Features</h1>
      </div>

      <Button
        component="a"
        href="https://classroom.geleza.app"
        size="lg"
        className="w-full bg-gradient-to-br from-primary via-blue-700 to-purple-700"
      >
       Start For Free
      </Button>
    </Card>
  )
}

export default FreePlan
