import React from 'react';
import '../css/picture-gallery.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import my_image from '../assets/images/p4-final.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PictureGallery = () => {
  return (
    <div className='picture-gallery'>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={'coverflow'}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {Array(7).fill().map((_, index) => (
          <SwiperSlide key={index}>
            <img className='one-image' src={my_image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PictureGallery;
