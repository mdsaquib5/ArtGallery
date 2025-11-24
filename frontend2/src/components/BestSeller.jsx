// BestSeller.jsx
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter( (item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 3));
    }, [products])

    console.log("Env is", import.meta.env.VITE_API_URL);

    return (
        <>
            <div className='py-24 sm:py-32 lg:py-40 bg-[#ede8df] relative overflow-hidden'>
                {/* Decorative Background Lines */}
                <div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent'></div>
                <div className='absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent'></div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    {/* Section Header */}
                    <div className="mb-20 sm:mb-24">
                        <Title 
                            text1="MOST COVETED" 
                            text2="Bestsellers"
                            description="Exceptional pieces that have captured the hearts of collectors worldwide"
                            theme="light"
                        />
                    </div>

                    {/* Rendering Products */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                        {
                            bestSeller.map( (item, index) =>(
                                <ProductItem key={index} item={item} theme="light" />
                            ))
                        }
                    </div>

                    {/* Bottom Section with Stats */}
                    <div className='mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16'>
                        {/* Stat 1 */}
                        <div className='text-center group'>
                            <div className='mb-6'>
                                <div className='w-16 h-[1px] bg-[#d4a574] mx-auto mb-6'></div>
                                <h3 className='text-5xl lg:text-6xl font-serif font-light text-black mb-2'>500+</h3>
                                <p className='text-xs tracking-[0.3em] text-black/40 font-light uppercase'>Original Artworks</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className='text-center group'>
                            <div className='mb-6'>
                                <div className='w-16 h-[1px] bg-[#d4a574] mx-auto mb-6'></div>
                                <h3 className='text-5xl lg:text-6xl font-serif font-light text-black mb-2'>50+</h3>
                                <p className='text-xs tracking-[0.3em] text-black/40 font-light uppercase'>Renowned Artists</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className='text-center group'>
                            <div className='mb-6'>
                                <div className='w-16 h-[1px] bg-[#d4a574] mx-auto mb-6'></div>
                                <h3 className='text-5xl lg:text-6xl font-serif font-light text-black mb-2'>15K+</h3>
                                <p className='text-xs tracking-[0.3em] text-black/40 font-light uppercase'>Happy Collectors</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section - DARK BUTTON for LIGHT background */}
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

export default BestSeller;