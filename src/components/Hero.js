/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Customers from "./Customers";

export default function Hero() {
  return (
    <div className=''>
        <div style={{backgroundImage: 'url("https://img-c.udemycdn.com/notices/web_carousel_slide/image/ec6e7b60-eb03-4afb-899a-114d691ebc0d.jpg")', backgroundSize: 'cover', height: '350px'}} className=''>
           <div style={{paddingTop: '8%'}}>
           <div style={{width: 'fit-content', marginLeft: '8%'}} className='bg-white p-5'>
        <h1 className='text-4xl font-black max-w-lg'>A sale as big as your dreams</h1>
        <p className='text-lg max-w-lg my-2'>Courses start at $9.99 through Aug 31. Opportunities like this only come once in a season.</p>
      </div>
           </div>
        </div>
          <div style={{marginTop: '20px'}}>
          <div style={{backgroundColor: '#F7F9FA', textAlign: 'center', padding: '10px 0'}}>
          <h1 style={{color: '#6a6f73', margin: '15px 0'}}>Trusted by over 14,400 companies and millions of learners around the world</h1>
         <div className='flex justify-center flex-wrap'>
         <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg' />
          <Customers src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg' />
         </div>
          </div>
          </div>
    </div>
  )
}
