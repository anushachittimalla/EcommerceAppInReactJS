import React from 'react';
import ACDisplay from './ACDisplay';
import Tvdisplay from './Tvdisplay';
import MobileDisplay from './MobilesDisplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Productsdisplay = () => {
  return (
    <div className='bottom-section m-4'>

      <div className="swiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={'auto'}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>  <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4227babcdcb113c8.jpg?q=20' className='swiper-image' alt='' /> </SwiperSlide>
        <SwiperSlide><img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7b75e2d6d0c00375.png?q=20' alt='' className='swiper-image'/> </SwiperSlide>
        <SwiperSlide> <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/45d2c62d438ef715.jpg?q=20' alt='' className='swiper-image'/> </SwiperSlide>
      </Swiper>
  </div>

      <ACDisplay />
      <MobileDisplay />
      <Tvdisplay />

    </div>
  )
};

export default Productsdisplay;
