import React from 'react'

export default function Customers(props) {
  return (
    <div style={{backgroundColor: '#F7F9FA'}} className='p-5 text-center'>
            <div>
                <img src={props.src} alt='logos' />
            </div>
        </div>
  )
}
