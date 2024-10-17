import React from 'react'
import { FaLinkedinIn,FaGithub,FaTelegram, FaFacebook  } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import pic from "../assets/userprofile.png"
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
    <div name= "Home" className='max-w-screen-2xl container mx-auto px-4 md:px-10 my-20'>  
    <div className='grid md:grid-cols-2 grid-rows-1 gap-5'>
      <div className='mt-10 order-2 md:order-1'>
        <p className='text-xl'>Welcome in my feed</p>
        <h1 className='text-3xl'>Hello,i'm a <span className='text-red-500'> <ReactTyped
    startWhenVisible
    strings={[
      "Developer","Programmer","Coder"
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
  /></span></h1>
        <p className='text-justify my-4 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus voluptas aliquam laboriosam nisi maxime facilis labore totam ipsum vitae, quas nesciunt et ut consequatur rem dignissimos consequuntur exercitationem quae?</p>
        <div className='flex flex-col justify-center items-center text-center md:flex-row md:justify-between space-y-3'>
  <div className='space-y-2'>
     <h1 className='md:text-xl font-bold'>Available on</h1>
     <ul className='flex justify-center text-center space-x-5 text-xl'>
      <li className='text-xl font-bold rounded-full hover:scale-125'><a href="https://www.facebook.com" target='blank'><FaFacebook /></a></li>
      <li className='text-xl font-bold rounded-full hover:scale-125'><a href="https://www.linkedin.com/in/bittu-kumar9142/" target='blank'><FaLinkedinIn /></a></li>
      <li className='text-xl font-bold rounded-full hover:scale-125'><a href="https://github.com/Bittu-Kumar9142" target='blank'><FaGithub /></a></li>
      <li className='text-xl font-bold rounded-full hover:scale-125'><a href="https://web.telegram.org/a/#-1001426295239" target='blank'><FaTelegram /></a></li>
     </ul>
  </div>
  <div className='space-y-2'>
    <h1 className='text-xl font-bold'>Currently working on</h1>
    <ul className='flex justify-center text-center space-x-5 text-2xl font-bold'>
      <li className='text-3xl font-bold rounded-full hover:scale-125'><SiExpress /></li>
      <li className='text-3xl font-bold rounded-full hover:scale-125'><SiMongodb /></li>
      <li className='text-3xl font-bold rounded-full hover:scale-125'><FaReact /></li>
      <li className='text-3xl font-bold rounded-full hover:scale-125'><FaJs /></li>
    </ul>
  </div>
</div>

      </div>
      <div className='flex justify-center order-1'>
      <div className='mt-[8%]  '>
      <img src={pic} className=' h-[350px] w-[350px] rounded-full overflow-hidden '/>
      </div>
      </div>
    </div>
    <hr className='mt-7'/>
    </div>
    </>
  )
}

export default Home