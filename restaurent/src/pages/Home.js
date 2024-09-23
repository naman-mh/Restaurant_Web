import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import img1 from "../Assets/image2.jpeg"
const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation ]}
        className="mySwiper"
      >
         <SwiperSlide>
         <img src={img1}></img> 
          </SwiperSlide>
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        <SwiperSlide><img src={img1}></img></SwiperSlide>

      </Swiper>
    </>
  )
}

export default Home
