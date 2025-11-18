 

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/aboutpages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import OurServices from "./pages/servicespage/OurServices";
 

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
           <Route element={<Layout/>}> 
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<OurServices/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/connect" element={<Connect />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
