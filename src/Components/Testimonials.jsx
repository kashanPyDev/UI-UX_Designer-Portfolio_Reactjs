import React from 'react'
import Elipse from '../assets/Ellipse 10 (1).png'
import img from '../assets/Group 35.png'

const Testimonials = () => {
    return (
        <>
            <div id='Testimonials' className='h-auto  sm:flex-col sm:items-center'>
                <div className='max-w-1/2 m-auto text-center py-6'>
                    <h1 className='text-5xl  font-semibold '>Testimonials</h1>
                    <p className='text-slate-600  my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.dunt earum perferendis deleniti quidem sapiente neque fac Eaque ut modi quas, officia, minus libero quidem, suscipit vel atque animiesse?</p>
                </div>
                <div className='md:flex md:flex-row justify-evenly items-center p-15 sm:flex flex-col gap-y-5 space-x-15 sm:pt-1  sm:pb-10 '>
                    <div>
                        <img className='hover:scale-105 transition ease-in duration-300 cursor-pointer' src={Elipse} alt="i am image" />
                    </div>
                    <div className='max-w-1/2  text-slate-700 rounded-lg shadow-lg p-5'>
                        <p className='font-semibold py-1'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis cupiditate libero incidunt earum perferendis deleniti quidem sapiente neque facilis fuga explicabo maxime eius repellat porro, pariatur ea! Obcaecati, numquam."</p>
                        <h2 className='font-bold '>Name</h2>
                        <h4 className='font-semibold'>CEO</h4>
                    </div>
                </div>
                <div >
                    <img className='m-auto' src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Testimonials