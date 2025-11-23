// Contact.jsx
import React, { useState } from 'react';
import Title from '../components/Title';
import NewsLetter from '../components/NewsLetter';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {/* Hero Section */}
            <div className='relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden'>
                <div className='absolute inset-0'>
                    <img
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=800&fit=crop"
                        alt="Contact"
                        className='w-full h-full object-cover opacity-20'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='max-w-3xl'>
                        <div className='mb-8'>
                            <span className='inline-block text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                                Get In Touch
                            </span>
                        </div>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6'>
                            Let's Start a
                            <span className='block mt-2 text-[#d4a574]'>Conversation</span>
                        </h1>
                        <p className='text-lg text-white/60 font-light leading-relaxed max-w-2xl'>
                            Whether you're seeking the perfect artwork or have questions about our collection, our team is here to assist you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information & Form Section */}
            <div className='py-6 sm:py-12 lg:py-20 bg-[#f5f1e8]'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
                        {/* Left: Contact Information */}
                        <div className='space-y-12'>
                            <div>
                                <div className='flex items-center gap-4 mb-8'>
                                    <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                                </div>
                                <h2 className='text-3xl sm:text-4xl font-serif font-light text-black mb-6'>
                                    Visit Our Gallery
                                </h2>
                                <p className='text-base text-black/70 font-light leading-relaxed'>
                                    Experience our curated collection in person. Our gallery consultants are available to guide you through each piece and help you find the perfect artwork for your space.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className='space-y-6'>
                                {/* Address */}
                                <div className='flex gap-4 group'>
                                    <div className='w-12 h-12 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#d4a574] transition-all duration-300'>
                                        <MapPin className='w-5 h-5 text-[#d4a574]' />
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-light text-black/40 tracking-wide uppercase mb-2'>Gallery Location</h3>
                                        <p className='text-base text-black font-light leading-relaxed'>
                                            123 Art Street, Gallery District<br />
                                            New York, NY 10001, USA
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex gap-4 group'>
                                    <div className='w-12 h-12 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#d4a574] transition-all duration-300'>
                                        <Phone className='w-5 h-5 text-[#d4a574]' />
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-light text-black/40 tracking-wide uppercase mb-2'>Phone</h3>
                                        <p className='text-base text-black font-light'>
                                            +1 (234) 567-890
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex gap-4 group'>
                                    <div className='w-12 h-12 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#d4a574] transition-all duration-300'>
                                        <Mail className='w-5 h-5 text-[#d4a574]' />
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-light text-black/40 tracking-wide uppercase mb-2'>Email</h3>
                                        <p className='text-base text-black font-light'>
                                            info@artisangallery.com
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className='flex gap-4 group'>
                                    <div className='w-12 h-12 border border-black/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#d4a574] transition-all duration-300'>
                                        <Clock className='w-5 h-5 text-[#d4a574]' />
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-light text-black/40 tracking-wide uppercase mb-2'>Gallery Hours</h3>
                                        <p className='text-base text-black font-light leading-relaxed'>
                                            Tuesday - Saturday: 10:00 AM - 6:00 PM<br />
                                            Sunday: 12:00 PM - 5:00 PM<br />
                                            Monday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Careers Section */}
                            <div className='pt-8 border-t border-black/10'>
                                <h3 className='text-xl font-serif font-light text-black mb-4'>
                                    Join Our Team
                                </h3>
                                <p className='text-base text-black/70 font-light leading-relaxed mb-6'>
                                    Passionate about art? Explore career opportunities at Artisan Gallery and become part of our dedicated team.
                                </p>
                                <button className='px-8 py-3 border border-black/20 hover:border-[#d4a574] text-black hover:text-[#d4a574] font-light text-sm tracking-wider transition-all duration-300'>
                                    VIEW OPENINGS
                                </button>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className='bg-gray-50 border border-black/10 p-8 lg:p-10'>
                            <h3 className='text-2xl font-serif font-light text-black mb-6'>
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {/* Name */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='John Doe'
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='john@example.com'
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='Artwork Inquiry'
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className='w-full px-4 py-3 bg-white border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300 resize-none'
                                        placeholder='Tell us about your interest...'
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    className='w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3'
                                >
                                    <span>SEND MESSAGE</span>
                                    <Send className='w-4 h-4' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;