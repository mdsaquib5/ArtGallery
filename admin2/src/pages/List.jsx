// List.jsx (Admin)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Trash2, Package, Search } from 'lucide-react';

export const currency = "₹";

const List = ({ token }) => {
    const [list, setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/product/list');
            if (response.data.success) {
                setList(response.data.products);
                toast.success('Product list fetched successfully');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    const removeProduct = async (id) => {
        console.log("Remove product id", id);
        try {
            const response = await axios.post(`http://localhost:4000/api/product/remove`, { headers: { token }, id });
            if (response.data.success) {
                toast.success('Product deleted successfully');
                // after delete the product from the list
                await fetchList();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // Filter products based on search
    const filteredList = list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <div className='mt-16'>
                    {/* Page Header */}
                    <div className='mb-8'>

                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                            <div>
                                <h1 className='text-3xl lg:text-4xl font-serif font-light text-black tracking-wide mb-2'>
                                    All Artworks
                                </h1>
                                <p className='text-sm text-black/60 font-light flex items-center gap-2'>
                                    <Package className='w-4 h-4' />
                                    <span>{list.length} artworks in gallery</span>
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className='relative'>
                                <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30' />
                                <input
                                    type="text"
                                    placeholder='Search artworks...'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className='w-full sm:w-80 pl-11 pr-4 py-3 bg-gray-50 border border-black/10 focus:border-[#d4a574] text-black font-light outline-none transition-colors duration-300 text-sm'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Products Table */}
                    <div className='bg-white border border-black/10 overflow-hidden'>
                        {/* Table Header - Hidden on mobile */}
                        <div className='hidden md:grid md:grid-cols-[80px_1fr_150px_120px_100px] items-center gap-4 px-6 py-4 bg-gray-50 border-b border-black/10'>
                            <div className='text-xs font-light text-black/60 tracking-wide uppercase'>Image</div>
                            <div className='text-xs font-light text-black/60 tracking-wide uppercase'>Artwork Title</div>
                            <div className='text-xs font-light text-black/60 tracking-wide uppercase'>Category</div>
                            <div className='text-xs font-light text-black/60 tracking-wide uppercase'>Price</div>
                            <div className='text-xs font-light text-black/60 tracking-wide uppercase text-center'>Action</div>
                        </div>

                        {/* Table Body */}
                        <div className='divide-y divide-black/5'>
                            {filteredList.length === 0 ? (
                                <div className='py-16 text-center'>
                                    <Package className='w-12 h-12 text-black/20 mx-auto mb-4' />
                                    <p className='text-sm text-black/40 font-light'>
                                        {searchTerm ? 'No artworks found matching your search' : 'No artworks in gallery yet'}
                                    </p>
                                </div>
                            ) : (
                                filteredList.map((item, index) => (
                                    <div
                                        key={index}
                                        className='grid grid-cols-[80px_1fr_auto] md:grid-cols-[80px_1fr_150px_120px_100px] items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        {/* Image */}
                                        <div className='w-16 h-16 border border-black/10 overflow-hidden bg-gray-50'>
                                            <img
                                                src={item.image[0].url}
                                                className='w-full h-full object-cover'
                                                alt={item.name}
                                            />
                                        </div>

                                        {/* Name */}
                                        <div>
                                            <h3 className='text-sm font-serif text-black font-light mb-1'>
                                                {item.name}
                                            </h3>
                                            <p className='text-xs text-black/40 font-light md:hidden'>
                                                {item.category} • {currency}{item.price}
                                            </p>
                                        </div>

                                        {/* Category - Hidden on mobile */}
                                        <div className='hidden md:block'>
                                            <span className='inline-block px-3 py-1 bg-gray-100 border border-black/10 text-xs font-light text-black/60'>
                                                {item.category}
                                            </span>
                                        </div>

                                        {/* Price - Hidden on mobile */}
                                        <div className='hidden md:block text-sm font-light text-black'>
                                            {currency} {item.price}
                                        </div>

                                        {/* Action */}
                                        <div className='flex justify-center'>
                                            <button
                                                onClick={() => {
                                                    if (window.confirm('Are you sure you want to delete this artwork?')) {
                                                        removeProduct(item._id);
                                                    }
                                                }}
                                                className='group p-2 border border-black/10 hover:border-red-500 hover:bg-red-50 transition-all duration-300'
                                                title='Delete artwork'
                                            >
                                                <Trash2 className='w-4 h-4 text-black/40 group-hover:text-red-500 transition-colors duration-300' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Table Footer */}
                    {filteredList.length > 0 && (
                        <div className='mt-6 flex items-center justify-between px-6'>
                            <p className='text-sm text-black/40 font-light'>
                                Showing {filteredList.length} of {list.length} artworks
                            </p>
                            <div className='w-16 h-[1px] bg-black/10'></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default List;