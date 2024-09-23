import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ maxWidth:"1290px",  margin:"0 auto", }} >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "50px"
        }}
      >
        <Typography variant="h5" component={"div"} color="#FFA500">
          Discover
        </Typography>
        <Typography variant="h5">ABOUT US</Typography>
      </Box>
      <Box mt={"20px"}>
        <Grid2 container columnSpacing={4}>
          <Grid2 size={{sm : 12, md:6}}>
            <Box sx={{}}>
              {/* <img style={{objectFit:"contain"}} src="https://technext.github.io/Osteriax/assets/img/about-us.png" /> */}
            </Box>
          </Grid2>
          <Grid2 size={{sm : 12, md:6}}>
            <p>
              lorevnfdvjaenfaejncsjanregeanfoasnvrejgnSDjonzfgjae nfjds vfd bfnv
              sdcnjfgnsjrg fdsjv bdzfv arj dvjz dvj vjsd cvzfv cnjdfvdcj svj
              dcjd variantc dcj dcjc dcj v dvj zdvj zdvj vs dv zdjvzdsv fc vzdv
              vdv 'dvdv sdvs dvvzdkvs vjc bzdjf '
            </p>
            
            <ul>
              <li>
                1
              </li>
              <li>
                1
              </li>
              <li>
                1
              </li>
              <li>
                1
              </li>
              <li>
                1
              </li>
              <li>
                1
              </li>
              </ul>
              <p>
            lorevnfdvjaenfaejncsjanregeanfoasnvrejgnSDjonzfgjae nfjds vfd bfnv
              sdcnjfgnsjrg fdsjv bdzfv arj dvjz dvj vjsd cvzfv cnjdfvdcj svj
              dcjd variantc dcj dcjc dcj v dvj zdvj zdvj vs dv zdjvzdsv fc vzdv
              vdv 'dvdv sdvs dvvzdkvs vjc bzdjf '
            </p>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default About;
