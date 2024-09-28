import React from "react";
import { Box, Input, Typography, TextField,MenuItem, Grid2,  } from "@mui/material";
function Login() {
  return (
    <Box
      sx={{
        bgcolor: "pink",
        alignItems: "center",
        textAlign: "center",
        textWrap: "wrap",
      }}
    >
      <span> Make A</span>
      <Typography>Reservation</Typography>
      <p style={{ textWrap: "wrap", objectFit: "cover" }}>
        dhfhaefuaehfdsgb ruigfecbdfg hsefbweyidgvdvszd dzdgszdgerg vsdvv gv dgsv
        x sv xsvx d x dv vd x dvherfwedypagfugfweapfyg csdcfcd ccc be f cdj f dc
        cdc dvn vx; f n vdb vd ;n hbefb n fbfubfjas ufbfs cbefb f chfbf bs
        chfbfj sc awbf anva ebf vn hfas vsa dvhdchasvyafabefphvdpsydvcbs
        dhcsvhjfvrefhvbsdhcvzsdvse
      </p>
      <Grid2 container spacing={4}>
          <Grid2 size={{xs:12, sm:12, md:6}}>
          <Box sx={{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        gap:"20px"
      }}>
        <Input placeholder="Full Name " type="text" />
        <Input placeholder=" Phone Number  " type="number" />
        <Input placeholder="Email " type="email" />
        <TextField id="select" label="How Many" sx={{width:"200px"}} select>
          <MenuItem value="1">1 Person</MenuItem>
          <MenuItem value="2">2 Persons</MenuItem>
          <MenuItem value="3">3 Persons</MenuItem>
          <MenuItem value="4">4 Persons</MenuItem>
          <MenuItem value="5">5 Persons</MenuItem>
          <MenuItem value="6">6 Persons</MenuItem>
        </TextField>
        
          
            <TextField placeholder="Your Message" type="text" label="Your Message"
            multiline
            rows={5}
            ></TextField>
         
          <TextField  type="DATE"sx={{width:"200PX"}}
      >Date</TextField>
        
        
      </Box>
          </Grid2>
          <Grid2 size={{xs:12, sm:12, md:6}}>
          <Box>
        <Box sx={{
          border:"5px solid #FFA500",
          height:"350px",
          width:"350px"

        }}>
          hi
        </Box>
        </Box>
          </Grid2>
      </Grid2>
      
      
      
    </Box>
  );
}

export default Login;
