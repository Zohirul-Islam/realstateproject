import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
function Testimonials() {
  return (
    <div className='container mx-auto w-full py-10 lg:px-32 overflow-hidden' id='testtymonials'> 
        <h1 className='text-2xl text-center md:text-4xl mb-2 font-bold'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='max-w-80 text-gray-400 mx-auto text-center mb-12'>Real Stories from Thos Who found Home with us</p>
        <div className='flex justify-center gap-10 flex-wrap px-10 py-10'>
            {
                testimonialsData.map((testimonial,index)=>(
                    <div className=' w-full sm:max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' key={index}>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4 text-center' src={testimonial.image} alt="" />
                        <h2 className='text-xl text-gray-700 font-medium '>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({length:testimonial.rating},(item,index)=>(
                                <img key={index} src={assets.star_icon}/>
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials