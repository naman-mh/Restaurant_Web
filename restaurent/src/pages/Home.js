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
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: { xs: "240px", sm: "600px" },
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
                  paddingTop: "90px",
                  fontWeight: 400,
                  fontSize: { xs: "50px", sm: "100px" },
                }}
              >
                Welcome
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  fontSize: { xs: "15px", sm: "50px" },
                }}
              >
                To The My Restaurant{" "}
              </Typography>
              <Box
                sx={{
                  display: {
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <p style={{ textWrap: "wrap", color: "white" }}>
                  fjsdfewbfawefbdubagjbavjvb vnvdnvs nvdbvbva buboeavbeb
                  bvbvabvabvv vubrvbverbvefb ubvdbvbvaj bubbfabrbreg{" "}
                </p>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: { xs: "240px", sm: "600px" },
                backgroundSize: "100% 100%",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
                textWrap: "wrap",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFA500",
                  fontFamily: "tangerine ",
                  paddingTop: "90px",
                  fontWeight: 400,
                  fontSize: { xs: "50px", sm: "100px" },
                }}
              >
                The Elegant
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  fontSize: { xs: "15px", sm: "50px" },
                  textWrap: "wrap",
                }}
              >
                Italian Restaurant
              </Typography>
              <Box
                sx={{
                  display: {
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <p style={{ textWrap: "wrap", color: "white" }}>
                  fjsdfewbfawefbdubagjbavjvb vnvdnvs nvdbvbva buboeavbeb
                  bvbvabvabvv vubrvbverbvefb ubvdbvbvaj bubbfabrbreg{" "}
                </p>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: `url(${img1})`,
                width: "100vw",
                height: { xs: "240px", sm: "600px" },
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
                  paddingTop: "90px",
                  fontWeight: 400,
                  fontSize: { xs: "50px", sm: "100px" },
                }}
              >
                Delicious
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  fontSize: { xs: "15px", sm: "50px" },
                }}
              >
                Spicy Masalas
              </Typography>
              <Box
                sx={{
                  display: {
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <p style={{ textWrap: "wrap", color: "white" }}>
                  fjsdfewbfawefbdubagjbavjvb vnvdnvs nvdbvbva buboeavbeb
                  bvbvabvabvv vubrvbverbvefb ubvdbvbvaj bubbfabrbreg{" "}
                </p>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Button
          variant="contained"
          color="primary"
          sx={{
            zIndex: 999,
            top: "-100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            color: "#FFA500",
            "&:hover": {
              bgcolor: "#FFA500",
              color: "white",
            },
            display: {
              xs: "none",
              sm: "block",
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
