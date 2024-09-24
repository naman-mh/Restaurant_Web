import {  Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import { Box } from "@mui/material";


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
