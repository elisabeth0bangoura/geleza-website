import React from 'react'
import {
  BiChat,
  BiEditAlt,
  BiFile,
  BiHealth,
  BiListPlus,
  BiMessage,
  BiServer,
  BiVideo,
} from 'react-icons/bi'
import Card from './Card'

const Features = () => {
  return (
    <div className="w-full bg-white border-t">
      <div className="w-full mx-auto max-w-7xl py-20 px-6 !text-gray-800">
        <h1 className="text-center text-gray-800 font-black text-4xl md:text-5xl lg:text-6xl">
          Making learning easy.
        </h1>
        <p className="text-center my-5">
          Our platform is feature-packed to make learning as easy as possible
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          <Card
            color={'orange'}
            image={<BiVideo />}
            title="Live Lessons"
            description="Students can join live lessons on weekends and interact with teachers and other students, interactively and in real time."
          />
          <Card
            color={'indigo'}
            image={<BiMessage />}
            title="Live Chat"
            description="Each subject has a group chat for students to ask questions, bond with others and development their communication skills."
          />
          <Card
            color={'teal'}
            image={<BiChat />}
            title="Lesson Comments"
            description="Lessons comments allows students to voice their opinions and understanding about a lesson. Comments are reviewed by teachers."
          />
          <Card
            color={'violet'}
            image={<BiListPlus />}
            title="Watchlist"
            description="Not ready to watch a lesson right now? Add it to your watchlist and you can always find it later. Never miss a lesson in Geleza."
          />
          <Card
            color={'gray'}
            image={<BiEditAlt />}
            title="Exam Mode"
            description="During exams, Geleza works differently. You get features that are only tailored to make you deal with exams better and focus more."
          />
          <Card
            color={'green'}
            image={<BiFile />}
            title="Documents"
            description="Find previous exam papers, memorandums, additional study material and other documents that can help improve the way you learn."
          />
          <Card
            color={'red'}
            image={<BiHealth />}
            title="Social Lessons"
            description="We know students face a lot of challenges outside of school as well, that's why we offer social and health lessons as well."
          />
          <Card
            color={'yellow'}
            image={<BiServer />}
            title="Skills Development"
            description="Do you have a skill you want to master? We offer skills development lessons as well, focusing on topics such as music, drawing, etc."
          />
        </div>
      </div>
    </div>
  )
}

export default Features
