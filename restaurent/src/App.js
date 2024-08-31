import {  Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import { Box } from "@mui/material";


function App() {
  return (
    <Box>
      
        <NavComponent/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      
    </Box>
  );
}

export default App;
