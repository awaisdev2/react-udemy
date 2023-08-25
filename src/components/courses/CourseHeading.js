import React from 'react'

export default function CourseHeading(props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>{props.pythonTitle}</h1>
      <p className='max-w-xl my-2 text-sm'>{props.pythonSub}</p>
      <button className='border hover:bg-gray-200 mb-3 border-black p-2'>Explore {props.cardLang}</button>
    </div>
  )
}