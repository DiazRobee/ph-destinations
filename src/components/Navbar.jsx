import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full fixed justify-between items-center h-20 px-4 z-10 text-gray-100 bg-teal-500'>
      <div>
        <Link to="home" smooth={true} duration={500} activeClass='active' spy='true'>
          <h1 className= 'cursor-pointer' >PH Tours</h1>
          </Link>
      </div>
      <ul className='hidden md:flex '>
        <li className= 'cursor-pointer'>
          <Link to="home" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                  Home
          </Link>
        </li >
        <li className= 'cursor-pointer'>
          <Link to="selects" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                  Destinations
            </Link>
        </li>
        <li className= 'cursor-pointer'>
          <Link to="book" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                Book
          </Link>
        </li>
      </ul>
      <div className='hidden md:flex px-4'>
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute md:hidden text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <h1>PH Tours</h1>
        <ul className='my-10'>
          <li className='border-b cursor-pointer'>
            <Link to="home" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                    Home
            </Link>
          </li>
          <li className='border-b cursor-pointer'>
          <Link to="selects" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                  Destinations
          </Link>
          </li>
          <li className='border-b cursor-pointer'>
          <Link to="book" smooth={true} duration={500} activeClass='active' spy='true' className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-400 before:scale-x-0 before:bg-[#164e63] before:absolute before:left-0 before:bottom-0 pb-1'>
                Book
          </Link>
          </li>
          <div className='flex flex-col max-w-[200px] mx-auto mt-20'>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6 mt-20'>
            <FaFacebook className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;