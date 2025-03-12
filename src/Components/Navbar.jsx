import React, { useState } from 'react'
import logo from '../assets/Logo (2).png'
import { navItems } from '../Constants/Constants'
import '../CSS/style.css'
import { Menu, X } from "lucide-react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex  justify-evenly items-center  mx-2 my-1   fixed top-0 w-full  rounded-lg z-10 sm:top-0 sm:absolute bg-blue-50'>
                <div>
                    <img className='hover:scale-125 transition ease-in duration-300 cursor-pointer' src={logo} width={140} height={100} alt="" />
                </div>
                <div >
                    <ul className={` flex space-x-1   text-sm from-neutral-900 Hidden show md:hidden ${open ? 'Hidden' : 'show'} `}>
                        {navItems.map((item, index) => (
                            <li key={index}><a className='px-4 py-2  hover:bg-blue-300 hover:text-slate-900 hover:rounded
                            -sm' href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
                <button
                    className="text-black md:hidden flex "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <div>
                    <button className='lg:py-2 lg:px-4 hover:scale-105 transition ease-in duration-300 cursor-pointer bg-amber-500 hover:bg-amber-600 outline-0 text-white font-bold rounded-sm  sm:px-3 sm:py-1'>Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Navbar