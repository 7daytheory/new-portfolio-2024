import logo from '../../assets/logo-white.png';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-[#333] border-b border-white'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a
            href="/" 
            className='flex flex-shrink-0 items-center mr-4'>
            <img className='h-10 w-auto' src={logo} alt='Matthew Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Matthew Lowe Portfolio
              </span>
            </a>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <a
                to="/" 
                className='bg-[#E31837] hover:bg-[#333] text-white hover:text-white rounded-md px-3 py-2'>
                  Home
                </a>
                <a
                to="#" 
                className='bg-[#E31837] hover:bg-[#333] text-white hover:text-white rounded-md px-3 py-2'>
                  About
                </a>
                <a
                to="#" 
                className='bg-[#E31837] hover:bg-[#333] text-white hover:text-white rounded-md px-3 py-2'>
                  Experience
                </a>
                <a
                to="#" 
                className='bg-[#E31837] hover:bg-[#333] text-white hover:text-white rounded-md px-3 py-2'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;