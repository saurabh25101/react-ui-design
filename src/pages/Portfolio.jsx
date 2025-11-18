import { Link } from "react-router-dom"
import WorkSection from "../components/WorkSection"

const Portfolio = () => {
  return (
    <> 
      <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className=" pb-4 fw-normal display-4" data-aos="fade-up" data-aos-delay="200">
        Portfolio
        </h1>
        <h4 className="fw-normal pb-4 " data-aos="fade-up" data-aos-delay="200">
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
      
 <WorkSection
  repeatTimes={2}
  btnText="Have you any project..?"
  btnClass="btn-success text-white"
/>
    

      </>
    

  )
}

export default Portfolio
