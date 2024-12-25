import React from 'react'
import {assets} from '../assets/assets'
function About() {
  return (
    <div id='about' className='flex flex-col items-center justify-center container mx-auto w-full p-14 md:px-20 lg:px-32'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light '>our brand</span> </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties,Dedicated to your vision</p>
        <div className='flex flex-col md:flex-row md:gap-20 items-center md:items-start'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                  <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <p className='text-4xl font-medium text-gray-800'>12+</p>
                    <p>Projects Completed</p>
                  </div>
                  <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Mn . Sq . ft. delivered</p>
                  </div>
                  <div>
                    <p className='text-4xl font-medium text-gray-800'>25+</p>
                    <p>Ongoing Projects</p>
                  </div>
                </div>
                <p className='my-10 max-w-lg font-medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto nesciunt iste, aspernatur quam quis labore voluptas maiores cupiditate ea quia minima amet deserunt earum dolorum qui. Iusto, assumenda unde.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto nesciunt iste, aspernatur quam quis labore voluptas maiores cupiditate ea quia minima amet deserunt earum dolorum qui. Iusto, assumenda unde.
                </p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About