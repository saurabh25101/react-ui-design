  import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

function FunfactSection() {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <div className="container text-center py-5 mt-5">
      <div data-aos="fade-up" data-aos-delay="100">
        <h1>Fun Facts</h1>
        <p className="pb-5">
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor ei
        </p>
      </div>

      <div className="row p-5">
        <div
          className="col-12 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="p-4 text-center">
            <span className="num-icon fs-1">
              <i className="ti-settings"></i>
            </span>
            <h3>
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="22222"
                data-purecounter-duration="2"
              ></span>
            </h3>
            <p className="text-black-50">Creativity Fuel</p>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-4 text-center">
            <span className="num-icon fs-1">
              <i className="ti-face-smile"></i>
            </span>
            <h3>
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="5555"
                data-purecounter-duration="2"
              ></span>
            </h3>
            <p className="text-black-50">Happy Clients</p>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="p-4 text-center">
            <span className="num-icon fs-1">
              <i className="ti-briefcase"></i>
            </span>
            <h3>
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="8888"
                data-purecounter-duration="2"
              ></span>
            </h3>
            <p className="text-black-50">Projects Done</p>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="p-4 text-center">
            <span className="num-icon fs-1">
              <i className="ti-time"></i>
            </span>
            <h3>
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="3333"
                data-purecounter-duration="2"
              ></span>
            </h3>
            <p className="text-black-50">Satisfied Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunfactSection;
