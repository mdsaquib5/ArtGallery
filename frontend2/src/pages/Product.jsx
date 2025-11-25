// Product.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { ShoppingCart, Check, Star, Package, RefreshCw, Shield } from 'lucide-react';

const Product = () => {
    // Getting product id from url
    const {productId} = useParams();
    const {products, currency, addToCart} = useContext(ShopContext);
    // Product Data
    const [productData, setProductData] = useState(false);
    // Product Image
    const [image, setImage] = useState('');
    // Product Size
    const [size, setSize] = useState('');
    // Active tab
    const [activeTab, setActiveTab] = useState('description');

    // Fetch product data
    const fetchProductData = () => {
        // Find product
        const product = products.find((item) => item._id === productId);
        // Set product data
        if (product) {
            // Set product data
            setProductData(product);
            // console.log("Product is", product);
            // Set product image
            setImage(product.image[0]);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [productId])
    
    
  return productData ? (
    <>
        {/* Product Section */}
        <div className='py-16 sm:py-20 lg:py-24 bg-white mt-12'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
                    {/* Left: Product Images */}
                    <div className='flex flex-col-reverse sm:flex-row gap-4'>
                        {/* Thumbnail Images */}
                        <div className='flex sm:flex-col gap-3 sm:w-24 order-2 sm:order-1'>
                            {productData.image.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setImage(item)}
                                    className={`w-20 h-20 sm:w-24 sm:h-24 border overflow-hidden transition-all duration-300 ${
                                        image.url === item.url 
                                            ? 'border-[#d4a574] shadow-md' 
                                            : 'border-black/10 hover:border-black/30'
                                    }`}
                                >
                                    <img 
                                        src={item.url} 
                                        alt="" 
                                        className='w-full h-full object-cover'
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className='flex-1 order-1 sm:order-2'>
                            <div className='aspect-[3/4] border border-black/10 overflow-hidden bg-gray-50'>
                                <img 
                                    src={image.url} 
                                    alt={productData.name} 
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className='space-y-8'>
                        {/* Product Name */}
                        <div>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                                <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                            </div>
                            <h1 className='text-3xl sm:text-4xl font-serif font-light text-black tracking-wide mb-4'>
                                {productData.name}
                            </h1>

                            {/* Rating */}
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='flex items-center gap-1'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star 
                                            key={star}
                                            className={`w-4 h-4 ${star <= 4 ? 'fill-[#d4a574] text-[#d4a574]' : 'text-black/20'}`}
                                        />
                                    ))}
                                </div>
                                <span className='text-sm text-black/60 font-light'>(122 reviews)</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className='py-6 border-y border-black/10'>
                            <p className='text-4xl font-serif font-light text-black'>
                                {currency}{productData.price}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className='text-sm text-black/60 font-light tracking-wide uppercase mb-3'>
                                About This Artwork
                            </h3>
                            <p className='text-base text-black/70 font-light leading-relaxed'>
                                {productData.description}
                            </p>
                        </div>

                        {/* Size Selection */}
                        {productData.sizes && productData.sizes.length > 0 && (
                            <div>
                                <h3 className='text-sm text-black/60 font-light tracking-wide uppercase mb-4'>
                                    Select Size
                                </h3>
                                <div className='flex flex-wrap gap-3'>
                                    {productData.sizes.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSize(item)}
                                            className={`px-6 py-3 border font-light text-sm tracking-wider transition-all duration-300 ${
                                                size === item 
                                                    ? 'bg-[#d4a574] border-[#d4a574] text-black' 
                                                    : 'bg-white border-black/20 text-black hover:border-[#d4a574]'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                {!size && (
                                    <p className='text-xs text-black/40 font-light mt-3'>
                                        Please select a size
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Add to Cart Button */}
                        <button 
                            onClick={() => addToCart(productData._id, size)}
                            className='w-full py-4 bg-black hover:bg-[#1a1a1a] cursor-pointer text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3'
                        >
                            <ShoppingCart className='w-5 h-5' />
                            <span>ADD TO COLLECTION</span>
                        </button>

                        {/* Product Features */}
                        <div className='bg-gray-50 border border-black/10 p-6 space-y-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-10 h-10 border border-black/10 flex items-center justify-center flex-shrink-0'>
                                    <Shield className='w-5 h-5 text-[#d4a574]' />
                                </div>
                                <div>
                                    <h4 className='text-sm font-light text-black mb-1'>100% Authentic</h4>
                                    <p className='text-xs text-black/60 font-light'>Original artwork with certificate of authenticity</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-10 h-10 border border-black/10 flex items-center justify-center flex-shrink-0'>
                                    <Package className='w-5 h-5 text-[#d4a574]' />
                                </div>
                                <div>
                                    <h4 className='text-sm font-light text-black mb-1'>Secure Delivery</h4>
                                    <p className='text-xs text-black/60 font-light'>Professional packaging with insurance coverage</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-10 h-10 border border-black/10 flex items-center justify-center flex-shrink-0'>
                                    <RefreshCw className='w-5 h-5 text-[#d4a574]' />
                                </div>
                                <div>
                                    <h4 className='text-sm font-light text-black mb-1'>30-Day Returns</h4>
                                    <p className='text-xs text-black/60 font-light'>Easy return and exchange policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Description & Reviews Section */}
        <div className='py-16 sm:py-20 bg-[#f5f1e8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mx-auto'>
                    {/* Tabs */}
                    <div className='flex border-b border-black/10 mb-8'>
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-8 py-4 font-light text-sm tracking-wide transition-all duration-300 border-b-2 ${
                                activeTab === 'description'
                                    ? 'border-[#d4a574] text-black'
                                    : 'border-transparent text-black/60 hover:text-black'
                            }`}
                        >
                            DESCRIPTION
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-8 py-4 font-light text-sm tracking-wide transition-all duration-300 border-b-2 ${
                                activeTab === 'reviews'
                                    ? 'border-[#d4a574] text-black'
                                    : 'border-transparent text-black/60 hover:text-black'
                            }`}
                        >
                            REVIEWS (122)
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className='bg-white border border-black/10 p-8 lg:p-10'>
                        {activeTab === 'description' ? (
                            <div className='space-y-4 text-black/70 font-light leading-relaxed'>
                                <p>
                                    This exceptional artwork represents a perfect blend of traditional technique and contemporary vision. Each piece is meticulously crafted to capture the essence of the subject while bringing a unique perspective that resonates with modern collectors.
                                </p>
                                <p>
                                    The artist's mastery of color, composition, and texture creates a captivating visual experience that transforms any space. Whether displayed in a residential setting or corporate environment, this piece serves as a powerful conversation starter and a testament to refined taste.
                                </p>
                                <div className='pt-4 mt-4 border-t border-black/5'>
                                    <h4 className='text-sm font-light text-black mb-3 tracking-wide uppercase'>Artwork Details</h4>
                                    <ul className='space-y-2 text-sm'>
                                        <li className='flex items-center gap-2'>
                                            <Check className='w-4 h-4 text-[#d4a574]' />
                                            <span>Museum-quality canvas and materials</span>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <Check className='w-4 h-4 text-[#d4a574]' />
                                            <span>Signed and numbered by the artist</span>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <Check className='w-4 h-4 text-[#d4a574]' />
                                            <span>Ready to hang with professional mounting</span>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <Check className='w-4 h-4 text-[#d4a574]' />
                                            <span>Includes certificate of authenticity</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-6'>
                                <div className='text-center py-8'>
                                    <Star className='w-12 h-12 text-[#d4a574] mx-auto mb-4' />
                                    <p className='text-2xl font-serif font-light text-black mb-2'>4.5 out of 5</p>
                                    <p className='text-sm text-black/60 font-light'>Based on 122 reviews</p>
                                </div>
                                <div className='border-t border-black/10 pt-6'>
                                    <p className='text-center text-black/40 font-light text-sm'>
                                        Reviews section coming soon
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </>
  ) : (
    <div className='min-h-screen flex items-center justify-center bg-white'>
        <div className='text-center'>
            <div className='inline-block w-12 h-12 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin mb-4'></div>
            <p className='text-sm text-black/60 font-light'>Loading artwork...</p>
        </div>
    </div>
  )
}

export default Product;