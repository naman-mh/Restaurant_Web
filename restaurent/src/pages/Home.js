import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../Assets/image2.jpeg";
import { Button, Box, Typography } from "@mui/material";
const Home = () => {
  return (
    <>
      <Box style={{ position: "relative" }}>
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <span style={{fontFamily:"cursive", color:"#FFA500"}}>
              Welcome
            </span>
            <img src={img1} height={"420px"} width={"100%"}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} height={"420px"} width={"100%"}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} height={"420px"} width={"100%"}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} height={"420px"} width={"100%"}></img>
          </SwiperSlide>
        </Swiper>
          <Button variant="contained"
        color="primary"
        sx={{
          zIndex:999,
          top: '-200px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor:"blue"
        }}>Submit</Button>
        
        
      </Box>
    </>
  );
};

export default Home;
