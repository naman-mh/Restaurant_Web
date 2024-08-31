import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#3d3d3d',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px ",
        height: "7vh",
        flexDirection:"row"
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "5px",
          color:"#919191"
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
        <Button LinkComponent={Link} to="/login"
          sx={{
            color: "#919191",
          }}
        >
          Login
        </Button>
        <Button LinkComponent={Link} to="/signUp"
          sx={{
            color: "#919191",
          }}
        >
          SignUp
        </Button>
      </Box>
    </AppBar>
  );
};

export default NavComponent;
