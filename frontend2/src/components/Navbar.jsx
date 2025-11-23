import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { 
    Search, 
    User, 
    ShoppingCart, 
    Menu, 
    X
} from 'lucide-react';

const Navbar = () => {
    const [visible, setVisible] =  useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {setShowSearch, getCartCount, setToken, setCartItems, navigate, token} = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
        toast.success("User Logout successfully");
    }

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log("token is", token);
  return (
    <>
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
        }`}>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20 lg:h-24'>
                    {/* Logo Section */}
                    <Link to={'/'} className='group'>
                        <h1 className='text-2xl lg:text-3xl font-serif font-light text-white tracking-wider'>
                            ARTISAN
                            <span className='block text-xs lg:text-sm text-[#d4a574] tracking-[0.3em] mt-1'>GALLERY</span>
                        </h1>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <ul className='hidden lg:flex items-center gap-12 text-sm tracking-wider'>
                        <NavLink 
                            to={'/'} 
                            className={({isActive}) => `
                                relative text-white/80 hover:text-white transition-colors duration-300 font-light
                                ${isActive ? 'text-white' : ''}
                            `}
                        >
                            {({isActive}) => (
                                <>
                                    HOME
                                    {isActive && (
                                        <span className='absolute -bottom-2 left-0 right-0 h-[1px] bg-[#d4a574]'></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink 
                            to={'/collection'} 
                            className={({isActive}) => `
                                relative text-white/80 hover:text-white transition-colors duration-300 font-light
                                ${isActive ? 'text-white' : ''}
                            `}
                        >
                            {({isActive}) => (
                                <>
                                    GALLERY
                                    {isActive && (
                                        <span className='absolute -bottom-2 left-0 right-0 h-[1px] bg-[#d4a574]'></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink 
                            to={'/about'} 
                            className={({isActive}) => `
                                relative text-white/80 hover:text-white transition-colors duration-300 font-light
                                ${isActive ? 'text-white' : ''}
                            `}
                        >
                            {({isActive}) => (
                                <>
                                    ABOUT
                                    {isActive && (
                                        <span className='absolute -bottom-2 left-0 right-0 h-[1px] bg-[#d4a574]'></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink 
                            to={'/contact'} 
                            className={({isActive}) => `
                                relative text-white/80 hover:text-white transition-colors duration-300 font-light
                                ${isActive ? 'text-white' : ''}
                            `}
                        >
                            {({isActive}) => (
                                <>
                                    CONTACT
                                    {isActive && (
                                        <span className='absolute -bottom-2 left-0 right-0 h-[1px] bg-[#d4a574]'></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    </ul>

                    {/* Right Side Icons */}
                    <div className='flex items-center gap-6'>
                        {/* Search Icon */}
                        <button 
                            onClick={()=> setShowSearch(true)} 
                            className='group p-2 hover:bg-white/5 rounded-full transition-all duration-300'
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                        </button>

                        {/* Profile Dropdown */}
                        <div className='group relative'>
                            <button 
                                onClick={()=> token ? null : navigate('/login')} 
                                className='p-2 hover:bg-white/5 rounded-full transition-all duration-300'
                                aria-label="Profile"
                            >
                                <User className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                            </button>
                            
                            {/* Dropdown menu */}
                            {
                                token && (
                                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                                        <div className='flex flex-col w-48 py-3 px-2 bg-[#1a1a1a] border border-white/10 rounded-sm'>
                                            <button className='flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 text-sm font-light text-left'>
                                                <User className='w-4 h-4' />
                                                <span>My Profile</span>
                                            </button>
                                            <button 
                                                onClick={()=> navigate('/orders')} 
                                                className='flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 text-sm font-light text-left'
                                            >
                                                <ShoppingCart className='w-4 h-4' />
                                                <span>Orders</span>
                                            </button>
                                            <hr className='my-2 border-white/10' />
                                            <button 
                                                className='flex items-center gap-3 px-4 py-3 text-white/80 hover:text-[#d4a574] hover:bg-white/5 transition-colors duration-200 text-sm font-light text-left' 
                                                onClick={logout}
                                            >
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        
                        {/* Cart Icon */}
                        <Link to={'/cart'} className='relative group'>
                            <button className='p-2 hover:bg-white/5 rounded-full transition-all duration-300'>
                                <ShoppingCart className='w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300' />
                                {getCartCount() > 0 && (
                                    <span className='absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-[#d4a574] text-black text-xs font-semibold rounded-full'>
                                        {getCartCount()}
                                    </span>
                                )}
                            </button>
                        </Link>

                        {/* Mobile Menu Icon */}
                        <button 
                            onClick={()=> setVisible(true)} 
                            className='p-2 hover:bg-white/5 rounded-full transition-all duration-300 lg:hidden'
                            aria-label="Menu"
                        >
                            <Menu className='w-5 h-5 text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed top-0 right-0 bottom-0 z-50 bg-[#0a0a0a] transition-all duration-300 ${visible ? 'w-full sm:w-80' : 'w-0'} overflow-hidden`}>
            <div className='flex flex-col h-full'>
                {/* Sidebar Header */}
                <div className='flex items-center justify-between p-6 border-b border-white/10'>
                    <h3 className='text-xl font-serif font-light text-white tracking-wider'>MENU</h3>
                    <button 
                        onClick={() => setVisible(false)} 
                        className='p-2 hover:bg-white/5 rounded-full transition-all duration-200'
                    >
                        <X className='w-5 h-5 text-white' />
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <nav className='flex-1 overflow-y-auto py-8'>
                    <NavLink 
                        className="block py-4 px-8 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 font-light tracking-wider text-sm border-l-2 border-transparent hover:border-[#d4a574]" 
                        onClick={()=> setVisible(false)} 
                        to={'/'}
                    >
                        HOME
                    </NavLink> 
                    <NavLink 
                        className="block py-4 px-8 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 font-light tracking-wider text-sm border-l-2 border-transparent hover:border-[#d4a574]" 
                        onClick={()=> setVisible(false)} 
                        to={'/collection'}
                    >
                        GALLERY
                    </NavLink> 
                    <NavLink 
                        className="block py-4 px-8 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 font-light tracking-wider text-sm border-l-2 border-transparent hover:border-[#d4a574]" 
                        onClick={()=> setVisible(false)} 
                        to={'/about'}
                    >
                        ABOUT
                    </NavLink> 
                    <NavLink 
                        className="block py-4 px-8 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200 font-light tracking-wider text-sm border-l-2 border-transparent hover:border-[#d4a574]" 
                        onClick={()=> setVisible(false)} 
                        to={'/contact'}
                    >
                        CONTACT
                    </NavLink>
                </nav>

                {/* Sidebar Footer */}
                <div className='p-6 border-t border-white/10'>
                    <p className='text-xs text-white/40 text-center font-light tracking-wider'>
                        © 2024 ARTISAN GALLERY
                    </p>
                </div>
            </div>
        </div>

        {/* Overlay for mobile menu */}
        {visible && (
            <div 
                className='fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden'
                onClick={() => setVisible(false)}
            ></div>
        )}
    </>
  )
}

export default Navbar;