import React from 'react';
import '../css/picture-gallery.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import my_image from '../assets/images/p4-final.webp';

//THE IMAGE IMPORTS
import slider1 from '../assets/images/slider_images/converted/slider1.webp'
import slider2 from '../assets/images/slider_images/converted/slider2.webp'
import slider3 from '../assets/images/slider_images/converted/slider3.webp'
import slider4 from '../assets/images/slider_images/converted/slider4.webp'
import slider5 from '../assets/images/slider_images/converted/slider5.webp'
import slider6 from '../assets/images/slider_images/converted/slider6.webp'
import slider7 from '../assets/images/slider_images/converted/slider7.webp'
import slider8 from '../assets/images/slider_images/converted/slider8.webp'
import slider9 from '../assets/images/slider_images/converted/slider9.webp';
import slider10 from '../assets/images/slider_images/converted/slider10.webp';
import slider11 from '../assets/images/slider_images/converted/slider11.webp';
import slider12 from '../assets/images/slider_images/converted/slider12.webp';
import slider13 from '../assets/images/slider_images/converted/slider13.webp';
import slider14 from '../assets/images/slider_images/converted/slider14.webp';
import slider15 from '../assets/images/slider_images/converted/slider15.webp';
import slider16 from '../assets/images/slider_images/converted/slider16.webp';
// import slider17 from '../assets/images/slider_images/converted/slider17.webp';
// import slider18 from '../assets/images/slider_images/converted/slider18.webp';
// import slider19 from '../assets/images/slider_images/converted/slider19.webp';
// import slider20 from '../assets/images/slider_images/converted/slider20.webp';




const imagesArray = [
  slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8,
  slider9, slider10, slider11, slider12, slider13, slider14, slider15,
  slider16,];



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PictureGallery = () => {
  return (
    <div className='picture-gallery'>

      <div className='pg-head'>
        <h2>Witness some slides of greatness</h2>
        <p>Swipe left or right to see more pictures</p>
      </div>

      <div className='pg-body'>
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
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {imagesArray.map((image, index) => (
            <SwiperSlide key={index}>
              <img className='one-image' src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default PictureGallery;
