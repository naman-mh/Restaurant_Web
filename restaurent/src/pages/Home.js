import React from "react";
import { Box, Typography } from "@mui/material";
import img1 from "../Assets/image1.jpeg";
import img2 from "../Assets/image2.jpeg";
import img3 from "../Assets/optical-chemist-uz7dXgkdvkU-unsplash.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules";

function Home() {
  return (
    <Swiper
      pagination={true} modules={[Pagination]} >
      <SwiperSlide>
        <Box sx={{
          height: "70vh",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
        }}
        ></Box>
        <Typography>slide1</Typography>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{
          height: "70vh",
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
        }}>

        </Box>
          <Typography>slide2</Typography>
      </SwiperSlide>
    </Swiper>

  );
}

export default Home;
