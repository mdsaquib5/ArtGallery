// NewsLetter.jsx
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
    }

  return (
    <>
        <div className='py-6 sm:py-12 lg:py-20 bg-[#f5f1e8] relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-[120px]"></div>
            
            {/* Decorative Lines */}
            <div className='absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent'></div>
            <div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent'></div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    {/* Decorative Line Top */}
                    <div className='flex items-center justify-center gap-4 mb-12'>
                        <div className='w-16 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                        <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                        <div className='w-16 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                    </div>

                    {/* Small Label */}
                    <p className='text-xs tracking-[0.3em] text-[#d4a574] font-light uppercase mb-6'>
                        STAY CONNECTED
                    </p>

                    {/* Heading */}
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-black mb-6 tracking-wide'>
                        Join Our Community
                    </h2>

                    {/* Divider */}
                    <div className='w-16 h-[1px] bg-[#d4a574] mx-auto mb-8'></div>

                    {/* Subheading */}
                    <p className='text-base sm:text-lg text-black/60 mb-12 leading-relaxed font-light max-w-2xl mx-auto'>
                        Subscribe to receive exclusive updates on new collections, artist features, and special exhibitions delivered to your inbox.
                    </p>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className='max-w-2xl mx-auto mb-12'>
                        <div className='flex flex-col sm:flex-row items-stretch gap-0 bg-white border border-black/10'>
                            {/* Email Input */}
                            <div className='flex-1 flex items-center gap-4 px-6 py-5 sm:py-0'>
                                <Mail className='w-5 h-5 text-black/30' />
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder='Enter your email address' 
                                    className='w-full outline-none text-black placeholder:text-black/30 bg-transparent font-light' 
                                    required 
                                />
                            </div>
                            
                            {/* Subscribe Button - DARK for LIGHT background */}
                            <button 
                                type='submit' 
                                className='group bg-black hover:bg-[#1a1a1a] text-white font-light px-10 py-5 transition-all duration-300 flex items-center justify-center gap-3 tracking-[0.2em] text-sm'
                            >
                                <span>SUBSCRIBE</span>
                                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                            </button>
                        </div>
                    </form>

                    {/* Trust Text */}
                    <div className='flex flex-wrap items-center justify-center gap-6 text-xs text-black/40 font-light'>
                        <div className='flex items-center gap-2'>
                            <div className='w-1 h-1 bg-[#d4a574]'></div>
                            <span>No spam, ever</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-1 h-1 bg-[#d4a574]'></div>
                            <span>Unsubscribe anytime</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-1 h-1 bg-[#d4a574]'></div>
                            <span>15,000+ subscribers</span>
                        </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className='flex items-center justify-center gap-4 mt-16'>
                        <div className='w-16 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                        <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                        <div className='w-16 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter;