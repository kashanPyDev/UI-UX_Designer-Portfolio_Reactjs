import React from 'react'
import happy from '../assets/happy.png'
import progres from '../assets/progres.png.png'


const About = () => {
    return (
        <div id='About-me' className='md:flex md:flex-row gap-10 p-4 h-auto items-center justify-evenly   sm flex sm:flex-col-reverse sm:m-auto'>
            <div>
                <img className='hover:scale-105 transition ease-in duration-300 cursor-pointer sm:m-auto' src={happy} alt='helo ' width="400" />
            </div>

            <div className='p-5 max-w-[50%]  shadow-sm rounded-lg sm:m-auto'>
                <h1 className='text-4xl font-semibold font-sans'>About Me</h1>
                <p className='   py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae vero minima harum deserunt sint dolorem fugit voluptates praesentium omnis, itaque dolor obcaecati, quibusdam odit ducimus, eligendi doloremque earum ipsa? </p>
                <h2 className='font-bold'>UX</h2>
                <img src={progres} height={2} alt="" />
                <h2 className='font-bold'>Web Design</h2>
                <img src={progres} height={2} alt="" />
                <h2 className='font-bold'>App Design</h2>
                <img src={progres} height={2} alt="" />
                <h2 className='font-bold'>Graphic Design</h2>
                <img src={progres} height={2} alt="" />

            </div>

        </div>
    )
}

export default About