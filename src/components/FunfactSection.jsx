 import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

function FunfactSection() {
  useEffect(() => {
    new PureCounter();
  }, []);

  const funfact = [
    {
      icon: "ti-settings",
      start: 0,
      end: 22384,
      duration: 2,
      text: "Creativity Fuel",
      delay: 200,
    },
    {
      icon: "ti-face-smile",
      start: 0,
      end: 343,
      duration: 2,
      text: "Happy Clients",
      delay: 400,
    },
    {
      icon: "ti-briefcase",
      start: 0,
      end: 567,
      duration: 2,
      text: "Projects Done",
      delay: 600,
    },
    {
      icon: "ti-time",
      start: 0,
      end: 91293,
      duration: 2,
      text: "Satisfied Users",
      delay: 800,
    },
  ];

  return (
    <div className="container text-center py-5 mt-5">
      <div data-aos="fade-up" data-aos-delay="100">
        <h1>Fun Facts</h1>
        <p className="pb-5">
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident.
        </p>
      </div>

      <div className="row p-5">
        {funfact.map((item, index) => (
          <div
            className="col-12 col-md-6 col-lg-3"
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div className="p-5 text-center ">
              <span className="text-black-50 fs-1">
                <i className={item.icon}></i>
              </span>

              <h3>
                <div
                  className="purecounter display-4 fw-normal pt-4 pb-2 num-icon"
                  data-purecounter-start={item.start}
                  data-purecounter-end={item.end}
                  data-purecounter-duration={item.duration}
                ></div>
              </h3>

              <p className="text-black-50 pb-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FunfactSection;
