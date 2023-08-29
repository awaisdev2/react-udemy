import React from 'react'

export default function Contact() {
  return (
    <div>
      
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 m-7">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First" />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last" />
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Street No ......." />
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0300-0000000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Website.com" />
        </div>
        <div>
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name@gmail.com" />
        </div>
    </div>
    <div className="mb-6 m-7">
        
    </div> 
    <div className="mb-4 mx-7">
  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
  <input
    type="password"
    id="password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
    placeholder="•••••••••"
  />
</div>
<div className="mb-4 mx-7">
  <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
  <input
    type="password"
    id="confirm_password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
    placeholder="•••••••••"
  />
</div>

    <div className="flex items-start mb-6 m-7 ">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
    </div>
    <button type="submit" className=" my-3 mx-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
</form>

    </div>
  )
}
