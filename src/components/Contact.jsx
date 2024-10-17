import React from 'react' 

const Contact = () => {
  return (
    <>
    <div name = "Contact"
      className='max-w-screen-2xl container mx-auto px-4 md:px-10 my-5'>
      <h1 className='text-3xl font-bold'>Contact me</h1>
      <p className='font-medium'>please fill out the form below to contact me</p>
      <div className='flex justify-center items-center mt-3 ro'>
      <div className='md:w-72 w-full p-5 bg-violet-700 rounded-lg shadow-md space-y-2'>
       <h1 className='text-xl font-bold'>send your message</h1>
       <div>
        <label className='block font-semibold'>full Name</label>
        <input className='rounded-md px-2 py-1 outline-none border-[3px] w-full' type="text" placeholder='Enter your name' />
       </div>
       <div>
        <label className='block font-semibold'>Email Address</label>
        <input className='rounded-md px-2 py-1 outline-none border-[3px] w-full' type="text" placeholder='Email address' />
       </div>

       <div>
        <label className='block font-semibold'>Message</label>
        <textarea className='rounded-md outline-none border-[3px] py-2 px-2 w-full' type="text" placeholder='type your mesage here' />
       </div>
       <button className='bg-black text-white py-1 px-2 rounded-lg font-medium hover:bg-blue-600'>Send</button>
       </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Contact