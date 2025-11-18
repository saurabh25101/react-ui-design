
import ContactBar from "../components/ContactBar";
import FeaturesCard from "../components/FeaturesCard";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import FunfactSection from "../components/FunfactSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import SubscribeSection from "../components/SubscribeSection";
import WorkSection from "../components/WorkSection";

export default function Home() {
  return (
    <>
       
      <div id="hero-section">
        <div className="overlay"></div>
        <ContactBar/>
      <Navbar/>
        <Hero />
      </div>

      <FeaturesCard />
      <FeaturesSection />
      <WorkSection 
  backgroundColor="#1a1a1a"  
  btnText="See All Works" 
  btnClass="btn-outline-light" 
/>

      <FunfactSection />
      <ProductSection />
      <SubscribeSection />
         <Footer/>
    </>
  );
}
