import React from 'react'
import logo1 from '../assets/logo (2).png'
import logos from '../assets/Group 38.png'


const Footer = () => {
    return (
        <>
            <div id='Footer'>
                <div className='max-w-1/2 m-auto text-center py-6'>
                    <h1 className='text-5xl  font-semibold '>Lets Design Togather</h1>
                    <p className='text-slate-600  my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.dunt earum perferendis deleniti quidem sapiente neque fac Eaque ut moatque animiesse?</p>
                </div>
                <div className='max-w-1/2 m-auto  py-6 flex justify-center space-x-5'>
                    <input placeholder='Enter Your Email ' type='email' className='py-2 px-4 w-[60%]  border border-neutral-400 shadow-2xl lg rounded-lg'  />
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer text-white  font-bold bg-amber-600 rounded-lg'>Contact Me</button>
                </div>
                <div >
                    <img className='m-auto' src={logo1} alt="" />
                </div>
                <div className='flex space-x-6 justify-center my-7'>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>Home</button>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>About Me</button>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>Services</button>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>Projects</button>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>Testimonials</button>
                    <button className='text-slate-800 hover:scale-105 transition ease-in duration-300 cursor-pointer  '>Contact</button>
                </div>
                <div className='my-5'>
                    <img className='m-auto hover:scale-105 transition ease-in duration-300 cursor-pointer' src={logos} alt="" />
                </div>
                <div className='w-full py-5 bg-slate-500 text-center text-white font-semibold'>
                    <p>© 2023 <span className='text-amber-500'>FawziUiUx</span> All Rights Reserved , Inc.</p>
                </div>
            </div>
        </>
    )
}

export default Footer