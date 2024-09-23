import { AppBar, Box,  Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const NavComponent = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black", position:{sm:"block", xs:"block"}  }}>
          <Toolbar>
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
              
              
            }}>
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/menu"}>MENU</Link>
              </li>
              <li>
                <Link to={"/reservation"}>RESERVATION</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
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
