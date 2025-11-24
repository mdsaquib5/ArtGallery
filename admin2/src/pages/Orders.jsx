// Orders.jsx (Admin)
import React, { useState, useEffect } from 'react';
import { backendUrl, currency } from "../config/const";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Package, MapPin, Phone, CreditCard, Calendar, ShoppingBag, User } from 'lucide-react';

const Orders = ({token}) => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        if (!token) {
            return null;
        }
        try {
            const response = await axios.post(`${backendUrl}/api/order/list`, {}, {headers: {token} });

            if (response.data.success) {
                setOrders(response.data.orders.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const statusHandler = async (orderId, event) => {
        try {
            const response = await axios.post(`${backendUrl}/api/order/status`, {orderId, status:event.target.value}, {headers: {token} });
            if (response.data.success) {
                await fetchOrders();
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [token]);

    // Get status badge color
    const getStatusColor = (status) => {
        switch(status) {
            case 'Order Placed': return 'bg-blue-50 text-blue-600 border-blue-200';
            case 'Packing': return 'bg-yellow-50 text-yellow-600 border-yellow-200';
            case 'Shipped': return 'bg-purple-50 text-purple-600 border-purple-200';
            case 'Out for delivery': return 'bg-orange-50 text-orange-600 border-orange-200';
            case 'Delivered': return 'bg-green-50 text-green-600 border-green-200';
            default: return 'bg-gray-50 text-gray-600 border-gray-200';
        }
    }

  return (
    <>
      <div className='p-6 lg:p-8'>
        <div className='max-w-7xl mx-auto'>
            {/* Page Header */}
            <div className='mb-12 mt-2'>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                    <div className='w-12 h-[1px] bg-gradient-to-l from-transparent to-black/20'></div>
                </div>
                
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl lg:text-4xl font-serif font-light text-black tracking-wide mb-2'>
                            Orders Management
                        </h1>
                        <p className='text-sm text-black/60 font-light flex items-center gap-2'>
                            <ShoppingBag className='w-4 h-4' />
                            <span>{orders.length} total orders</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className='space-y-4'>
                {orders.length === 0 ? (
                    <div className='bg-white border border-black/10 py-20 text-center'>
                        <Package className='w-16 h-16 text-black/20 mx-auto mb-4' />
                        <p className='text-sm text-black/40 font-light'>No orders found</p>
                    </div>
                ) : (
                    orders.map((order, index) => (
                        <div 
                            key={index} 
                            className='bg-white border border-black/10 p-6 hover:border-[#d4a574]/30 transition-all duration-300'
                        >
                            <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6'>
                                {/* Left: Product Images & Items */}
                                <div className='flex gap-4'>
                                    {/* Product Images */}
                                    <div className='flex flex-col gap-2'>
                                        {order.items.slice(0, 3).map((item, itemIndex) => (
                                            <div key={itemIndex} className='w-16 h-16 border border-black/10 bg-gray-50 overflow-hidden flex-shrink-0'>
                                                {item.image && item.image[0] ? (
                                                    <img 
                                                        src={item.image[0].url || item.image[0]} 
                                                        alt={item.name}
                                                        className='w-full h-full object-cover'
                                                    />
                                                ) : (
                                                    <div className='w-full h-full flex items-center justify-center'>
                                                        <Package className='w-6 h-6 text-black/20' />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        {order.items.length > 3 && (
                                            <div className='w-16 h-16 border border-black/10 bg-gray-100 flex items-center justify-center'>
                                                <span className='text-xs text-black/60 font-light'>
                                                    +{order.items.length - 3}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Order Items */}
                                    <div className='min-w-0'>
                                        <h3 className='text-xs text-black/40 font-light mb-2 tracking-wide uppercase'>
                                            Order Items
                                        </h3>
                                        <div className='space-y-1'>
                                            {order.items.map((item, itemIndex) => (
                                                <p key={itemIndex} className='text-sm font-light text-black'>
                                                    {item.name} 
                                                    <span className='text-black/40'> × {item.quantity}</span>
                                                    {item.size && (
                                                        <span className='ml-2 px-2 py-0.5 bg-gray-100 text-xs text-black/60'>
                                                            {item.size}
                                                        </span>
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                        <p className='text-xs text-black/40 font-light mt-2'>
                                            {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                                        </p>
                                    </div>
                                </div>

                                {/* Middle: Customer & Payment Info */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    {/* Customer Info */}
                                    <div>
                                        <h3 className='text-xs text-black/40 font-light mb-3 tracking-wide uppercase flex items-center gap-2'>
                                            <User className='w-3 h-3' />
                                            Customer Details
                                        </h3>
                                        <div className='space-y-2'>
                                            <p className='text-sm font-serif text-black'>
                                                {order.address.firstName + " " + order.address.lastName}
                                            </p>
                                            <div className='flex items-start gap-2 text-sm text-black/60 font-light'>
                                                <MapPin className='w-4 h-4 flex-shrink-0 mt-0.5 text-black/40' />
                                                <div>
                                                    <p>{order.address.street}</p>
                                                    <p>{order.address.city}, {order.address.state}</p>
                                                    <p>{order.address.zipcode}</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-2 text-sm text-black/60 font-light'>
                                                <Phone className='w-4 h-4 text-black/40' />
                                                <p>{order.address.phone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Info */}
                                    <div>
                                        <h3 className='text-xs text-black/40 font-light mb-3 tracking-wide uppercase flex items-center gap-2'>
                                            <CreditCard className='w-3 h-3' />
                                            Payment Details
                                        </h3>
                                        <div className='space-y-2'>
                                            <div className='flex items-center justify-between text-sm'>
                                                <span className='text-black/60 font-light'>Method:</span>
                                                <span className='font-light text-black'>{order.paymentMethod}</span>
                                            </div>
                                            <div className='flex items-center justify-between text-sm'>
                                                <span className='text-black/60 font-light'>Payment:</span>
                                                <span className={`px-2 py-1 text-xs font-light border ${
                                                    order.payment 
                                                        ? 'bg-green-50 text-green-600 border-green-200' 
                                                        : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                                                }`}>
                                                    {order.payment ? 'Completed' : 'Pending'}
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between text-sm'>
                                                <span className='text-black/60 font-light'>Amount:</span>
                                                <span className='text-lg font-serif text-black'>{currency}{order.amount}</span>
                                            </div>
                                            <div className='flex items-center gap-2 text-xs text-black/40 font-light mt-3'>
                                                <Calendar className='w-3 h-3' />
                                                <span>{new Date(order.date).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'long', 
                                                    day: 'numeric' 
                                                })}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Status Selector */}
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-xs text-black/40 font-light mb-3 tracking-wide uppercase'>
                                            Order Status
                                        </h3>
                                        <select 
                                            value={order.status} 
                                            onChange={(e) => statusHandler(order._id, e)} 
                                            className={`w-full sm:w-48 px-4 py-2.5 text-sm font-light border outline-none transition-all duration-300 cursor-pointer ${getStatusColor(order.status)}`}
                                        >
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packing">Packing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for delivery">Out for delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>

                                    {/* Order ID */}
                                    <div className='mt-4'>
                                        <p className='text-xs text-black/30 font-light'>
                                            Order ID: #{order._id.slice(-8).toUpperCase()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            {orders.length > 0 && (
                <div className='mt-8 flex items-center justify-center gap-4'>
                    <div className='w-16 h-[1px] bg-black/10'></div>
                    <p className='text-xs text-black/40 font-light'>
                        Showing all {orders.length} orders
                    </p>
                    <div className='w-16 h-[1px] bg-black/10'></div>
                </div>
            )}
        </div>
      </div>
    </>
  )
}

export default Orders;