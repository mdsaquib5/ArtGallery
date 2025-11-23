// Sidebar.jsx (Admin)
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, Package, ShoppingBag, LayoutDashboard, Users, Settings } from 'lucide-react';

const Sidebar = () => {
    return (
        <>
            <div className='fixed left-0 top-20 bottom-0 w-64 bg-[#0a0a0a] border-r border-white/5 overflow-y-auto'>
                <nav className='flex flex-col gap-2 p-6'>

                    {/* Add Items */}
                    <NavLink
                        to='/add'
                        className={({ isActive }) => `
              group flex items-center gap-4 px-4 py-3 border-l-2 transition-all duration-300
              ${isActive
                                ? 'border-[#d4a574] bg-[#d4a574]/10 text-[#d4a574]'
                                : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                            }
            `}
                    >
                        {({ isActive }) => (
                            <>
                                <Plus className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#d4a574]' : 'text-white/40 group-hover:text-white'}`} />
                                <span className='font-light text-sm tracking-wide'>Add Artwork</span>
                            </>
                        )}
                    </NavLink>

                    {/* List Items */}
                    <NavLink
                        to='/list'
                        className={({ isActive }) => `
              group flex items-center gap-4 px-4 py-3 border-l-2 transition-all duration-300
              ${isActive
                                ? 'border-[#d4a574] bg-[#d4a574]/10 text-[#d4a574]'
                                : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                            }
            `}
                    >
                        {({ isActive }) => (
                            <>
                                <Package className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#d4a574]' : 'text-white/40 group-hover:text-white'}`} />
                                <span className='font-light text-sm tracking-wide'>All Artworks</span>
                            </>
                        )}
                    </NavLink>

                    {/* Orders */}
                    <NavLink
                        to='/orders'
                        className={({ isActive }) => `
              group flex items-center gap-4 px-4 py-3 border-l-2 transition-all duration-300
              ${isActive
                                ? 'border-[#d4a574] bg-[#d4a574]/10 text-[#d4a574]'
                                : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                            }
            `}
                    >
                        {({ isActive }) => (
                            <>
                                <ShoppingBag className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#d4a574]' : 'text-white/40 group-hover:text-white'}`} />
                                <span className='font-light text-sm tracking-wide'>Orders</span>
                            </>
                        )}
                    </NavLink>

                    {/* Divider */}
                    <div className='my-4 h-[1px] bg-white/5'></div>
                </nav>

                {/* Bottom Info */}
                <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-white/20'>
                    <div className='text-center'>
                        <p className='text-xs text-white/50 font-light tracking-wider'>
                            ARTISAN GALLERY
                        </p>
                        <p className='text-[10px] text-white/50 font-light mt-1'>
                            Admin v1.0
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacer for main content */}
            <div className='w-64'></div>
        </>
    )
}

export default Sidebar;