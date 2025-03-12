import React from 'react'

const Card = () => {
  return (
    <>
      <div className='relative w-screen h-screen text-white '>
        <img className='absolute z-[-1] max-w-[100%] bg-left' src="https://techakim.com/sam/tg/7268/li/imgs/bg-portfolio.jpg" alt="" />
        <div className='absolute top-1/3  px-10 ml-20 max-w-[50%]'>
          <div>
            <h1 className='text-7xl font-serif py-3'>Hi there,  I am  <span className=' text-blue-500'>
              Samuel Abera!</span> </h1>
            <p className='text-2xl py-3'>I am Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience</p>
          </div>
          <div className='flex space-x-10 my-3'>
            <button className='px-5 py-3 bg-gradient-to-r from-blue-400 to-blue-800  outline-0 text-white text-lg rounded-lg font-semibold'>Click For Hire Me </button>
            <button className='px-5 py-3  border bg-black hover:bg-slate-900  text-white text-lg rounded-lg font-semibold'>About me</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card