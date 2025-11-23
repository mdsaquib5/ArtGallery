// Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="bg-[#0a0a0a] text-white/60 border-t border-white/5">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Company Info - Takes 4 columns */}
                    <div className="lg:col-span-4">
                        {/* Logo */}
                        <Link to={'/'} className='block mb-8'>
                            <h3 className='text-2xl lg:text-3xl font-serif font-light text-white tracking-wider'>
                                ARTISAN
                                <span className='block text-xs lg:text-sm text-[#d4a574] tracking-[0.3em] mt-2'>GALLERY</span>
                            </h3>
                        </Link>
                        
                        <p className='text-sm text-white/40 leading-relaxed mb-8 font-light max-w-sm'>
                            Discover and collect extraordinary artwork from talented artists worldwide. Each piece tells a unique story.
                        </p>

                        {/* Social Media */}
                        <div className='flex items-center gap-4'>
                            <a 
                                href="#" 
                                className='w-10 h-10 border border-white/10 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300 group'
                            >
                                <Facebook className='w-4 h-4 text-white/40 group-hover:text-[#d4a574] transition-colors duration-300' />
                            </a>
                            <a 
                                href="#" 
                                className='w-10 h-10 border border-white/10 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300 group'
                            >
                                <Instagram className='w-4 h-4 text-white/40 group-hover:text-[#d4a574] transition-colors duration-300' />
                            </a>
                            <a 
                                href="#" 
                                className='w-10 h-10 border border-white/10 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300 group'
                            >
                                <Twitter className='w-4 h-4 text-white/40 group-hover:text-[#d4a574] transition-colors duration-300' />
                            </a>
                            <a 
                                href="#" 
                                className='w-10 h-10 border border-white/10 hover:border-[#d4a574] flex items-center justify-center transition-all duration-300 group'
                            >
                                <Linkedin className='w-4 h-4 text-white/40 group-hover:text-[#d4a574] transition-colors duration-300' />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Takes 2 columns */}
                    <div className='lg:col-span-2'>
                        <h4 className='text-sm font-light text-white mb-8 tracking-[0.2em] uppercase'>
                            Gallery
                        </h4>
                        <ul className='space-y-4'>
                            <li>
                                <Link to="/" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/collection" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Collections</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/artists" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Artists</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service - Takes 3 columns */}
                    <div className='lg:col-span-3'>
                        <h4 className='text-sm font-light text-white mb-8 tracking-[0.2em] uppercase'>
                            Support
                        </h4>
                        <ul className='space-y-4'>
                            <li>
                                <Link to="/shipping" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Shipping Info</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/returns" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Returns</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>Terms</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className='text-sm text-white/40 hover:text-[#d4a574] transition-colors duration-300 font-light flex items-center gap-2 group'>
                                    <span className='w-0 h-[1px] bg-[#d4a574] group-hover:w-4 transition-all duration-300'></span>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info - Takes 3 columns */}
                    <div className='lg:col-span-3'>
                        <h4 className='text-sm font-light text-white mb-8 tracking-[0.2em] uppercase'>
                            Contact
                        </h4>
                        <ul className='space-y-6'>
                            <li className='flex items-start gap-4 text-sm text-white/40 font-light group'>
                                <div className='mt-0.5 p-2 border border-white/10 group-hover:border-[#d4a574] transition-all duration-300'>
                                    <MapPin className='w-4 h-4' />
                                </div>
                                <div>
                                    <p className='leading-relaxed'>
                                        123 Art Street, Gallery District<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-4 text-sm text-white/40 font-light group'>
                                <div className='mt-0.5 p-2 border border-white/10 group-hover:border-[#d4a574] transition-all duration-300'>
                                    <Phone className='w-4 h-4' />
                                </div>
                                <div>
                                    <a href="tel:+1234567890" className='hover:text-[#d4a574] transition-colors'>
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </li>
                            <li className='flex items-start gap-4 text-sm text-white/40 font-light group'>
                                <div className='mt-0.5 p-2 border border-white/10 group-hover:border-[#d4a574] transition-all duration-300'>
                                    <Mail className='w-4 h-4' />
                                </div>
                                <div>
                                    <a href="mailto:info@artisangallery.com" className='hover:text-[#d4a574] transition-colors'>
                                        info@artisangallery.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className='text-xs text-white/30 font-light tracking-wider'>
                            © 2024 ARTISAN GALLERY. ALL RIGHTS RESERVED.
                        </p>

                        {/* Payment Methods */}
                        <div className='flex items-center gap-6 text-xs text-white/20 font-light tracking-wider'>
                            <span>VISA</span>
                            <span className='text-white/10'>|</span>
                            <span>MASTERCARD</span>
                            <span className='text-white/10'>|</span>
                            <span>AMEX</span>
                            <span className='text-white/10'>|</span>
                            <span>PAYPAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;