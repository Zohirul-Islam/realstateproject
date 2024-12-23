import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen flex items-center overflow-hidden w-full bg-cover mb-4 bg-center' style={{backgroundImage:"url('/header_img.png')"}} id='header'>
      <Navbar/>
      <div className='container text-center text-white mx-auto'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold inline-block pt-20 text-white'>Explore home that fit your dreams</h2>
        <div className='mt-16 space-x-6'>
          <a href="" className='border border-white px-8 py-3 rounded hover:bg-gray-600'>Projects</a>
          <a href="" className='bg-blue-500 px-8 py-3 rounded '>contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Header