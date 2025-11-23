// Collections.jsx
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Collections = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 6));
    }, [products])

  return (
    <>
       <div className='py-6 sm:py-12 lg:py-20 bg-[#f5f1e8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className="text-center mb-20 sm:mb-24">
                    {/* Light version Title */}
                    <div className="text-center space-y-6">
                        {/* Decorative Line Top */}
                        <div className='flex items-center justify-center gap-4 mb-8'>
                            <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                            <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                            <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                        </div>

                        <div className="inline-flex flex-col items-center gap-3">
                            <h2 className="text-xs sm:text-sm text-[#d4a574] tracking-[0.3em] font-light uppercase">
                                FEATURED
                            </h2>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black font-light tracking-wide">
                                Collection
                            </h2>
                        </div>

                        <p className="max-w-2xl mx-auto text-sm sm:text-base text-black/60 leading-relaxed font-light mt-6">
                            Carefully curated artworks from contemporary masters and emerging talents
                        </p>

                        {/* Decorative Line Bottom */}
                        <div className='flex items-center justify-center gap-4 mt-8'>
                            <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                            <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                            <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                        </div>
                    </div>
                </div>

                {/* Rendering Products */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                    {
                        latestProducts.map( (item, index) =>(
                            <ProductItem key={index} item={item} theme="light" />
                        ))
                    }
                </div>

                {/* View All Button */}
                <div className='mt-20 text-center'>
                        <div className='inline-block'>
                            <button className='group relative px-16 py-5 bg-black hover:bg-[#1a1a1a] border border-black text-white font-light text-sm tracking-[0.2em] transition-all duration-500'>
                                <span className="relative z-10 flex items-center gap-4">
                                    EXPLORE COLLECTION
                                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
            </div>
       </div>
    </>
  )
}

export default Collections;