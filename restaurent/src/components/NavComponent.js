import { AppBar, Box,  IconButton,  Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from '@mui/icons-material/Menu';


const NavComponent = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black", position:{sm:"block", xs:"block"}  }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{m:2 , display:{sm:"none"}}}>
                <MenuIcon/>
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "goldenrod",
                flexGrow: 1,
              }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={ {
              
              display:{xs:"none", sm:"block"}
              
            }}>
            <ul style={{
              
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              gap:"20px"
            }}>
              <li style={{listStyle:'none'}}>
                <Link to={"/"} style={{textDecoration:"none", color:"white"}}>HOME</Link>
              </li>
              <li style={{listStyle:'none'}}>
                <Link to={"/about"} style={{textDecoration:"none", color:"white"}}>ABOUT</Link>
              </li>
              <li style={{listStyle:'none'}}>
                <Link to={"/menu"} style={{textDecoration:"none", color:"white"}}>MENU</Link>
              </li>
              <li style={{listStyle:'none'}}>
                <Link to={"/reservation"} style={{textDecoration:"none", color:"white"}}>RESERVATION</Link>
              </li>
              <li style={{listStyle:'none'}}>
                <Link to={"/contact"} style={{textDecoration:"none", color:"white"}}>CONTACT</Link>
              </li>
              
         </ul>
            </Box>
          </Toolbar>
              
        </AppBar>
      </Box>
    </>
  );
};

export default NavComponent;
