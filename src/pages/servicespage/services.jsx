 import { Link } from "react-router-dom";
import ServiceCard from "../servicespage/components/serviceCard";

function Services() {
  return (
    <>
      <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1
          className="fw-normal display-4 pb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Services
        </h1>
        <h4 className="fw-normal pb-4" data-aos="fade-up" data-aos-delay="200">
          Free HTML5 Bootstrap Templates Made <em>by</em>{" "}
          <Link
            to="http://gettemplates.co/"
            className="text-decoration-none num-icon text-warning pb-5"
            target="_blank"
          >
            GetTemplates.co
          </Link>
        </h4>
      </div>

      <div className="text-center mt-5 mb-5 pt-5" data-aos="fade-up"  >
        <h1 className="mt-5">What We Offer</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>

      <div className="container pt-5 pb-5 border-bottom">
        <div className="row  pb-5  mb-5 ">

          <ServiceCard
            icon="ti-ruler-pencil"
            name="Web Development"
            disc="Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
          />

          <ServiceCard
            icon="ti-desktop"
            name="App Development"
            disc="Molestias fugiat accusamus eos non cumque quos."
          />

          <ServiceCard
            icon="ti-paint-bucket"
            name="UI/UX Designing"
            disc="Odit ab aliquam dolor eius. Qui facere ipsum voluptatem."
          />

          <ServiceCard
            icon="ti-settings"
            name="Software Solutions"
            disc="Aut cum mollitia reprehenderit lorem ipsum dolor sit amet."
          />

          <ServiceCard
            icon="ti-world"
            name="Digital Marketing"
            disc="Provident dolorum odit cumque illo numquam adipisci."
          />

          <ServiceCard
            icon="ti-light-bulb"
            name="Creative Strategy"
            disc="Facere ipsum nemo molestias atque ratione dolorem."
          />
        </div>
      </div>
             <div className="text-center mb-5 pt-5" data-aos="fade-up"  >
        <h1 className="mt-5">More Services</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>
 <div className="container pt-5 pb-5 ">
        <div className="row  pb-5  mb-5 ">

          <ServiceCard
            icon="bi bi-check "
            name="
Retina Ready"
            disc="Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" 
Fully Responsive"
            disc="Molestias fugiat accusamus eos non cumque quos."
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" 
Ready To Use"
            disc="Odit ab aliquam dolor eius. Qui facere ipsum voluptatem."
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" 
Fully Responsive
"
            disc="Aut cum mollitia reprehenderit lorem ipsum dolor sit amet."
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" 
Ready To Use"
            disc="Provident dolorum odit cumque illo numquam adipisci."
          />

          <ServiceCard
            icon="bi bi-check " 
            name="
Retina Ready"
            disc="Facere ipsum nemo molestias atque ratione dolorem."
          />
        </div>
      </div>




    </>
  );
}

export default Services;
