import React from 'react'

export default function Footer() {
  return (
    <div>
      
<footer class="bg-[#1C1D1F]">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <ul class="text-white text-sm">
                <li class="mb-1">
                    <a href="/" class=" hover:underline">Udemy Businessy</a>
                </li>
                <li class="mb-1">
                    <a href="/" class=" hover:underline">Teach on Udemy</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Get the app</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">About us</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Contact us</a>
                </li>
            </ul>
        </div>
        <div>
            <ul class="text-white text-sm">
                <li class="mb-1">
                    <a href="/" class="hover:underline">Careers</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Blog</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Help and Support</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Affiliate</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Investors</a>
                </li>
            </ul>
        </div>
        <div>
            <ul class="text-white text-sm">
                <li class="mb-1">
                    <a href="/" class="hover:underline">Terms</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Cookie Settings</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Sitemap</a>
                </li>
                <li class="mb-1">
                    <a href="/" class="hover:underline">Accessibility statement</a>
                </li>
            </ul>
        </div>
        <div>
            <button className='flex items-center pl-4 pr-12 py-2 border-2 border-white bg-black text-white'>
            <svg class="w-6 h-6 mr-2 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  English
            </button>
        </div>
    </div>
    <div class="px-4 py-6 md:flex md:items-center md:justify-between">
        <span>
            <img style={{height: '40px'}} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="footer-img" />
        </span>
        <div>
       <p className='text-md text-gray-300'> © 2023 Udemy, Inc.</p>
        </div>
      </div>
    </div>
</footer>

    </div>
  )
}
