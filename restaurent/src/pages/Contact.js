import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Box } from '@mui/material';


const SwiperWithButton = () => {
  return (
    <Box sx={{ position: 'relative', width: '80%', margin: 'auto' }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      {/* Overlapping button */}
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
    </Box>
  );
};

export default SwiperWithButton;