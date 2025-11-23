// SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    // useEffect to close search bar when user navigate to collection page
    useEffect(() => {
        if(location.pathname.includes("/collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])
    
  return showSearch && visible ? (  
    <>
        <div className='border-t border-b border-black/5 bg-[#f5f1e8] py-8'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className='max-w-2xl mx-auto'>
                    {/* Search Input */}
                    <div className="relative flex items-center bg-white border border-black/10 focus-within:border-[#d4a574] transition-colors duration-300">
                        <Search className='absolute left-4 w-5 h-5 text-black/30' />
                        <input 
                            className='flex-1 pl-12 pr-12 py-4 outline-none bg-transparent text-black font-light placeholder:text-black/30 text-sm' 
                            type="text" 
                            placeholder='Search artworks, artists, categories...' 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                        <button 
                            onClick={() => setShowSearch(false)} 
                            className='absolute right-4 p-2 hover:bg-gray-50 rounded-full transition-colors duration-300 group'
                            aria-label="Close search"
                        >
                            <X className='w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300' />
                        </button>
                    </div>

                    {/* Search Hint */}
                    <p className='text-center text-xs text-black/40 font-light mt-4 tracking-wide'>
                        Press ESC to close
                    </p>
                </div>
            </div>
        </div>    
    </>
  ) : null
}

export default SearchBar;