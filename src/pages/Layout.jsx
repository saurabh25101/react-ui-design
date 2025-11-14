 import { Outlet } from "react-router-dom";
import ContactBar from "../components/ContactBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubscribeSection from "../components/SubscribeSection";
 

function Layout() {
  return (
    <> 
    <div id="hero-section"> 
      <div className="overlay"></div>
      <ContactBar />
      <Navbar />
     
   </div>
      
      <Outlet />
      <SubscribeSection/>
          <Footer/>
    </>
  );
}

export default Layout;

