// SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
import { Search, X, TrendingUp } from 'lucide-react';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    // useEffect to show search bar only on collection page
    useEffect(() => {
        if(location.pathname.includes("/collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setShowSearch(false);
            }
        };
        
        if (showSearch && visible) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when search is open
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showSearch, visible, setShowSearch]);
    
  return showSearch && visible ? (  
    <>
        {/* Backdrop Overlay - Fixed */}
        <div 
            className='fixed inset-0 bg-black/60 z-[999]'
            onClick={() => setShowSearch(false)}
        ></div>

        {/* Fixed Search Bar - Stays at top after navbar */}
        <div className='fixed top-0 left-0 right-0 z-[1000]'>
            <div className='bg-white shadow-2xl border-black/10'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className=''>
                        {/* Search Input */}
                        <div className="relative flex items-center bg-gray-50 border-2 border-black/10 focus-within:border-[#d4a574] focus-within:bg-white transition-all duration-300 group">
                            <Search className='absolute left-5 w-6 h-6 text-black/30 group-focus-within:text-[#d4a574] transition-colors duration-300' />
                            <input 
                                autoFocus
                                className='flex-1 pl-16 pr-16 py-3 outline-none bg-transparent text-black font-light placeholder:text-black/40 text-base sm:text-lg' 
                                type="text" 
                                placeholder='Search for artworks, artists, categories...' 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                            <button 
                                onClick={() => setShowSearch(false)} 
                                className='absolute right-5 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group'
                                aria-label="Close search"
                            >
                                <X className='w-6 h-6 text-black/40 group-hover:text-black transition-colors duration-300' />
                            </button>
                        </div>

                        {/* Search Results Count */}
                        {search && (
                            <div className='mt-4'>
                                <p className='text-sm text-black/60 font-light'>
                                    Searching for "<span className='text-black font-medium'>{search}</span>"
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
  ) : null
}

export default SearchBar;