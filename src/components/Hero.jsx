function Hero() {
  return (
    <div className="header-container text-white d-flex flex-column text-center text-sm-start text-lg-start pt-5 py-5 mt-5  px-5 mb-5">
      <div className="container-fluid position-relative z-2 mt-5  g-0  pt-4">
        <h1
          className="display-4 fw-normal"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          Your Business To The Next Level
        </h1>
         <h4 className="fw-normal pb-4 " data-aos="fade-up" data-aos-delay="200">
          Free HTML5 Bootstrap Templates Made <em>by</em>
          <a
            href="http://gettemplates.co/"
            className="text-decoration-none num-icon"
            target="_blank"
          >
            GetTemplates.co
          </a>
        </h4> 
        <a
          href="#"
          className="btn btn-outline-light btn-lg mt px-4 d-block d-lg-inline-block d-sm-inline-block rounded-0 border-2 p-3 mb-5 "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
export default Hero;
