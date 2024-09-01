import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px ",
        height: "10vh",
        flexDirection:"row"
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "5px",
          color:"black"
        }}
      >
        <RestaurantIcon />
        <Typography>My Restaurant</Typography>
      </Box>
      <Box>
        <Button LinkComponent={Link} to="/"
          sx={{
            color: "#919191",
          }}
        >
          home
        </Button>
        <Button LinkComponent={Link} to="/about"
          sx={{
            color: "#919191",
          }}
        >
          About
        </Button>
        <Button LinkComponent={Link} to="/contact"
          sx={{
            color: "#919191",
          }}
        >
          Contact
        </Button>
        <Button LinkComponent={Link} to="/reservation"
          sx={{
            color: "#919191",
          }}
        >
          Reservation
        </Button>
        <Button LinkComponent={Link} to="/menu"
          sx={{
            color: "#919191",
          }}
        >
          Menu
        </Button>
      </Box>
    </AppBar>
  );
};

export default NavComponent;
