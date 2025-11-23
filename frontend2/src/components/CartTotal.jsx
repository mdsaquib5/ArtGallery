// CartTotal.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { getCartAmount, currency, deliveryFee } = useContext(ShopContext); 
  return (
    <>
        <div className='w-full bg-white border border-black/10 p-6 lg:p-8'>
            {/* Header */}
            <div className='mb-6'>
                <div className='flex items-center gap-4 mb-4'>
                    <div className='w-8 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                </div>
                <h2 className='text-xl font-serif font-light text-black tracking-wide'>
                    Order Summary
                </h2>
            </div>

            {/* Price Breakdown */}
            <div className='space-y-4'>
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                    <p className='text-sm text-black/60 font-light'>Subtotal</p>
                    <p className='text-sm font-light text-black'>{currency}{getCartAmount()}.00</p>
                </div>
                
                <div className='h-[1px] bg-black/5'></div>
                
                {/* Shipping Fee */}
                <div className="flex justify-between items-center">
                    <p className='text-sm text-black/60 font-light'>Shipping Fee</p>
                    <p className='text-sm font-light text-black'>{currency}{deliveryFee}.00</p>
                </div>
                
                <div className='h-[1px] bg-black/5'></div>
                
                {/* Total */}
                <div className="flex justify-between items-center pt-2">
                    <p className='text-base font-serif text-black tracking-wide'>Total</p>
                    <p className='text-2xl font-serif text-black'>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</p>
                </div>
            </div>

            {/* Decorative Line */}
            <div className='flex items-center gap-4 mt-6'>
                <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                <div className='flex-1 h-[1px] bg-gradient-to-r from-black/20 to-transparent'></div>
            </div>
        </div> 
    </>
  )
}

export default CartTotal;