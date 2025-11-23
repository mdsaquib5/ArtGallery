// PlaceOrder.jsx
import React, { useContext, useState } from 'react';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../config/const';
import { MapPin, Mail, Phone, CreditCard, Wallet, Banknote, ShoppingBag, Lock } from 'lucide-react';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const {token, cartItems, getCartAmount, deliveryFee, products, setCartItems} = useContext(ShopContext);
    const navigate = useNavigate();

    // Create some states for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    // Create a function to handle form changes
    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        // Update the form data state
        setFormData( data => ({...data, [name]: value}));
    };

    // Create a function to handle razorpay payment
    const initPay = (order) => {
        const options = {
            key : "rzp_test_RXD61QMWqsvwRO",
            amount : order.amount,
            currency : order.currency,
            name : "Order Payment",
            description : "Order Payment",
            order_id : order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
                try {
                    const { data } = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response, {headers: {token}});
                    console.log(data.success);
                    if (data.success) {
                        navigate('/orders');
                        setCartItems({});
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            },
        }
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    // Create a function to handle form submission
    const onSubmitHandler =  async (e) => {
        e.preventDefault();

        try {
            let orderItems = [];
            for( const items in cartItems){
                for(const item in cartItems[items]){
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + deliveryFee
            }
            switch (method) {
                // Api calls for COD
                case 'cod':
                    const responseCOD = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: {token} });
                    if (responseCOD.data.success) {
                        setCartItems({});
                        navigate('/orders');
                        toast.success('Order placed successfully!');
                    } else {
                        toast.error(responseCOD.data.message);
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(`${backendUrl}/api/order/razorpay`, orderData, { headers: {token} });
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order);
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

  return (
    <>
        {/* Hero Section */}
        <div className='relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden'>
            <div className='absolute inset-0'>
                <img 
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&h=800&fit=crop" 
                    alt="Checkout" 
                    className='w-full h-full object-cover opacity-30'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='max-w-3xl'>
                    <div className='mb-8'>
                        <span className='inline-flex items-center gap-2 text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                            <Lock className='w-4 h-4' />
                            Secure Checkout
                        </span>
                    </div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6'>
                        Complete Your
                        <span className='block mt-2 text-[#d4a574]'>Purchase</span>
                    </h1>
                    <p className='text-lg text-white/60 font-light leading-relaxed max-w-2xl'>
                        Fill in your delivery details and select your preferred payment method to finalize your order.
                    </p>
                </div>
            </div>
        </div>

        {/* Checkout Form Section */}
        <div className='py-16 sm:py-24 lg:py-32 bg-[#f5f1e8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <form onSubmit={onSubmitHandler} className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
                    {/* Left: Delivery Information */}
                    <div className='lg:col-span-2 space-y-8'>
                        {/* Delivery Information Card */}
                        <div className='bg-white border border-black/10 p-6 lg:p-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <MapPin className='w-5 h-5 text-[#d4a574]' />
                                <h2 className='text-xl font-serif font-light text-black tracking-wide'>
                                    Delivery Information
                                </h2>
                            </div>

                            <div className='space-y-4'>
                                {/* Name Fields */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='John'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='Doe'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 flex items-center gap-2'>
                                        <Mail className='w-4 h-4' />
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='john@example.com'
                                        required
                                    />
                                </div>

                                {/* Street */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2'>Street Address</label>
                                    <input 
                                        type="text" 
                                        name="street"
                                        value={formData.street}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='123 Main Street'
                                        required
                                    />
                                </div>

                                {/* City & State */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>City</label>
                                        <input 
                                            type="text" 
                                            name="city"
                                            value={formData.city}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='New York'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>State</label>
                                        <input 
                                            type="text" 
                                            name="state"
                                            value={formData.state}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='NY'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Zipcode & Country */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>Zipcode</label>
                                        <input 
                                            type="text" 
                                            name="zipcode"
                                            value={formData.zipcode}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='10001'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2'>Country</label>
                                        <input 
                                            type="text" 
                                            name="country"
                                            value={formData.country}
                                            onChange={onchangeHandler}
                                            className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                            placeholder='United States'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 flex items-center gap-2'>
                                        <Phone className='w-4 h-4' />
                                        Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={onchangeHandler}
                                        className='w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300'
                                        placeholder='+1 (234) 567-8900'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Card */}
                        <div className='bg-white border border-black/10 p-6 lg:p-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <CreditCard className='w-5 h-5 text-[#d4a574]' />
                                <h2 className='text-xl font-serif font-light text-black tracking-wide'>
                                    Payment Method
                                </h2>
                            </div>

                            <div className='space-y-3'>

                                {/* Razorpay */}
                                <button
                                    type='button'
                                    onClick={() => setMethod('razorpay')}
                                    className={`w-full flex items-center gap-4 p-4 border transition-all duration-300 ${
                                        method === 'razorpay'
                                            ? 'border-[#d4a574] bg-[#d4a574]/5'
                                            : 'border-black/10 hover:border-black/30'
                                    }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                        method === 'razorpay' ? 'border-[#d4a574]' : 'border-black/30'
                                    }`}>
                                        {method === 'razorpay' && (
                                            <div className='w-3 h-3 rounded-full bg-[#d4a574]'></div>
                                        )}
                                    </div>
                                    <Wallet className='w-5 h-5 text-black/60' />
                                    <span className='font-light text-black'>Razorpay</span>
                                </button>

                                {/* Cash on Delivery */}
                                <button
                                    type='button'
                                    onClick={() => setMethod('cod')}
                                    className={`w-full flex items-center gap-4 p-4 border transition-all duration-300 ${
                                        method === 'cod'
                                            ? 'border-[#d4a574] bg-[#d4a574]/5'
                                            : 'border-black/10 hover:border-black/30'
                                    }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                        method === 'cod' ? 'border-[#d4a574]' : 'border-black/30'
                                    }`}>
                                        {method === 'cod' && (
                                            <div className='w-3 h-3 rounded-full bg-[#d4a574]'></div>
                                        )}
                                    </div>
                                    <Banknote className='w-5 h-5 text-black/60' />
                                    <span className='font-light text-black'>Cash on Delivery</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className='lg:col-span-1'>
                        <div className='sticky top-24 space-y-6'>
                            {/* Cart Total */}
                            <CartTotal />

                            {/* Place Order Button */}
                            <button 
                                type='submit'
                                className='w-full py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3'
                            >
                                <ShoppingBag className='w-5 h-5' />
                                <span>PLACE ORDER</span>
                            </button>

                            {/* Security Notice */}
                            <div className='bg-gray-50 border border-black/10 p-4'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <Lock className='w-5 h-5 text-[#d4a574]' />
                                    <h3 className='text-sm font-light text-black'>Secure Checkout</h3>
                                </div>
                                <p className='text-xs text-black/60 font-light leading-relaxed'>
                                    Your payment information is encrypted and secure. We never store your card details.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default PlaceOrder;