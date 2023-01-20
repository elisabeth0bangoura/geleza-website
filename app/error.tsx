'use client'

import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import { toast } from 'react-toastify'

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  //

  const router = useRouter()

  useEffect(() => {
    toast.error('Something went wrong. Please refresh your page')
  }, [])

  return (
    <div className="w-full bg-black min-h-screen h-full mx-auto py-20">
      <div className="bg-white px-5 py-10 rounded-xl w-full max-w-md mx-auto flex flex-col justify-center items-center">
        <AiOutlineWarning
          className="p-3 bg-red-500 rounded-full mb-5"
          color="white"
          size={50}
        />
        <h1 className="font-black text-3xl mb-2 text-center">
          Something Went Wrong...
        </h1>
        <p className="text-center mb-10">{error?.message}</p>
        <Button
          onClick={() => router.refresh()}
          size="lg"
          color={'dark'}
          className="bg-black"
        >
          Refresh Page
        </Button>
      </div>
    </div>
  )
}

export default ErrorBoundary
