import React from 'react'

const GalleryPage = () => {
  return (
    <div className='container mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/badroom.jpg" alt="gallery0" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery1.jpg" alt="gallery1" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery2.jpg" alt="gallery2" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/swiper1.jpg" alt="swiper1" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery11.jpg" alt="gallery11" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/living.jpg" alt="living" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery14.jpg" alt="gallery14" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery15.jpg" alt="gallery15" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery12.jpg" alt="gallery12" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery7.jpg" alt="gallery7" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery11.jpg" alt="gallery11" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all duration-200' src="/image/gallery3.jpg" alt="gallery3" />
        </div>
      </div>
    </div>
  )
}

export default GalleryPage