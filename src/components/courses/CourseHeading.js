import React from 'react'

export default function CourseHeading(props) {
  return (
    <>
      <div className='python'>
      <h1 className='text-2xl font-bold'>{props.pythonTitle}</h1>
      <p className='max-w-xl my-2 text-sm'>{props.pythonSub}</p>
      </div>
      <div className='excel'>
      <h1 className='text-2xl font-bold'>{props.excelTitle}</h1>
      <p className='max-w-xl my-2 text-sm'>{props.excelSub}</p>
      </div>
      <div className='web-development'>
      <h1 className='text-2xl font-bold'>{props.webTitle}</h1>
      <p className='max-w-xl my-2 text-sm'>{props.webSub}</p>
      </div>
    </>
  )
}