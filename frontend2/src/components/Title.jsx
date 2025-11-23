// Title.jsx
import React from 'react';

const Title = ({text1, text2, description, theme = "dark"}) => {
    const isDark = theme === "dark";
    
    return (
        <>
            <div className="text-center space-y-6">
                {/* Decorative Line Top */}
                <div className='flex items-center justify-center gap-4 mb-8'>
                    <div className={`w-12 h-[1px] ${
                        isDark 
                            ? 'bg-gradient-to-r from-transparent to-white/20' 
                            : 'bg-gradient-to-r from-transparent to-black/20'
                    }`}></div>
                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                    <div className={`w-12 h-[1px] ${
                        isDark 
                            ? 'bg-gradient-to-l from-transparent to-white/20' 
                            : 'bg-gradient-to-l from-transparent to-black/20'
                    }`}></div>
                </div>

                {/* Title Text */}
                <div className="inline-flex flex-col items-center gap-3">
                    <h2 className="text-xs sm:text-sm text-[#d4a574] tracking-[0.3em] font-light uppercase">
                        {text1}
                    </h2>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-light tracking-wide ${
                        isDark ? 'text-white' : 'text-black'
                    }`}>
                        {text2}
                    </h2>
                </div>

                {/* Description (Optional) */}
                {description && (
                    <p className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light mt-6 ${
                        isDark ? 'text-white/40' : 'text-black/60'
                    }`}>
                        {description}
                    </p>
                )}

                {/* Decorative Line Bottom */}
                <div className='flex items-center justify-center gap-4 mt-8'>
                    <div className={`w-12 h-[1px] ${
                        isDark 
                            ? 'bg-gradient-to-r from-transparent to-white/20' 
                            : 'bg-gradient-to-r from-transparent to-black/20'
                    }`}></div>
                    <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                    <div className={`w-12 h-[1px] ${
                        isDark 
                            ? 'bg-gradient-to-l from-transparent to-white/20' 
                            : 'bg-gradient-to-l from-transparent to-black/20'
                    }`}></div>
                </div>
            </div>
        </>
    )
}

export default Title;