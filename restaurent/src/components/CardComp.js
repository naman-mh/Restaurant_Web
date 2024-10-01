import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import img1 from "../Assets/image3.jpeg";

const CardComp = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        height: "240px",
        display:"flex",
        justifyContent:"space-between"
      }}
    >
      <Box
        sx={{
          
          
          
        }}
      >
        <Grid2 container spacing={5} >
          <Grid2 size={{ sx: 12 ,sm:4 }}>
            <Box sx={{ bgcolor: "red", height: "240px", alignContent:"center" }}>
              <h1>
                <CountUp start={0} end={200} duration={2.5} />+
              </h1>
              <p>Likes</p>
            </Box>
          </Grid2 >
          <Grid2 size={{ sx: 12 ,sm:4 }}>
            <Box sx={{ textAlign: "center" }}>
              <h1>
                <CountUp start={0} end={10} duration={2.5} />+
              </h1>
              <p>Restaurant Branches</p>
            </Box>
          </Grid2>
          <Grid2 size={{ sx: 12 ,sm:4 }}>
            <Box sx={{ textAlign: "center" }}>
              <h1>
                <CountUp start={0} end={1500} duration={2.5} />+
              </h1>
              <p>Happy Customers</p>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default CardComp;
