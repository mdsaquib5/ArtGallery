// About.jsx
import React from 'react';
import Title from '../components/Title';
import NewsLetter from '../components/NewsLetter';
import { Award, Users, Palette, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='relative py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0'>
          <img 
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&h=800&fit=crop" 
            alt="Gallery" 
            className='w-full h-full object-cover opacity-30'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl'>
            <div className='mb-8'>
              <span className='inline-block text-[#d4a574] text-xs tracking-[0.3em] font-light uppercase border border-[#d4a574]/30 px-4 py-2'>
                Our Story
              </span>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6'>
              Where Art Meets
              <span className='block mt-2 text-[#d4a574]'>Passion</span>
            </h1>
            <p className='text-lg text-white/60 font-light leading-relaxed max-w-2xl'>
              Curating exceptional artworks and connecting collectors with timeless masterpieces since 2024.
            </p>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className='py-6 sm:py-12 lg:py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Image */}
            <div className='relative'>
              <div className='aspect-[4/5] overflow-hidden'>
                <img 
                  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1000&fit=crop" 
                  alt="Gallery Interior" 
                  className='w-full h-full object-cover'
                />
              </div>
              {/* Decorative Elements */}
              <div className='absolute -bottom-6 -right-6 w-32 h-32 border border-[#d4a574]/30 -z-10'></div>
            </div>

            {/* Content */}
            <div className='space-y-8'>
              <div>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-black/20'></div>
                  <div className='w-1 h-1 bg-[#d4a574] rotate-45'></div>
                </div>
                <h2 className='text-3xl sm:text-4xl font-serif font-light text-black mb-6'>
                  Our Story
                </h2>
              </div>

              <p className='text-base text-black/70 font-light leading-relaxed'>
                Artisan Gallery was born from a profound passion for art and a vision to make exceptional artworks accessible to collectors worldwide. Our journey began with a simple belief: every space deserves to be transformed by the beauty and emotion of genuine artistic expression.
              </p>

              <p className='text-base text-black/70 font-light leading-relaxed'>
                Since our inception, we've dedicated ourselves to curating a diverse collection of original paintings, contemporary masterpieces, and timeless classics. Each artwork in our gallery is carefully selected by our team of art experts who understand the profound impact that genuine art can have on spaces and souls.
              </p>

              <div className='pt-4'>
                <h3 className='text-xl font-serif font-light text-black mb-4'>Our Mission</h3>
                <p className='text-base text-black/70 font-light leading-relaxed'>
                  Our mission is to bridge the gap between extraordinary artists and discerning collectors. We strive to provide an unparalleled gallery experience that combines authenticity, expertise, and personalized service, making art collecting both accessible and enriching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - DARK */}
      <div className='py-6 sm:py-12 lg:py-20 bg-[#0a0a0a] relative overflow-hidden'>
        {/* Decorative Background Elements */}
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-[#d4a574]/5 blur-[120px] rounded-full'></div>
        <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-[#d4a574]/5 blur-[120px] rounded-full'></div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Title 
              text1="WHY CHOOSE" 
              text2="Artisan Gallery"
              description="Experience the difference of working with true art connoisseurs"
              theme="dark"
            />
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Feature 1 */}
            <div className='bg-[#1a1a1a] border border-white/5 p-8 text-center group hover:border-[#d4a574]/30 transition-all duration-500'>
              <div className='w-16 h-16 border border-white/10 mx-auto mb-6 flex items-center justify-center group-hover:border-[#d4a574] transition-all duration-500'>
                <Award className='w-8 h-8 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
              </div>
              <h3 className='text-lg font-serif font-light text-white mb-3 tracking-wide'>
                Authenticity Guaranteed
              </h3>
              <div className='w-12 h-[1px] bg-white/10 mx-auto mb-4'></div>
              <p className='text-sm text-white/40 font-light leading-relaxed'>
                Every artwork comes with a certificate of authenticity from verified artists and galleries.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-[#1a1a1a] border border-white/5 p-8 text-center group hover:border-[#d4a574]/30 transition-all duration-500'>
              <div className='w-16 h-16 border border-white/10 mx-auto mb-6 flex items-center justify-center group-hover:border-[#d4a574] transition-all duration-500'>
                <Palette className='w-8 h-8 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
              </div>
              <h3 className='text-lg font-serif font-light text-white mb-3 tracking-wide'>
                Expert Curation
              </h3>
              <div className='w-12 h-[1px] bg-white/10 mx-auto mb-4'></div>
              <p className='text-sm text-white/40 font-light leading-relaxed'>
                Our collection is meticulously selected by art experts with decades of industry experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-[#1a1a1a] border border-white/5 p-8 text-center group hover:border-[#d4a574]/30 transition-all duration-500'>
              <div className='w-16 h-16 border border-white/10 mx-auto mb-6 flex items-center justify-center group-hover:border-[#d4a574] transition-all duration-500'>
                <Users className='w-8 h-8 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
              </div>
              <h3 className='text-lg font-serif font-light text-white mb-3 tracking-wide'>
                Personalized Service
              </h3>
              <div className='w-12 h-[1px] bg-white/10 mx-auto mb-4'></div>
              <p className='text-sm text-white/40 font-light leading-relaxed'>
                Our dedicated art consultants provide tailored recommendations and guidance throughout your journey.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='bg-[#1a1a1a] border border-white/5 p-8 text-center group hover:border-[#d4a574]/30 transition-all duration-500'>
              <div className='w-16 h-16 border border-white/10 mx-auto mb-6 flex items-center justify-center group-hover:border-[#d4a574] transition-all duration-500'>
                <Heart className='w-8 h-8 text-white/60 group-hover:text-[#d4a574] transition-colors duration-500' />
              </div>
              <h3 className='text-lg font-serif font-light text-white mb-3 tracking-wide'>
                Passion for Art
              </h3>
              <div className='w-12 h-[1px] bg-white/10 mx-auto mb-4'></div>
              <p className='text-sm text-white/40 font-light leading-relaxed'>
                We're driven by a genuine love for art and a commitment to enriching lives through exceptional pieces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />
    </>
  )
}

export default About