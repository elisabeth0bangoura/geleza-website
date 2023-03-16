import React from 'react'
import LessonsFaq from './LessonsFaq'
import Subjects from './Subjects'

export const metadata = {
  title: 'Geleza - A.I Powered Lessons',
  description:
    'Join the next generation of learners with A.I-backed learning. Geleza is able to teach you anything you ask, and help you advance your learning',
}

const LessonsPage = () => {
  return (
    <div>
      <Subjects />
      <LessonsFaq />
    </div>
  )
}

export default LessonsPage
