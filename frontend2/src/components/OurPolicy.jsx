// OurPolicy.jsx
import React from 'react';
import { RefreshCw, Award, HeadphonesIcon } from 'lucide-react';
import Title from './Title';

const OurPolicy = () => {
    return (
        <>
            <div className='bg-[#1a1a1a] py-6 sm:py-12 lg:py-20 relative overflow-hidden'>
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4a574]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4a574]/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="mb-20 sm:mb-24">
                        <Title
                            text1="OUR"
                            text2="Commitment"
                            description="We are dedicated to providing an exceptional art buying experience with our premium guarantees"
                            theme="dark"
                        />
                    </div>

                    {/* Policies Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto'>
                        {/* Exchange Policy */}
                        <div className='group text-center p-10 lg:p-12 bg-[#0a0a0a] border border-white/5 hover:border-[#d4a574]/30 transition-all duration-500'>
                            <div className='relative mb-8'>
                                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mx-auto group-hover:border-[#d4a574] transition-all duration-500">
                                    <RefreshCw className='w-9 h-9 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
                                </div>
                            </div>
                            
                            {/* Divider */}
                            <div className='w-12 h-[1px] bg-white/10 mx-auto mb-6'></div>
                            
                            <h3 className='text-xl font-serif font-light text-white mb-4 tracking-wide'>
                                Easy Exchange
                            </h3>
                            <p className='text-sm text-white/40 leading-relaxed font-light'>
                                Hassle-free exchange on all artworks. Your satisfaction is our priority.
                            </p>
                        </div>

                        {/* Return Policy */}
                        <div className='group text-center p-10 lg:p-12 bg-[#0a0a0a] border border-white/5 hover:border-[#d4a574]/30 transition-all duration-500'>
                            <div className='relative mb-8'>
                                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mx-auto group-hover:border-[#d4a574] transition-all duration-500">
                                    <Award className='w-9 h-9 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
                                </div>
                            </div>
                            
                            {/* Divider */}
                            <div className='w-12 h-[1px] bg-white/10 mx-auto mb-6'></div>
                            
                            <h3 className='text-xl font-serif font-light text-white mb-4 tracking-wide'>
                                30 Days Return
                            </h3>
                            <p className='text-sm text-white/40 leading-relaxed font-light'>
                                Full refund within 30 days on all purchases. Risk-free shopping guaranteed.
                            </p>
                        </div>

                        {/* Customer Support */}
                        <div className='group text-center p-10 lg:p-12 bg-[#0a0a0a] border border-white/5 hover:border-[#d4a574]/30 transition-all duration-500'>
                            <div className='relative mb-8'>
                                <div className="w-20 h-20 border border-white/10 flex items-center justify-center mx-auto group-hover:border-[#d4a574] transition-all duration-500">
                                    <HeadphonesIcon className='w-9 h-9 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
                                </div>
                            </div>
                            
                            {/* Divider */}
                            <div className='w-12 h-[1px] bg-white/10 mx-auto mb-6'></div>
                            
                            <h3 className='text-xl font-serif font-light text-white mb-4 tracking-wide'>
                                Expert Support
                            </h3>
                            <p className='text-sm text-white/40 leading-relaxed font-light'>
                                Our art consultants are available round the clock to assist you anytime.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div className='flex items-center justify-center gap-4 mt-24'>
                        <div className='w-24 h-[1px] bg-gradient-to-r from-transparent to-white/10'></div>
                        <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                        <div className='w-24 h-[1px] bg-gradient-to-l from-transparent to-white/10'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPolicy;