 

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
 import About from "./pages/aboutpages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/servicespage/Services";
 

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
           <Route element={<Layout/>}> 
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/connect" element={<Connect />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
