import {  Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import Reservation from "./pages/Reservation"
import About from "./pages/About";
import Contact from "./pages/Contact";
import RestMenu from "./pages/RestMenu";
import { Box } from "@mui/material";


function App() {
  return (
    <Box>
      
        <NavComponent/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/menu" element={<RestMenu/>}/>
        </Routes>
      
    </Box>
  );
}

export default App;
