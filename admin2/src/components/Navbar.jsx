// Navbar.jsx (Admin)
import React from 'react';
import { LogOut, Palette } from 'lucide-react';

const Navbar = ({ setToken }) => {

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5'>
      <div className='flex items-center justify-between px-6 lg:px-8 h-20'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-gradient-to-br from-[#d4a574] to-[#c9a068] rounded-sm'>
            <Palette className='w-6 h-6 text-black' />
          </div>
          <div>
            <h1 className='text-xl font-serif font-light text-white tracking-wider'>
              ARTISAN
            </h1>
            <p className='text-[10px] text-[#d4a574] tracking-[0.3em] uppercase'>
              Admin Panel
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-6'>
          {/* Admin Info */}
          <div className='hidden md:block text-right'>
            <p className='text-sm font-light text-white'>Administrator</p>
            <p className='text-xs text-white/40 font-light'>admin@artisangallery.com</p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem('token');
              setToken('');
            }}
            className='group px-6 py-3 bg-transparent cursor-pointer border border-white/20 hover:border-[#d4a574] text-white font-light text-sm tracking-wider transition-all duration-300 flex items-center gap-2'
          >
            <LogOut className='w-4 h-4 group-hover:text-[#d4a574] transition-colors duration-300' />
            <span className='hidden sm:inline'>LOGOUT</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;