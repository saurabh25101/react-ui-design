 import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
 import "./assets/css/themify-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import "./App.css";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <App />;
}
export default Main;

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Main />
 
);
