// Login.jsx (User Login/Signup Page)
import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Mail, Lock, User, Palette, LogIn, UserPlus } from 'lucide-react';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                // if current state will be sign up then will call signup api
                const response = await axios.post(`${backendUrl}/api/user/register`, {name, email, password});
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success('Account created successfully!');
                } else {
                    toast.error(response.data.message);
                }
            } else {
                // if current state will be login then will call login api
                const response = await axios.post(`${backendUrl}/api/user/login`, {email, password});
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])

  return (
    <>
      {/* Hero Section */}
      <div className='relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0'>
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&h=800&fit=crop" 
            alt="Gallery" 
            className='w-full h-full object-cover opacity-20'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#c9a068] rounded-sm mb-6 shadow-lg'>
              <Palette className='w-10 h-10 text-black' />
            </div>
            
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-wide mb-4'>
              ARTISAN GALLERY
            </h1>
            <p className='text-sm text-white/60 font-light tracking-[0.2em] uppercase'>
              {currentState === 'Login' ? 'Welcome Back' : 'Join Our Community'}
            </p>
          </div>
        </div>
      </div>

      {/* Login/Signup Form Section */}
      <div className='py-16 sm:py-24 bg-[#f5f1e8]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md mx-auto'>
            {/* Form Card */}
            <div className='bg-white border border-black/10 p-8 lg:p-10'>
              {/* Decorative Line */}
              <div className='flex items-center justify-center gap-4 mb-8'>
                <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
              </div>

              {/* Form Title */}
              <h2 className='text-2xl font-serif font-light text-black text-center mb-8 tracking-wide'>
                {currentState === 'Login' ? 'Sign In' : 'Create Account'}
              </h2>

              {/* Form */}
              <form onSubmit={onSubmitHandler} className='space-y-6'>
                {/* Name Field (Sign Up only) */}
                {currentState === 'Sign Up' && (
                  <div>
                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                      Full Name
                    </label>
                    <div className='relative'>
                      <User className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                      <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                        placeholder='John Doe'
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                    Email Address
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                      placeholder='john@example.com'
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                    Password
                  </label>
                  <div className='relative'>
                    <Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                    <input 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                      placeholder='Enter your password'
                      required
                    />
                  </div>
                </div>

                {/* Links */}
                <div className='flex items-center justify-between text-sm'>
                  {currentState === 'Login' && (
                    <a href="#" className='text-black/60 hover:text-[#d4a574] font-light transition-colors duration-300'>
                      Forgot password?
                    </a>
                  )}
                  <button
                    type='button'
                    onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                    className='text-black/60 hover:text-[#d4a574] font-light transition-colors duration-300 ml-auto'
                  >
                    {currentState === 'Login' ? 'Create account' : 'Already have an account?'}
                  </button>
                </div>

                {/* Submit Button */}
                <button 
                  type='submit'
                  className='group w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3'
                >
                  <span>{currentState === 'Login' ? 'SIGN IN' : 'CREATE ACCOUNT'}</span>
                  {currentState === 'Login' ? (
                    <LogIn className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                  ) : (
                    <UserPlus className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                  )}
                </button>
              </form>

              {/* Bottom Decorative Line */}
              <div className='flex items-center justify-center gap-4 mt-8'>
                <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
              </div>
            </div>

            {/* Privacy Text */}
            <p className='text-center text-xs text-black/40 font-light mt-6 leading-relaxed'>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;