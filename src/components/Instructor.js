import React from 'react'

export default function Instructor() {
  return (
    <div className='flex flex-wrap my-8 justify-center items-center'>
      <div>
        <img className='w-96' src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="instructor-img" />
      </div>
      <div className='mx-8'>
        <h1 className='text-3xl font-bold'>Become an instructor</h1>
        <p className='text-lg my-2 max-w-md'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
        <button className='bg-[#1C1D1F] hover:bg-slate-800 px-4 py-2 text-white'>Start Teaching Today</button>
      </div>
    </div>
  )
}
