import { Link } from "react-router-dom";
import ServiceCard from "./components/serviceCard";
import PageHeader from "../aboutpages/components/PageHeader";

function OurServices() {
  return (
    <>
      <PageHeader title=" Our Services"/>

      <div
        className="text-center mt-5 mb-5 pt-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
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
            delay="400"
          />

          <ServiceCard
            icon="ti-desktop"
            name="App Development"
            disc="Molestias fugiat accusamus eos non cumque quos."
            delay="600"
          />

          <ServiceCard
            icon="ti-paint-bucket"
            name="UI/UX Designing"
            disc="Odit ab aliquam dolor eius. Qui facere ipsum voluptatem."
            delay="800"
          />

          <ServiceCard
            icon="ti-settings"
            name="Software Solutions"
            disc="Aut cum mollitia reprehenderit lorem ipsum dolor sit amet."
            delay="1000"
          />

          <ServiceCard
            icon="ti-world"
            name="Digital Marketing"
            disc="Provident dolorum odit cumque illo numquam adipisci."
            delay="1200"
          />

          <ServiceCard
            icon="ti-light-bulb"
            name="Creative Strategy"
            disc="Facere ipsum nemo molestias atque ratione dolorem."
            delay="1400"
          />
        </div>
      </div>

      <div
        className="text-center mb-5 pt-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="mt-5">More Services</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>
      <div className="container pt-5 pb-5 ">
        <div className="row  pb-5  mb-5 ">
          <ServiceCard
            icon="bi bi-check "
            name="Retina Ready"
            disc="Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit."
            delay="400"
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" Fully Responsive"
            disc="Molestias fugiat accusamus eos non cumque quos."
            delay="600"
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" Ready To Use"
            disc="Odit ab aliquam dolor eius. Qui facere ipsum voluptatem."
            delay="800"
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" Fully Responsive"
            disc="Aut cum mollitia reprehenderit lorem ipsum dolor sit amet."
            delay="1000"
          />

          <ServiceCard
            icon=" bi bi-check"
            name=" Ready To Use"
            disc="Provident dolorum odit cumque illo numquam adipisci."
            delay="1200"
          />

          <ServiceCard
            icon="bi bi-check "
            name="Retina Ready"
            disc="Facere ipsum nemo molestias atque ratione dolorem."
            delay="1400"
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
