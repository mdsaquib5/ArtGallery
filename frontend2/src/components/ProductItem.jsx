// ProductItem.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const ProductItem = ({item, theme = "dark"}) => {
    const { currency } = useContext(ShopContext);

    const isDark = theme === "dark";
    
  return (
    <>
        <div className={`group relative overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            <Link to={`/product/${item._id}`} className='block'>
                {/* Image Container */}
                <div className='relative overflow-hidden bg-[#0a0a0a] aspect-[3/4]'>
                    <img 
                        src={item.image[0].url} 
                        alt={item.name} 
                        className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' 
                    />
                </div>

                {/* Product Info */}
                <div className={`p-6 space-y-3 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                    {/* Category */}
                    <p className='text-[10px] font-light text-[#d4a574] tracking-[0.3em] uppercase'>
                        {item.category || 'ORIGINAL ARTWORK'}
                    </p>

                    {/* Product Name */}
                    <h3 className={`text-lg font-serif font-light leading-tight group-hover:text-[#d4a574] transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                    }`}>
                        {item.name}
                    </h3>
                    
                    {/* Artist or Description */}
                    <p className={`text-sm font-light ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                        {item.artist || 'Contemporary Collection'}
                    </p>

                    {/* Divider */}
                    <div className='pt-4'>
                        <div className={`w-12 h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center justify-between pt-2">
                        <div>
                            <p className={`text-xl font-light tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>
                                {currency}{item.price}
                            </p>
                            {item.originalPrice && (
                                <p className={`text-sm line-through font-light ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                                    {currency}{item.originalPrice}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Link>

            {/* Buy Now Button - Appears on hover */}
            <div className='absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                <Link to={`/product/${item._id}`}>
                    <button className="w-full bg-[#d4a574] hover:bg-[#c9a068] text-black py-4 font-light text-sm tracking-[0.2em] transition-all duration-300">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ProductItem;