import {
  AppBar,
  Box,
  colors,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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
    <Box onClick={handleToggler} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "#FFA500",
          flexGrow: 1,
        }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />
      <List
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <ListItem style={{ listStyle: "none" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            HOME
          </Link>
        </ListItem>
        <ListItem style={{ listStyle: "none" }}>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "black" }}
          >
            ABOUT
          </Link>
        </ListItem>
        <ListItem style={{ listStyle: "none" }}>
          <Link to={"/menu"} style={{ textDecoration: "none", color: "black" }}>
            MENU
          </Link>
        </ListItem>
        <ListItem style={{ listStyle: "none" }}>
          <Link
            to={"/reservation"}
            style={{ textDecoration: "none", color: "black" }}
          >
            RESERVATION
          </Link>
        </ListItem>
        <ListItem style={{ listStyle: "none" }}>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "black" }}
          >
            CONTACT
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{ bgcolor: "white", position: "block", height: "9vh" }}
        >
          <Toolbar>
            <IconButton
              onClick={handleToggler}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ m: 2, display: { sm: "none" } , color:"black" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#FFA500",
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
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <ListItem
                  Link={Link}
                  to="/"
                  sx={{
                    listStyle: "none",
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { color: "#FFA500" },
                    cursor: "pointer",
                  }}
                >
                  HOME
                </ListItem>
                <ListItem
                  Link={Link}
                  to="/about"
                  sx={{
                    listStyle: "none",
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { color: "#FFA500" },
                    cursor: "pointer",
                  }}
                >
                  ABOUT
                </ListItem>
                <ListItem
                  Link={Link}
                  to="/menu"
                  sx={{
                    listStyle: "none",
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { color: "#FFA500" },
                    cursor: "pointer",
                  }}
                >
                  MENU
                </ListItem>
                <ListItem
                  Link={Link}
                  to="/reservation"
                  sx={{
                    listStyle: "none",
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { color: "#FFA500" },
                    cursor: "pointer",
                  }}
                >
                  RESERVATION
                </ListItem>
                <ListItem
                  Link={Link}
                  to="/contact"
                  sx={{
                    listStyle: "none",
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { color: "#FFA500" },
                    cursor: "pointer",
                  }}
                >
                  CONTACT
                </ListItem>
              </List>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleToggler}
            sx={{
              display: { sm: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};
export default NavComponent;
