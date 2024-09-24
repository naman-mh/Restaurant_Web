import React from "react";
import { Box, Input, Typography, TextField,MenuItem, TextareaAutosize } from "@mui/material";
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
        
          <TextareaAutosize>
            <TextField placeholder="Your Message" type="text" label="Your Message"
            sx={{height:"200px"}}></TextField>
          </TextareaAutosize>
          <TextField  type="DATE"sx={{width:"200PX"}}
      >Date</TextField>
        
        
      </Box>
    </Box>
  );
}

export default Login;
