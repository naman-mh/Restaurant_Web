import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Box } from '@mui/material';
import img1 from "../Assets/image1.jpeg"


const SwiperWithButton = () => {
  return (
    <Box sx={{ position: 'relative', width: '80%', margin: 'auto' }}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Click Me
      </Button>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide style={{}}>
          <Box>

          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      {/* Overlapping button */}
      
    </Box>
  );
};

export default SwiperWithButton;