import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/Logo (2).png'
import { navItems } from '../Constants/Constants'
import '../CSS/style.css'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-100  sticky top-0 ">
      <div className="container  mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className='hover:scale-125 transition ease-in duration-300 cursor-pointer' src={logo} width={140} height={100} alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className=' flex space-x-1  sm:hidden md:flex text-sm from-neutral-900 ' >
          {navItems.map((item, index) => (
            <li key={index}>
              <a className='px-4 py-2  hover:bg-blue-300 hover:text-slate-900 hover:rounded-sm' href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button onClick="Download" className='lg:py-2 lg:px-4 hover:scale-105 transition ease-in duration-300 cursor-pointer bg-amber-500 hover:bg-amber-600 outline-0 text-white font-bold rounded-sm  sm:px-3 sm:py-1 sm:hidden md:block'>Download CV</button>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden sm:flex sm:justify-end">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <div>


      </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-200 text-center absolute top-16 left-0 w-full py-4 space-y-4">
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>Services</a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>Projects</a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>Testimonials</a>
          </li>
          <li>
            <a href="#" className="block hover:bg-blue-500 py-2" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
      
    </nav>
  );
};

export default Navbar;
