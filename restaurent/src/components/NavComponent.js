import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";

const NavComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //habdle Drawer Toggler
  const handleToggler = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleToggler} sx={{ textAlign: "center",  }}>
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
         <Divider/>   
        <ul
          style={{
            
            display: "flex",
            alignItems: "center",
            flexDirection:"column",
            gap: "20px",
            marginTop:"30px"
          }}
        >
          <li style={{ listStyle: "none" }}>
            <Link to={"/"} style={{ textDecoration: "none", color:"black" }}>
              HOME
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              to={"/about"}
              style={{ textDecoration: "none",color:"black" }}
            >
              ABOUT
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              to={"/menu"}
              style={{ textDecoration: "none", color:"black" }}
            >
              MENU
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              to={"/reservation"}
              style={{ textDecoration: "none", color:"black" }}
            >
              RESERVATION
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none",color:"black" }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{ bgcolor: "black", position: { sm: "block", xs: "block" } }}
        >
          <Toolbar>
            <IconButton
              onClick={handleToggler}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ m: 2, display: { sm: "none" } }}
            >
              <MenuIcon  />
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
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                
              }}
            >
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    HOME
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link
                    to={"/about"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    ABOUT
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link
                    to={"/menu"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    MENU
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link
                    to={"/reservation"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    RESERVATION
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link
                    to={"/contact"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer 
          variant="temporary" 
          open={mobileOpen} 
          onClose={handleToggler}

          sx={{
            display:{sm:"block", sm:"none"},
            "& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px",

            }
          }}>
            {drawer}
          </Drawer>

        </Box>
      </Box>
    </>
  );
};

export default NavComponent;
