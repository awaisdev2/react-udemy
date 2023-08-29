import React from 'react'

export default function Footer() {
  return (
    <div>
      
<footer className="bg-[#1C1D1F]">
    <div className="mx-auto mt-10 w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <ul className="text-white text-sm">
                <li className="mb-1">
                    <a href="/" className=" hover:underline">Udemy Businessy</a>
                </li>
                <li className="mb-1">
                    <a href="/" className=" hover:underline">Teach on Udemy</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Get the app</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">About us</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Contact us</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white text-sm">
                <li className="mb-1">
                    <a href="/" className="hover:underline">Careers</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Blog</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Help and Support</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Affiliate</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Investors</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white text-sm">
                <li className="mb-1">
                    <a href="/" className="hover:underline">Terms</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Cookie Settings</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Sitemap</a>
                </li>
                <li className="mb-1">
                    <a href="/" className="hover:underline">Accessibility statement</a>
                </li>
            </ul>
        </div>
        <div>
            <button className='flex items-center pl-4 pr-12 py-2 border-2 border-white bg-black text-white'>
            <svg className="w-6 h-6 mr-2 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  English
            </button>
        </div>
    </div>
    <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span>
            <img style={{height: '40px'}} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="footer-img" />
        </span>
        <div>
       <p className='text-sm text-gray-300'> © 2023 Udemy, Inc.</p>
        </div>
      </div>
    </div>
</footer>

    </div>
  )
}
