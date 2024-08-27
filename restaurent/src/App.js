import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
