// Testimonials.jsx
import React, { useState } from 'react';
import Title from './Title';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            role: "Art Collector",
            location: "New York",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            text: "The quality and authenticity of the artworks here are unparalleled. Each piece I've acquired has become a treasured part of my collection. The curation is simply exceptional."
        },
        {
            id: 2,
            name: "David Thompson",
            role: "Interior Designer",
            location: "London",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            text: "I constantly recommend this gallery to my clients. The selection is extraordinary, with pieces that transform spaces into genuine works of art. Truly world-class."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Private Collector",
            location: "Barcelona",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            text: "Museum-quality paintings with impeccable service. My home has become a private gallery, and I owe it all to the exceptional curation and expertise found here."
        },
        {
            id: 4,
            name: "Michael Chen",
            role: "Gallery Owner",
            location: "Singapore",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            text: "The contemporary collection is truly remarkable. Each artwork tells a story and brings a unique energy to any space. An invaluable resource for serious collectors."
        },
        {
            id: 5,
            name: "Isabella Laurent",
            role: "Art Consultant",
            location: "Paris",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
            text: "Discovering this gallery was transformative. The passion and knowledge behind every piece is evident. These aren't just paintings—they're investments in beauty."
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            <div className='py-6 sm:py-12 lg:py-20 bg-[#0a0a0a] relative overflow-hidden'>
                {/* Decorative Elements */}
                <div className='absolute top-1/2 left-0 w-64 h-64 bg-[#d4a574]/5 blur-[100px] rounded-full'></div>
                <div className='absolute top-1/2 right-0 w-64 h-64 bg-[#d4a574]/5 blur-[100px] rounded-full'></div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    {/* Section Header */}
                    <div className="mb-20 sm:mb-24">
                        <Title 
                            text1="CLIENT TESTIMONIALS" 
                            text2="What Collectors Say"
                            description="Voices from our community of art enthusiasts and collectors"
                        />
                    </div>

                    {/* Testimonial Carousel */}
                    <div className='max-w-5xl mx-auto'>
                        <div className='relative'>
                            {/* Quote Icon */}
                            <div className='flex justify-center mb-12'>
                                <div className='w-16 h-16 border border-white/10 flex items-center justify-center'>
                                    <Quote className='w-8 h-8 text-[#d4a574]' />
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className='text-center px-4 sm:px-12 lg:px-20 mb-16'>
                                <p className='text-xl sm:text-2xl lg:text-3xl font-serif font-light text-white leading-relaxed mb-12 italic'>
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author Info */}
                                <div className='flex flex-col items-center gap-6'>
                                    {/* Author Image */}
                                    <div className='w-20 h-20 rounded-full overflow-hidden border border-white/20'>
                                        <img 
                                            src={testimonials[currentIndex].image} 
                                            alt={testimonials[currentIndex].name}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    {/* Divider */}
                                    <div className='w-16 h-[1px] bg-[#d4a574]'></div>

                                    {/* Author Details */}
                                    <div>
                                        <h4 className='text-lg font-light text-white mb-1 tracking-wide'>
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className='text-xs text-[#d4a574] tracking-[0.3em] uppercase font-light mb-1'>
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <p className='text-xs text-white/40 tracking-wider font-light'>
                                            {testimonials[currentIndex].location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className='flex items-center justify-center gap-8'>
                                {/* Previous Button */}
                                <button 
                                    onClick={prevTestimonial}
                                    className='group w-12 h-12 border border-white/20 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300'
                                >
                                    <ChevronLeft className='w-5 h-5 text-white/60 group-hover:text-[#d4a574] transition-colors duration-300' />
                                </button>

                                {/* Dots Indicator */}
                                <div className='flex gap-3'>
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`transition-all duration-300 ${
                                                index === currentIndex 
                                                    ? 'w-12 h-[2px] bg-[#d4a574]' 
                                                    : 'w-2 h-[2px] bg-white/20 hover:bg-white/40'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Next Button */}
                                <button 
                                    onClick={nextTestimonial}
                                    className='group w-12 h-12 border border-white/20 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300'
                                >
                                    <ChevronRight className='w-5 h-5 text-white/60 group-hover:text-[#d4a574] transition-colors duration-300' />
                                </button>
                            </div>
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

export default Testimonials;