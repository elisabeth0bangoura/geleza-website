import React from 'react'
import { Card as CardItem, MantineColor } from '@mantine/core'
import { CLASS_URL } from '../../utils/urls'

type Info = {
  title: string
  image: React.ReactNode
  description: string
  color: MantineColor
}
const Card = ({ description, image, title, color }: Info) => {
  return (
    <div
      className="bg-white shadow-2xl border rounded-2xl p-5 flex items-center justify-center flex-col border-b-2"
      style={{
        borderBottomColor: color,
      }}
    >
      <div
        className="h-12 text-white w-12 items-center justify-center flex rounded-full"
        style={{
          backgroundColor: color,
        }}
      >
        {image}
      </div>
      <h1 className="text-xl my-2 font-bold">{title}</h1>
      <p className="text-sm text-center">{description}</p>
      <a
        href={CLASS_URL}
        target="_blank"
        className="mt-4 border w-full py-2 bg-slate-200 text-center"
      >
        Get Started
      </a>
    </div>
  )
}

export default Card
