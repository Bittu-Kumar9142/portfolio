import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
 import react1 from "../assets/ReactLogo.png"
import taliwindcss from "../assets/tailwindcss.png"
import node from "../assets/nodejslogo.jpg"
import mongodb from "../assets/mongodbjs.jpeg"


const Experiance = () => {
  return (
    <>
    <div 
    name="Experiance"
    className='max-w-screen-2xl container mx-auto px-4 md:px-10 my-20' > 
      <h1 className='text-3xl font-bold'>Experiance</h1>
      <p>I've more than 2 years of experance in below technologies.</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-5'>
      <div  className='flex flex-col items-center justify-center'>
      <img src={html} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium'>HTML</p> 
      </div>

      <div  className='flex flex-col items-center justify-center'>
      <img src={css} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium'>CSS</p> 
      </div>


      <div  className='flex flex-col items-center justify-center'>
      <img src={js} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium'>JAVASCRIPT</p> 
      </div>

      
      <div  className='flex flex-col items-center justify-center'>
      <img src={react1} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium'>REACT</p> 
      </div>


      <div  className='flex flex-col items-center justify-center'>
      <img src={taliwindcss } className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium uppercase'>taliwindcss </p> 
      </div>


      <div  className='flex flex-col items-center justify-center'>
      <img src={node} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium uppercase'>node js</p> 
      </div>
      
      <div  className='flex flex-col items-center justify-center'>
      <img src={mongodb} className='md:h-[200px] md:w-[200] rounded-full  object-cover'/>
         <p className='text-3xl text-red-500 font-medium uppercase'>mongodb</p> 
      </div>
      

      </div>
    </div>
    </>
  )
}

export default Experiance