import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import img1 from "../Assets/image1.jpeg"

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
          <Grid2 size={{ xs:12,sm : 12, md:6}}>
            <Box sx={{
              display:{xs:"500px" , sm:"600px"},
              padding:"30px",
              border:"1px solid red"
            }}>
            <Box sx={{
                backgroundImage:`url(${img1})`,
                height: {xs:"260px" , sm:"460px"},
                // width:{xs:"360px" , sm: '460px'},
                backgroundSize: "100% 100%",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                border:"2px solid black"
                
                }}>
               
            </Box>
            </Box>
          
              
          </Grid2>
          <Grid2 size={{sm : 12, md:6}}>
            <Typography variant="h5">
                  The beginning
            </Typography>
            <p>
            The Rajha opened its doors in 1998 for the first visitors. We have introduced to you the warm, full flavors of contemporary Indian cuisine.

            </p>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default About;
