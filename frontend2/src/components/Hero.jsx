import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
        <div className='relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0'>
                <img 
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&h=1080&fit=crop" 
                    alt="Featured Artwork" 
                    className='w-full h-full object-cover opacity-40'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='max-w-3xl py-32 lg:py-40'>
                    {/* Small Label */}
                    <div className='mb-8'>
                        <span className='inline-block text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                            Featured Collection
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className='font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-[1.1] mb-8'>
                        Timeless
                        <span className='block mt-2'>Artistry</span>
                    </h1>

                    {/* Description */}
                    <p className='text-lg sm:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-xl'>
                        Discover exceptional contemporary and classical paintings from renowned artists worldwide.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Link to='/collection' className="group relative px-10 py-4 bg-transparent border border-[#d4a574] text-white font-light text-sm tracking-wider overflow-hidden transition-all duration-500 hover:border-white">
                            <span className="relative z-10 flex items-center gap-3">
                                EXPLORE GALLERY
                                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                            </span>
                            <div className="absolute inset-0 bg-[#d4a574] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className='absolute top-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block'></div>
            <div className='absolute bottom-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block'></div>
        </div>
    </>
  )
}

export default Hero;