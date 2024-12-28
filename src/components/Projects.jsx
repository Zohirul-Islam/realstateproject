import React, { useEffect, useState } from 'react'
import {assets, projectsData} from '../assets/assets'
function Projects() {
  const [currentIndex,setCurrentIndex] =useState(0);
  const [cardtoShow,setCardtoshow] =useState(1);
  const nextprojects =()=>{
    setCurrentIndex(previousIndex=>previousIndex + 1) % projectsData.length;
  }
  const PrevProjects =()=>{
    setCurrentIndex(previousIndex =>previousIndex === 0 ? projectsData.length -1 : previousIndex -1)
  }
  useEffect(()=>{
    const updateCardtoShow =()=>{
      if(window.innerWidth >= 1024){
        setCardtoshow(projectsData.length)
      }else{
        setCardtoshow(1)
      };
    }
      updateCardtoShow();
      window.addEventListener('resize', updateCardtoShow)
      return ()=>{
        window.removeEventListener('resize',updateCardtoShow)
      }
    
    
  },[])
  return (
    <div className='container mx-auto px-6 py-4 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light under'>Completed</span></h1>
        <p className='max-w-80 mx-auto text-center text-gray-500 mb-8'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/* slider button */}
        <div className='flex justify-end items-center mb-8'>
          <button onClick={PrevProjects} className='bg-gray-200 p-3 mr-2 rounded'>
            <img src={assets.left_arrow} alt="Previous" aria-label='Previous project' />
          </button>
          <button onClick={nextprojects} className='bg-gray-200 p-3 mr-2 rounded'>
            <img src={assets.right_arrow} alt="Next" aria-label='Next project' />
          </button>
        </div>
        {/* slider button */}
        {/* project slider container */}
        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{transform:`translateX( -${(currentIndex*100)/ cardtoShow}%)`}}
          >
            {
              projectsData.map((project,index)=>(
                <div key={index} className='w-full sm:w-1/4 flex-shrink-0 relative'>
                  <img className='w-full h-auto mb-8' src={project.image} alt={project.title} />
                  <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                      <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                        <p className='text-gray-500 text-sm'>{project.price} <span>|</span> {project.location} </p>
                      </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Projects