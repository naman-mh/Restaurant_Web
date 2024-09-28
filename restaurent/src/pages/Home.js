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
      <Box style={{ position: "relative" ,height:"50vh" }}>
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
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: "420px",
                backgroundSize: "100% 100%",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
                
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFA500",
                  fontFamily: "tangerine ",
                  paddingTop: "60px",
                  fontWeight: 400,
                  fontSize: "100px",
                  
                }}
              >
                Welcome
              </Typography>
              <Typography  variant="h3"sx={{  fontWeight: 600, color:"white", fontSize:'50px' }}>To The My Restaurant </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: "420px",
                backgroundSize: "100% 100%",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>ha bhai </Typography>
              <Typography>well done </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: "420px",
                backgroundSize: "100% 100%",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography>ha bhai </Typography>
              <Typography>well done </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Box>hi hello</Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            zIndex: 999,
            top: "-120px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            color: "#FFA500",
            "&:hover": {
              bgcolor: "#FFA500",
              color: "white",
            },
          }}
        >
          Book A Table{" "}
        </Button>
      </Box>
    </>
  );
};
export default Home;
