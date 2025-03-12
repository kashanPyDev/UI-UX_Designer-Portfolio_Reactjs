import React from 'react'
// import userimg from './assets/Group 2.png'
import Group from '../assets/Group.png'

const HeroSection = () => {
  return (
    <div className='md:flex md:flex-row  gap-10 p-4 h-auto items-center justify-center  sm:flex-cols md:my-5 sm:items-center sm:m-auto '>
       
       <div className='p-5 max-w-[50%]  shadow-sm rounded-lg  sm:flex sm:flex-col sm:m-auto'>
        <p  className='font-bold font-sans'>Hi I am <br /> <span className='text-amber-600 text-lg'>Fawzi Sayed</span> </p>
        <h1 className='text-7xl font-bold text-slate-950 py-3 xl:whitespace-break-spaces'>UI & UX <br />         Designer </h1>
        <p className='p-2 font-stretch-75%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,  eos soluta, porro est veritatis obcaecat recusandae velit deleniti autem Quidem,  eos soluta, porro est veritatis obcaecat recusandae velit deleniti autem?</p>
        <button className='block my-1 py-2 px-5 hover:scale-105 transition ease-in duration-300 cursor-pointer bg-amber-500 hover:bg-amber-600 outline-0 text-white font-bold rounded-sm'>Hire Me</button>
       </div>

       <div>
        <img className='sm:m-auto' src={Group} alt='helo ' width="400" />
       </div>
    </div>
  )
}

export default HeroSection