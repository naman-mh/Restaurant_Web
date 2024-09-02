import React from "react";
import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../Assets/image1.jpeg";
import img2 from "../Assets/image2.jpeg";
import img3 from "../Assets/optical-chemist-uz7dXgkdvkU-unsplash.jpg";
import img4 from "../Assets/image3.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay, } from "swiper/modules";

function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`; }
  }
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
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 0 0" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        <SwiperSlide>
          <Box sx={{
            backgroundImage:"url{img1}"
          }}>
            
          </Box>
        </SwiperSlide>
        <SwiperSlide><Box sx={{
          height: "60vh",
          width: "100vw"

        }}>
          <img src={img2} />
        </Box></SwiperSlide>
        <SwiperSlide><Box sx={{
          height: "60vh",
          width: "100vw"

        }}>
          <img src={img3} />
        </Box></SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            height: "60vh",
            width: "100vw"

          }}>
            <img src={img3} />
          </Box></SwiperSlide>
        <SwiperSlide><Box sx={{
          height: "60vh",
          width: "100vw"

        }}>
          <img src={img4} />
        </Box></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home;
