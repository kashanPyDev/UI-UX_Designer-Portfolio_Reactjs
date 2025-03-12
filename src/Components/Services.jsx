import React from 'react'
import logo1 from '../assets/Vector (1).png'
import logo2 from '../assets/Vector.png'
import logo3 from '../assets/Layer_1.png'
import { Service } from '../Constants/Constants'
import { Service1 } from '../Constants/Constants'

const Services = () => {
    return (
        <>
            <div id='Service' className='h-auto  mt-8 mb-27 '>
                <div className='m-auto max-w-1/2 '>
                    <h1 className='text-4xl font-bold font-sans text-center py-3'>Services</h1>
                    <p className='text-center font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga repellendus nisium cupiditate asperiores itaque ab nesciunt, recusandae quod natus?</p>
                </div>
                <div className='md:flex md:flex-row  items-baseline justify-center mx-6  mt-10 sm:flex sm:flex-row  md:gap-10 '>
                        {Service.map((service, index) => (
                            <div key={index} className=' max-w-1/5  hover:scale-115 transition ease-in duration-300 cursor-pointer sm:my-6 rounded-lg p-3 py-7 bg-blue-100 shadow-xl sm:m-auto  basis-64'>
                                <img className='py-2' src={logo2} height={40} width={40} alt="" />
                                <h1 className='text-xl font-bold font-sans '>{service.title}</h1>
                                <p className=' text-slate-800 font-normal; sm:text-sm'>{service.description}</p>
                            </div>
                        ))}

                        {Service1.map((service1, index) => (
                            <div key={index} className='max-w-1/5 hover:scale-115 transition ease-in duration-300 cursor-pointer sm:my-6 rounded-lg p-3 py-7 bg-blue-100 shadow-xl sm:m-auto basis-64'>
                                <img className='py-2' src={logo3} height={40} width={40} alt="" />
                                <h1 className='text-xl font-bold font-sans '>{service1.title}</h1>
                                <p className=' text-slate-800 font-normal; sm:text-sm'>{service1.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Services