import React from 'react'
import { Box, colors, Typography } from '@mui/material'
import img1 from '../Assets/brooke-lark-R18ecx07b3c-unsplash.jpg'
import img2 from "../Assets/istockphoto-1158605322-1024x1024.jpg"
import img3 from "../Assets/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg"
import img4 from "../Assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"
function Home() {
  return (
    <Box sx={{
      height:"93vh",
      backgroundImage:`url(${img4})`,
      }}>
      <Box>
        <Typography variant='h1' color='#919191'>FOR THE LOVE</Typography>
      </Box>
      <Box>
      <Typography variant='h1' color='#919191' >
        OF COFFEE
      </Typography>
        
      </Box>
    </Box>
  )
}

export default Home;