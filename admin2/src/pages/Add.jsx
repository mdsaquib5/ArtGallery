// Add.jsx (Admin)
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Upload, X, Image as ImageIcon, Save } from 'lucide-react';
import {backendUrl} from "../config/const";

const Add = ({ token }) => {
    // image states
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    // product states
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Abstract');
    const [subCategory, setSubCategory] = useState('Contemporary');
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('subCategory', subCategory);
            formData.append('bestseller', bestseller);
            formData.append('sizes', JSON.stringify(sizes));

            // image append
            image1 && formData.append('image1', image1);
            image2 && formData.append('image2', image2);
            image3 && formData.append('image3', image3);
            image4 && formData.append('image4', image4);

            // api call
            const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
                headers: { token }
            });
            toast.success('Product added successfully');
            // console.log(response.data);

            // Reset form
            setName('');
            setDescription('');
            setPrice('');
            setImage1(false);
            setImage2(false);
            setImage3(false);
            setImage4(false);
            setSizes([]);
            setBestseller(false);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div>
                <div className='mt-16'>
                    {/* Page Header */}
                    <div className='mb-12'>
                        <h1 className='text-3xl lg:text-4xl font-serif font-light text-black tracking-wide mb-2'>
                            Add New Artwork
                        </h1>
                        <p className='text-sm text-black/60 font-light'>
                            Upload and manage your gallery collection
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={onSubmitHandler} className='space-y-8'>
                        {/* Image Upload Section */}
                        <div className='bg-white border border-black/10 p-6 lg:p-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <ImageIcon className='w-5 h-5 text-[#d4a574]' />
                                <h2 className='text-lg font-serif font-light text-black tracking-wide'>
                                    Artwork Images
                                </h2>
                            </div>
                            <p className='text-sm text-black/60 font-light mb-6'>
                                Upload up to 4 high-quality images of the artwork
                            </p>

                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                                {/* Image 1 */}
                                <label htmlFor="image1" className='group relative aspect-square border-2 border-dashed border-black/10 hover:border-[#d4a574]/50 transition-all duration-300 cursor-pointer overflow-hidden bg-gray-50/50'>
                                    {!image1 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                                            <Upload className='w-8 h-8 text-black/20 group-hover:text-[#d4a574] transition-colors duration-300' />
                                            <span className='text-xs text-black/30 font-light'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <>
                                            <img src={URL.createObjectURL(image1)} className='w-full h-full object-cover' alt="Preview 1" />
                                            <button
                                                type='button'
                                                onClick={(e) => { e.preventDefault(); removeImage(1); }}
                                                className='absolute top-2 right-2 w-6 h-6 bg-black/80 hover:bg-red-600 border border-white/20 flex items-center justify-center transition-colors duration-300'
                                            >
                                                <X className='w-4 h-4 text-white' />
                                            </button>
                                        </>
                                    )}
                                    <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden accept="image/*" />
                                </label>

                                {/* Image 2 */}
                                <label htmlFor="image2" className='group relative aspect-square border-2 border-dashed border-black/10 hover:border-[#d4a574]/50 transition-all duration-300 cursor-pointer overflow-hidden bg-gray-50/50'>
                                    {!image2 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                                            <Upload className='w-8 h-8 text-black/20 group-hover:text-[#d4a574] transition-colors duration-300' />
                                            <span className='text-xs text-black/30 font-light'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <>
                                            <img src={URL.createObjectURL(image2)} className='w-full h-full object-cover' alt="Preview 2" />
                                            <button
                                                type='button'
                                                onClick={(e) => { e.preventDefault(); removeImage(2); }}
                                                className='absolute top-2 right-2 w-6 h-6 bg-black/80 hover:bg-red-600 border border-white/20 flex items-center justify-center transition-colors duration-300'
                                            >
                                                <X className='w-4 h-4 text-white' />
                                            </button>
                                        </>
                                    )}
                                    <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden accept="image/*" />
                                </label>

                                {/* Image 3 */}
                                <label htmlFor="image3" className='group relative aspect-square border-2 border-dashed border-black/10 hover:border-[#d4a574]/50 transition-all duration-300 cursor-pointer overflow-hidden bg-gray-50/50'>
                                    {!image3 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                                            <Upload className='w-8 h-8 text-black/20 group-hover:text-[#d4a574] transition-colors duration-300' />
                                            <span className='text-xs text-black/30 font-light'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <>
                                            <img src={URL.createObjectURL(image3)} className='w-full h-full object-cover' alt="Preview 3" />
                                            <button
                                                type='button'
                                                onClick={(e) => { e.preventDefault(); removeImage(3); }}
                                                className='absolute top-2 right-2 w-6 h-6 bg-black/80 hover:bg-red-600 border border-white/20 flex items-center justify-center transition-colors duration-300'
                                            >
                                                <X className='w-4 h-4 text-white' />
                                            </button>
                                        </>
                                    )}
                                    <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden accept="image/*" />
                                </label>

                                {/* Image 4 */}
                                <label htmlFor="image4" className='group relative aspect-square border-2 border-dashed border-black/10 hover:border-[#d4a574]/50 transition-all duration-300 cursor-pointer overflow-hidden bg-gray-50/50'>
                                    {!image4 ? (
                                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
                                            <Upload className='w-8 h-8 text-black/20 group-hover:text-[#d4a574] transition-colors duration-300' />
                                            <span className='text-xs text-black/30 font-light'>Upload Image</span>
                                        </div>
                                    ) : (
                                        <>
                                            <img src={URL.createObjectURL(image4)} className='w-full h-full object-cover' alt="Preview 4" />
                                            <button
                                                type='button'
                                                onClick={(e) => { e.preventDefault(); removeImage(4); }}
                                                className='absolute top-2 right-2 w-6 h-6 bg-black/80 hover:bg-red-600 border border-white/20 flex items-center justify-center transition-colors duration-300'
                                            >
                                                <X className='w-4 h-4 text-white' />
                                            </button>
                                        </>
                                    )}
                                    <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden accept="image/*" />
                                </label>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className='bg-white border border-black/10 p-6 lg:p-8'>
                            <h2 className='text-lg font-serif font-light text-black tracking-wide mb-6'>
                                Artwork Details
                            </h2>

                            <div className='space-y-6'>
                                {/* Product Name */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Artwork Title
                                    </label>
                                    <input
                                        type="text"
                                        className='w-full bg-gray-50 border border-black/10 focus:border-[#d4a574] px-4 py-3 text-black font-light outline-none transition-colors duration-300'
                                        placeholder='Enter artwork title'
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Product Description */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                        Description
                                    </label>
                                    <textarea
                                        rows="5"
                                        className='w-full bg-gray-50 border border-black/10 focus:border-[#d4a574] px-4 py-3 text-black font-light outline-none transition-colors duration-300 resize-none'
                                        placeholder='Describe the artwork, artist, style, medium, etc.'
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>

                                {/* Category, SubCategory, Price Row */}
                                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                                    {/* Category */}
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                            Category
                                        </label>
                                        <select
                                            className='w-full bg-gray-50 border border-black/10 focus:border-[#d4a574] px-4 py-3 text-black font-light outline-none transition-colors duration-300'
                                            onChange={(e) => setCategory(e.target.value)}
                                            value={category}
                                        >
                                            <option value="Abstract">Abstract</option>
                                            <option value="Landscape">Landscape</option>
                                            <option value="Portrait">Portrait</option>
                                            <option value="Contemporary">Contemporary</option>
                                            <option value="Classic">Classic</option>
                                        </select>
                                    </div>

                                    {/* Sub Category */}
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                            Style
                                        </label>
                                        <select
                                            className='w-full bg-gray-50 border border-black/10 focus:border-[#d4a574] px-4 py-3 text-black font-light outline-none transition-colors duration-300'
                                            onChange={(e) => setSubCategory(e.target.value)}
                                            value={subCategory}
                                        >
                                            <option value="Contemporary">Contemporary</option>
                                            <option value="Modern">Modern</option>
                                            <option value="Traditional">Traditional</option>
                                            <option value="Minimalist">Minimalist</option>
                                        </select>
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <label className='block text-sm text-black/60 font-light mb-2 tracking-wide'>
                                            Price ($)
                                        </label>
                                        <input
                                            className='w-full bg-gray-50 border border-black/10 focus:border-[#d4a574] px-4 py-3 text-black font-light outline-none transition-colors duration-300'
                                            type="number"
                                            placeholder='0.00'
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Sizes */}
                                <div>
                                    <label className='block text-sm text-black/60 font-light mb-3 tracking-wide'>
                                        Available Sizes
                                    </label>
                                    <div className='flex flex-wrap gap-3'>
                                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                            <button
                                                key={size}
                                                type='button'
                                                onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                                                className={`px-6 py-2 border transition-all duration-300 font-light text-sm tracking-wider ${sizes.includes(size)
                                                        ? 'bg-[#d4a574] border-[#d4a574] text-black'
                                                        : 'bg-white border-black/20 text-black/60 hover:border-[#d4a574] hover:text-black'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Bestseller Checkbox */}
                                <div className='flex items-center gap-3 pt-4'>
                                    <input
                                        type="checkbox"
                                        id="bestseller"
                                        onChange={() => setBestseller(prev => !prev)}
                                        checked={bestseller}
                                        className='w-5 h-5 bg-gray-50 border border-black/20 checked:bg-[#d4a574] checked:border-[#d4a574] cursor-pointer'
                                    />
                                    <label htmlFor="bestseller" className='text-sm text-black/60 font-light cursor-pointer select-none'>
                                        Add to Featured Collection
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className='flex items-center justify-between'>
                            <div className='w-16 h-[1px] bg-black/10'></div>
                            <button
                                type='submit'
                                className='group px-12 py-4 bg-black hover:bg-[#1a1a1a] text-white font-light text-sm tracking-[0.2em] transition-all duration-300 flex items-center gap-3'
                            >
                                <Save className='w-4 h-4' />
                                <span>SAVE ARTWORK</span>
                            </button>
                            <div className='w-16 h-[1px] bg-black/10'></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Add;