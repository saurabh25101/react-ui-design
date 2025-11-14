 
import { Link } from "react-router-dom";

function Services() {
  return (
     <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="fw-normal  display-4 pb-4" data-aos="fade-up" data-aos-delay="200">
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
  )
}

export default Services
