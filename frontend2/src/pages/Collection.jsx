// Collection.jsx
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { Filter, X, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    // This state is use to show/hide filter sidebar
    const [showFilters, setShowFilters] = useState(false);
    // This state is use to store filtered products
    const [filterProducts, setFilterProducts] = useState([]);

    // These two states is use to store filter section data : 
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    // This state is use to store sort type
    const [sortType, setSortType] = useState('relavent');

    // This function is use to toggle category
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    }

    // This function is use to toggle subcategory
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setSubCategory((prev) => [...prev, e.target.value]);
        }
    }

    // This function is use to apply filter
    const applyFilter = () => {
        // Copying products array
        let productsCopy = products.slice();

        // Lets create a condition to check if search is not empty
        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        // Filtering products
        if (category.length > 0) {
            // Filtering products by category
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }
        // Filtering products by subcategory
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }
        // Setting filtered products
        setFilterProducts(productsCopy);
    }

    const sortProducts = () => {
        // Copying filtered products array
        let fpCopy = filterProducts.slice();
        // Sorting products
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    }

    // This useEffect is use to apply filter
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    // This useEffect is use to sort products
    useEffect(() => {
        sortProducts();
    }, [sortType]);

    return (
        <>

            {/* Collection Content */}
            <div className='py-16 sm:py-24 lg:py-32 bg-[#f5f1e8]'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                        {/* Filter Sidebar */}
                        <div className='lg:w-64 flex-shrink-0'>
                            {/* Mobile Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className='lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white border border-black/10 mb-4'
                            >
                                <span className='flex items-center gap-2 font-light text-black'>
                                    <SlidersHorizontal className='w-4 h-4' />
                                    Filters
                                </span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Filters */}
                            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                                {/* Category Filter */}
                                <div className='bg-white border border-black/10 p-6'>
                                    <h3 className='text-sm font-light text-black tracking-[0.2em] uppercase mb-4'>
                                        Categories
                                    </h3>
                                    <div className='space-y-3'>
                                        {['Abstract', 'Landscape', 'Portrait', 'Contemporary'].map((cat) => (
                                            <label key={cat} className='flex items-center gap-3 cursor-pointer group'>
                                                <input
                                                    type="checkbox"
                                                    value={cat}
                                                    onChange={toggleCategory}
                                                    className='w-4 h-4 border border-black/20 checked:bg-[#d4a574] checked:border-[#d4a574] cursor-pointer'
                                                />
                                                <span className='text-sm font-light text-black/70 group-hover:text-black transition-colors duration-200'>
                                                    {cat}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Style Filter */}
                                <div className='bg-white border border-black/10 p-6'>
                                    <h3 className='text-sm font-light text-black tracking-[0.2em] uppercase mb-4'>
                                        Style
                                    </h3>
                                    <div className='space-y-3'>
                                        {['Modern', 'Traditional', 'Minimalist', 'Impressionist'].map((style) => (
                                            <label key={style} className='flex items-center gap-3 cursor-pointer group'>
                                                <input
                                                    type="checkbox"
                                                    value={style}
                                                    onChange={toggleSubCategory}
                                                    className='w-4 h-4 border border-black/20 checked:bg-[#d4a574] checked:border-[#d4a574] cursor-pointer'
                                                />
                                                <span className='text-sm font-light text-black/70 group-hover:text-black transition-colors duration-200'>
                                                    {style}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                {(category.length > 0 || subCategory.length > 0) && (
                                    <button
                                        onClick={() => {
                                            setCategory([]);
                                            setSubCategory([]);
                                        }}
                                        className='w-full px-4 py-3 border border-black/20 hover:border-[#d4a574] text-black hover:text-[#d4a574] font-light text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2'
                                    >
                                        <X className='w-4 h-4' />
                                        <span>CLEAR FILTERS</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className='flex-1'>
                            {/* Header with Sort */}
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
                                <div>
                                    <h2 className='text-2xl font-serif font-light text-black mb-2'>
                                        All Artworks
                                    </h2>
                                    <p className='text-sm text-black/60 font-light'>
                                        {filterProducts.length} {filterProducts.length === 1 ? 'piece' : 'pieces'} available
                                    </p>
                                </div>

                                {/* Sort Dropdown */}
                                <div className='relative'>
                                    <select
                                        onChange={(e) => setSortType(e.target.value)}
                                        className='appearance-none bg-white border border-black/10 focus:border-[#d4a574] pl-4 pr-10 py-3 text-sm font-light text-black outline-none cursor-pointer transition-colors duration-300'
                                    >
                                        <option value="relavent">Sort by: Relevant</option>
                                        <option value="low-high">Price: Low to High</option>
                                        <option value="high-low">Price: High to Low</option>
                                    </select>
                                    <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60 pointer-events-none' />
                                </div>
                            </div>

                            {/* Products Grid */}
                            {filterProducts.length > 0 ? (
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                                    {filterProducts.map((item, index) => (
                                        <ProductItem key={index} item={item} theme="light" />
                                    ))}
                                </div>
                            ) : (
                                <div className='bg-white border border-black/10 py-20 text-center'>
                                    <Filter className='w-16 h-16 text-black/20 mx-auto mb-6' />
                                    <h3 className='text-2xl font-serif font-light text-black mb-4'>
                                        No Artworks Found
                                    </h3>
                                    <p className='text-sm text-black/60 font-light mb-8'>
                                        Try adjusting your filters or search criteria
                                    </p>
                                    <button
                                        onClick={() => {
                                            setCategory([]);
                                            setSubCategory([]);
                                        }}
                                        className='inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300'
                                    >
                                        <X className='w-4 h-4' />
                                        <span>CLEAR FILTERS</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;