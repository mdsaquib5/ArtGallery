// RelatedProducts.jsx
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    // This state is use to store related products
    const [related, setRelated] = useState([]);

    // This useEffect is use to get related products
    useEffect(() => {
        // Checking if products is not empty
        if (products.length > 0) {
            // Copying products array
            let productCopy = products.slice();
            // Filtering products
            productCopy = productCopy.filter( (item) => item.category === category && item.subCategory === subCategory);
            // Setting related products
            setRelated(productCopy.slice(0, 3));
        }
    }, [products])

  return related.length > 0 ? (
    <>
        <div className='py-16 sm:py-20 lg:py-24 bg-[#f5f1e8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <Title 
                        text1="YOU MAY ALSO" 
                        text2="Like"
                        description="Discover more artworks from this collection"
                        theme="light"
                    />
                </div>

                {/* Products Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8'>
                    {
                        related.map( (item, index) =>(
                            <ProductItem key={index} item={item} theme="light" />
                        ))
                    }
                </div>

                {/* Decorative Line */}
                <div className='flex items-center justify-center gap-4 mt-12 sm:mt-16'>
                    <div className='w-16 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                    <div className='w-16 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                </div>
            </div>
        </div>    
    </>
  ) : null
}

export default RelatedProducts;