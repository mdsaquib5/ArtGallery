// Orders.jsx (User Orders Page)
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { Package, Calendar, CreditCard, Truck, CheckCircle, Clock } from 'lucide-react';

const Orders = () => {
    const {currency, backendUrl, token, navigate} = useContext(ShopContext);

    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(`${backendUrl}/api/order/userOrders`, {}, {headers: {token}});
            
            if (response.data.success) {
                let allOrdersItem = [];
                response.data.orders.map( (order) => {
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['date'] = order.date;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        allOrdersItem.push(item);
                    });
                });
                console.log(allOrdersItem);
                setOrderData(allOrdersItem.reverse());
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadOrderData();
    }, [token]);

    // Get status color and icon
    const getStatusConfig = (status) => {
        switch(status) {
            case 'Order Placed': 
                return { color: 'bg-blue-500', icon: <Package className='w-4 h-4' />, text: 'text-blue-600' };
            case 'Packing': 
                return { color: 'bg-yellow-500', icon: <Clock className='w-4 h-4' />, text: 'text-yellow-600' };
            case 'Shipped': 
                return { color: 'bg-purple-500', icon: <Truck className='w-4 h-4' />, text: 'text-purple-600' };
            case 'Out for delivery': 
                return { color: 'bg-orange-500', icon: <Truck className='w-4 h-4' />, text: 'text-orange-600' };
            case 'Delivered': 
                return { color: 'bg-green-500', icon: <CheckCircle className='w-4 h-4' />, text: 'text-green-600' };
            default: 
                return { color: 'bg-gray-500', icon: <Package className='w-4 h-4' />, text: 'text-gray-600' };
        }
    };

  return (
    <>
        {/* Hero Section */}
        <div className='relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0'>
                <img 
                    src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=1920&h=800&fit=crop" 
                    alt="Orders" 
                    className='w-full h-full object-cover opacity-30'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='max-w-3xl'>
                    <div className='mb-8'>
                        <span className='inline-flex items-center gap-2 text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                            <Package className='w-4 h-4' />
                            Order History
                        </span>
                    </div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6'>
                        My
                        <span className='block mt-2 text-[#d4a574]'>Orders</span>
                    </h1>
                    <p className='text-lg text-white/60 font-light leading-relaxed max-w-2xl'>
                        Track and manage your artwork purchases. View order details and delivery status.
                    </p>
                </div>
            </div>
        </div>

        {/* Orders Content Section */}
        <div className='py-16 sm:py-24 lg:py-32 bg-[#f5f1e8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {orderData.length === 0 ? (
                    // Empty Orders State
                    <div className='bg-white border border-black/10 py-20 text-center'>
                        <Package className='w-16 h-16 text-black/20 mx-auto mb-6' />
                        <h2 className='text-2xl font-serif font-light text-black mb-4'>
                            No Orders Yet
                        </h2>
                        <p className='text-sm text-black/60 font-light mb-8'>
                            Start your art collection by browsing our gallery
                        </p>
                        <button 
                            onClick={() => navigate('/collection')}
                            className='inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300'
                        >
                            <span>BROWSE GALLERY</span>
                        </button>
                    </div>
                ) : (
                    <div className='space-y-6'>
                        {orderData.map((item, index) => {
                            const statusConfig = getStatusConfig(item.status);
                            
                            return (
                                <div 
                                    key={index} 
                                    className='bg-white border border-black/10 hover:border-[#d4a574]/30 transition-all duration-300'
                                >
                                    <div className='p-6'>
                                        <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6'>
                                            {/* Product Image */}
                                            <div className='w-full sm:w-32 h-40 sm:h-32 border border-black/10 overflow-hidden bg-gray-50 flex-shrink-0'>
                                                <img 
                                                    src={item.image[0].url} 
                                                    alt={item.name} 
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>

                                            {/* Order Details */}
                                            <div className='space-y-4'>
                                                <div>
                                                    <h3 className='text-lg font-serif font-light text-black mb-2'>
                                                        {item.name}
                                                    </h3>
                                                    <div className='flex flex-wrap items-center gap-4 text-sm text-black/70 font-light'>
                                                        <div className='flex items-center gap-2'>
                                                            <span className='text-black/40'>Price:</span>
                                                            <span className='text-black font-medium'>{currency}{item.price}</span>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <span className='text-black/40'>Quantity:</span>
                                                            <span className='text-black'>{item.quantity}</span>
                                                        </div>
                                                        {item.size && (
                                                            <span className='px-3 py-1 bg-gray-100 border border-black/10 text-xs text-black/60'>
                                                                {item.size}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Order Meta Info */}
                                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-black/5'>
                                                    <div className='flex items-center gap-2 text-sm text-black/60 font-light'>
                                                        <Calendar className='w-4 h-4 text-black/40' />
                                                        <span>{new Date(item.date).toLocaleDateString('en-US', { 
                                                            year: 'numeric', 
                                                            month: 'long', 
                                                            day: 'numeric' 
                                                        })}</span>
                                                    </div>
                                                    <div className='flex items-center gap-2 text-sm text-black/60 font-light'>
                                                        <CreditCard className='w-4 h-4 text-black/40' />
                                                        <span>{item.paymentMethod}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Status & Action */}
                                            <div className='flex flex-col justify-between items-start lg:items-end gap-4'>
                                                {/* Status Badge */}
                                                <div className={`inline-flex items-center gap-2 px-4 py-2 border ${statusConfig.text} bg-white`}>
                                                    <div className={`w-2 h-2 rounded-full ${statusConfig.color}`}></div>
                                                    <span className='text-sm font-light'>{item.status}</span>
                                                </div>

                                                {/* Track Button */}
                                                <button 
                                                    onClick={loadOrderData}
                                                    className='px-6 py-2 border border-black/20 hover:border-[#d4a574] text-black hover:text-[#d4a574] font-light text-sm tracking-wider transition-all duration-300'
                                                >
                                                    TRACK ORDER
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Show More Link (if needed) */}
                        {orderData.length > 10 && (
                            <div className='text-center pt-8'>
                                <p className='text-sm text-black/60 font-light'>
                                    Showing {Math.min(10, orderData.length)} of {orderData.length} orders
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Orders;