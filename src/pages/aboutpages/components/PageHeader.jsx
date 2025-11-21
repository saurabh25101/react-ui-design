 import { Link } from "react-router-dom";

function PageHeader({ title, delay = 200 }) {
  return (
    <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
      <div data-aos="fade-up" data-aos-delay={delay}>
        <h1 className="pb-2 fw-normal display-4">{title}</h1>
        <h4 className="fw-normal pb-4">
          Free HTML5 Bootstrap Templates <em>by</em>{" "}
          <Link
            to="http://gettemplates.co/"
            className="text-decoration-none num-icon"
            target="_blank"
          >
            GetTemplates.co
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default PageHeader;
