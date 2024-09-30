import {  Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import { Box } from "@mui/material";
import About from "./pages/About";


function App() {
  return (
    <Box>
      
      
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          
        </Routes>
      
    </Box>
  );
}

export default App;
