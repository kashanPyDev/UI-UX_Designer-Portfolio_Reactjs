import React from 'react'
import Project from '../assets/Group 24.png'

const Projects = () => {
    return (
        <>
            <div id='Projects' className='h-auto mt-12 mb-13'>
                <div className='m-auto max-w-1/2 mb-10 '>
                    <h1 className='text-4xl font-bold font-sans text-center py-3'>My Projects</h1>
                    <p className='text-center font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga repellendus nisium cupiditate asperiores itaque ab nesciunt, recusandae quod natus?</p>
                </div>
                <div className='flex justify-center my-6 space-x-4  sm:flex-wrap  sm:items-center'>
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer  bg-blue-100 border-[1px] border-slate-500 outline-0 rounded-lg '>ALL</button>
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer  bg-blue-100 border-[1px] border-slate-500 outline-0 rounded-lg'>UI/UX</button>
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer  bg-amber-500 text-white border outline-0 rounded-lg'>Web Designer</button>
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer  bg-blue-100 border-[1px] border-slate-500 outline-0 rounded-lg'>App Designer</button>
                    <button className='px-3 py-1 hover:scale-105 transition ease-in duration-300 cursor-pointer  bg-blue-100 border-[1px] border-slate-500 outline-0 rounded-lg'>Graphic Designer</button>
                </div>
                <div className='md:flex md:flex-row sm:m-auto sm:flex  justify-center space-x-4  sm:flex-col sm:items-center sm:space-y-5'>
                    <div className='rounded-lg p-3 hover:scale-120 transition ease-in duration-300 cursor-pointer py-5 bg-blue-100 shadow-xl'>
                        <img src={Project} width={300} alt="" />
                        <h3 className='text-red-500'>Web Design</h3>
                        <h2 className='font-bold'>Air Calling Landing Page</h2>
                    </div>
                    <div className='rounded-lg p-3 hover:scale-120 transition ease-in duration-300 cursor-pointer py-5 bg-blue-100 shadow-xl'>
                        <img src={Project} width={300} alt="" />
                        <h3 className='text-red-500'>Web Design</h3>
                        <h2 className='font-bold'>Business Landing Page Design</h2>
                    </div>
                    <div className='rounded-lg p-3 hover:scale-120 transition ease-in duration-300 cursor-pointer py-5  bg-blue-100 shadow-xl'>
                        <img src={Project} width={300} alt="" />
                        <h3 className='text-red-500'>Web Design</h3>
                        <h2 className='font-bold'>Ecommerce Webpage Page</h2>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Projects