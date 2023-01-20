'use client'
import { Loader } from '@mantine/core'
import React from 'react'

const SpinnerLoader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center py-20">
      <Loader />
    </div>
  )
}

export default SpinnerLoader
