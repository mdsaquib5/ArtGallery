// Login.jsx (Admin)
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Mail, Lock, Palette, LogIn } from 'lucide-react';

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:4000/api/user/admin', {
                email,
                password
            });
            if (response.data.success) {
                setToken(response.data.token);
                toast.success('Login successful');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

  return (
    <>
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f1e8] to-[#ede8df] p-4'>
            <div className='w-full max-w-md'>
                {/* Logo & Header */}
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#c9a068] rounded-sm mb-6 shadow-lg'>
                        <Palette className='w-10 h-10 text-black' />
                    </div>
                    
                    <h1 className='text-3xl lg:text-4xl font-serif font-light text-black tracking-wide mb-2'>
                        ARTISAN GALLERY
                    </h1>
                    <p className='text-sm text-black/40 font-light tracking-[0.2em] uppercase'>
                        Admin Portal
                    </p>
                </div>

                {/* Login Card */}
                <div className='bg-white border border-black/10 p-8 shadow-xl'>
                    {/* Decorative Line */}
                    <div className='flex items-center justify-center gap-4 mb-8'>
                        <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                        <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                        <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                    </div>

                    <h2 className='text-xl font-serif font-light text-black text-center mb-6 tracking-wide'>
                        Welcome Back
                    </h2>

                    <form onSubmit={onSubmitHandler} className='space-y-6'>
                        {/* Email Input */}
                        <div>
                            <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                                <input 
                                    className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300' 
                                    type="email" 
                                    placeholder='admin@artisangallery.com' 
                                    required 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email} 
                                    autoComplete='email' 
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                Password
                            </label>
                            <div className='relative'>
                                <Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                                <input 
                                    className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300' 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    required 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    value={password} 
                                    autoComplete='current-password' 
                                />
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className='flex items-center justify-between text-sm'>
                            <label className='flex items-center gap-2 cursor-pointer'>
                                <input 
                                    type="checkbox" 
                                    className='w-4 h-4 bg-gray-50 border border-black/20 checked:bg-[#d4a574] checked:border-[#d4a574] cursor-pointer'
                                />
                                <span className='text-black/60 font-light'>Remember me</span>
                            </label>
                            <a href="#" className='text-black/60 hover:text-[#d4a574] font-light transition-colors duration-300'>
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button 
                            className='group w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3' 
                            type='submit'
                        >
                            <span>LOGIN</span>
                            <LogIn className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                        </button>
                    </form>

                    {/* Bottom Decorative Line */}
                    <div className='flex items-center justify-center gap-4 mt-8'>
                        <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                        <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                        <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                    </div>
                </div>

                {/* Footer */}
                <p className='text-center text-xs text-black/30 font-light mt-6 tracking-wider'>
                    © 2024 ARTISAN GALLERY. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    </>
  )
}

export default Login;