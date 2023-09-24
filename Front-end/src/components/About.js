import React from 'react'

export default function About() {
  return (
<div>
    <main class="container mx-auto py-8 px-4">

        <section class="bg-white p-6 shadow-md rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
            <p class="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est in ex hendrerit bibendum. Nullam at volutpat arcu, sit amet facilisis ligula. Integer at convallis libero. Vivamus lacinia nec metus et cursus. Donec interdum lectus eu justo bibendum, vel gravida ipsum eleifend. Sed consectetur nec justo eget cursus.
            </p>
        </section>

        <section class="bg-white p-6 mt-4 shadow-md rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                    <div class="bg-gray-200 text-center p-4 rounded-lg">
                        <img src="https://o.remove.bg/uploads/4d823b97-01a6-4d88-95d4-1a6d59b6e6e6/300-23.jpg" alt="Team Member" class="w-20 h-20 mx-auto mb-2 rounded-full" />
                        <h3 class="text-lg font-semibold">Azhan Malik</h3>
                        <p class="text-gray-700">Designer</p>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                    <div class="bg-gray-200 text-center p-4 rounded-lg">
                        <img src="https://o.remove.bg/uploads/179ebc24-2f5c-45d9-9adf-78be073de80f/300-29.jpg" alt="Team Member" class="w-20 h-20 mx-auto mb-2 rounded-full" />
                        <h3 class="text-lg font-semibold">Awais Malik</h3>
                        <p class="text-gray-700">Developer</p>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                    <div class="bg-gray-200 text-center p-4 rounded-lg">
                        <img src="https://o.remove.bg/uploads/421cebc3-6f99-49c7-9fcd-d9e7801c52fc/300-13.jpg" alt="Team Member" class="w-20 h-20 mx-auto mb-2 rounded-full" />
                        <h3 class="text-lg font-semibold">Ali Ahmad</h3>
                        <p class="text-gray-700">Marketing</p>
                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                    <div class="bg-gray-200 text-center p-4 rounded-lg">
                        <img src="https://o.remove.bg/uploads/445f251b-4f04-4594-80f5-c596315b29dc/300-15.jpg" alt="Team Member" class="w-20 h-20 mx-auto mb-2 rounded-full" />
                        <h3 class="text-lg font-semibold">HNTECHS</h3>
                        <p class="text-gray-700">Support</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    </div>
  )
}
