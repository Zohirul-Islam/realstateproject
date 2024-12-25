import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
function Navbar() {
  const [showMobileMenu,setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return ()=>{
      document.body.style.overflow = 'auto';
    }
  },[showMobileMenu])
  return (
    <div className='left-0 top-0 z-10 w-full absolute'>
        <div className='container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="logo" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#testtymonials" className='cursor-pointer hover:text-gray-400'>Testtymonials</a>
            </ul>
            <button className='hidden md:block  bg-white px-8 py-2 rounded-full '>Sign up</button>
            <img onClick={()=>setShowMobileMenu(true)} className='w-7 md:hidden ' src={assets.menu_icon} alt="menu icon" />
        </div>
        {/* mobile screen menu */}
        <div className={`md:hidden ${showMobileMenu ?'fixed w-full':'w-0 h-0'}  bottom-0 top-0 right-0 left-0  overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-3 cursor-pointer'>
            <img onClick={()=>setShowMobileMenu(false)} className='w-7' src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center mt-5 mx-4 text-lg font-medium'>
                <a onClick={()=>setShowMobileMenu(false)} href="#header" className='cursor-pointer px-3 hover:text-gray-400'>Home</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#about" className='cursor-pointer px-3 hover:text-gray-400'>About</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#projects" className='cursor-pointer px-3 hover:text-gray-400'>Projects</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#testtymonials" className='cursor-pointer px-3 hover:text-gray-400'>Testtymonials</a>
          </ul>
        </div>

    </div>
  )
}

export default Navbar