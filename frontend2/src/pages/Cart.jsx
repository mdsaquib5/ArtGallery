// Cart.jsx
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';

const Cart = () => {
    // Getting context
    const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
    // Cart Data
    const [cartData, setCartData] = useState([]);

    // This useEffect is use to log cart items
    useEffect(() => {
        if (products.length > 0) {
            // Setting temp data
            const tempData = [];
            //   
            for (const items in cartItems) {
                // Looping through size
                for (const item in cartItems[items]) {
                    // Checking if quantity is greater than 0
                    if (cartItems[items][item] > 0) {
                        // Pushing data to temp data
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        })
                    }
                }

            }
            //   Setting cart data
            setCartData(tempData);
        }
    }, [cartItems, products])

    return (
        <>
            {/* Hero Section */}
            <div className='relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden'>
                {/* Background Image with Overlay */}
                <div className='absolute inset-0'>
                    <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop" 
                        alt="Shopping Cart" 
                        className='w-full h-full object-cover opacity-30'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
                </div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='max-w-3xl'>
                        <div className='mb-8'>
                            <span className='inline-flex items-center gap-2 text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                                <ShoppingBag className='w-4 h-4' />
                                {cartData.length} {cartData.length === 1 ? 'Item' : 'Items'}
                            </span>
                        </div>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6'>
                            Your Shopping
                            <span className='block mt-2 text-[#d4a574]'>Cart</span>
                        </h1>
                        <p className='text-lg text-white/60 font-light leading-relaxed max-w-2xl'>
                            Review your selected artworks and proceed to secure checkout when ready.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cart Content Section */}
            <div className='py-16 sm:py-24 lg:py-32 bg-[#f5f1e8]'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    {cartData.length === 0 ? (
                        // Empty Cart State
                        <div className='bg-white border border-black/10 py-20 text-center'>
                            <ShoppingBag className='w-16 h-16 text-black/20 mx-auto mb-6' />
                            <h2 className='text-2xl font-serif font-light text-black mb-4'>
                                Your Cart is Empty
                            </h2>
                            <p className='text-sm text-black/60 font-light mb-8'>
                                Explore our collection and discover your perfect artwork
                            </p>
                            <button 
                                onClick={() => navigate('/collection')}
                                className='inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300'
                            >
                                <span>BROWSE GALLERY</span>
                                <ArrowRight className='w-4 h-4' />
                            </button>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            {/* Cart Items - Left Side */}
                            <div className='lg:col-span-2 space-y-4'>
                                {cartData.map((item, index) => {
                                    const productData = products.find((product) => product._id === item._id);
                                    
                                    if (!productData) return null;
                                    
                                    return (
                                        <div 
                                            key={index} 
                                            className='bg-white border border-black/10 p-6 hover:border-[#d4a574]/30 transition-all duration-300'
                                        >
                                            <div className='flex flex-col sm:flex-row gap-6'>
                                                {/* Product Image */}
                                                <div className='w-full sm:w-32 h-40 sm:h-32 border border-black/10 overflow-hidden bg-gray-50 flex-shrink-0'>
                                                    <img 
                                                        src={productData.image[0].url} 
                                                        alt={productData.name} 
                                                        className='w-full h-full object-cover'
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className='flex-1 flex flex-col justify-between'>
                                                    <div>
                                                        <h3 className='text-lg font-serif font-light text-black mb-2'>
                                                            {productData.name}
                                                        </h3>
                                                        <div className='flex items-center gap-4 mb-4'>
                                                            <p className='text-xl font-light text-black'>
                                                                {currency}{productData.price}
                                                            </p>
                                                            {item.size && (
                                                                <span className='px-3 py-1 bg-gray-100 border border-black/10 text-xs text-black/60 font-light'>
                                                                    {item.size}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Quantity Controls & Remove */}
                                                    <div className='flex items-center justify-between'>
                                                        {/* Quantity Selector */}
                                                        <div className='flex items-center gap-3'>
                                                            <span className='text-sm text-black/60 font-light'>Qty:</span>
                                                            <div className='flex items-center border border-black/10'>
                                                                <button
                                                                    onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                                                                    className='p-2 hover:bg-gray-50 transition-colors duration-200'
                                                                >
                                                                    <Minus className='w-4 h-4 text-black/60' />
                                                                </button>
                                                                <input 
                                                                    type="number" 
                                                                    min={1} 
                                                                    value={item.quantity} 
                                                                    onChange={(e) => {
                                                                        const value = e.target.value;
                                                                        if (value === "" || value === "0") return;
                                                                        updateQuantity(item._id, item.size, Number(value));
                                                                    }}
                                                                    className='w-12 text-center py-2 outline-none font-light text-black bg-transparent'
                                                                />
                                                                <button
                                                                    onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                                                    className='p-2 hover:bg-gray-50 transition-colors duration-200'
                                                                >
                                                                    <Plus className='w-4 h-4 text-black/60' />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Remove Button */}
                                                        <button 
                                                            onClick={() => updateQuantity(item._id, item.size, 0)}
                                                            className='group p-2 border border-black/10 hover:border-red-500 hover:bg-red-50 transition-all duration-300'
                                                            title='Remove from cart'
                                                        >
                                                            <Trash2 className='w-5 h-5 text-black/40 group-hover:text-red-500 transition-colors duration-300' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Cart Summary - Right Side */}
                            <div className='lg:col-span-1'>
                                <div className='sticky top-24 space-y-6'>
                                    {/* Cart Total Component */}
                                    <CartTotal />

                                    {/* Checkout Button */}
                                    <button 
                                        onClick={() => navigate('/place-order')}
                                        className='w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3'
                                    >
                                        <span>PROCEED TO CHECKOUT</span>
                                        <ArrowRight className='w-4 h-4' />
                                    </button>

                                    {/* Continue Shopping Link */}
                                    <button 
                                        onClick={() => navigate('/collection')}
                                        className='w-full py-4 border border-black/20 hover:border-[#d4a574] text-black hover:text-[#d4a574] font-light text-sm tracking-wider transition-all duration-300'
                                    >
                                        CONTINUE SHOPPING
                                    </button>

                                    {/* Trust Badges */}
                                    <div className='bg-gray-50 border border-black/10 p-4'>
                                        <div className='space-y-3 text-xs text-black/60 font-light'>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-1 h-1 bg-[#d4a574]'></div>
                                                <span>Secure payment processing</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-1 h-1 bg-[#d4a574]'></div>
                                                <span>Free shipping on orders over $500</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-1 h-1 bg-[#d4a574]'></div>
                                                <span>30-day return policy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart;