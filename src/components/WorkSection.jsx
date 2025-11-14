
function workSection() {
  return (
    <div className="container-fluid bg-dark">
    <div className="row d-flex py-5 px-2 g-3">
      <div className="col-12 text-center text-light" data-aos="fade-up" data-aos-delay="0">
        <h1>Our Latest Works</h1>
        <p>Accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
      </div>

      <div className="col-12 col-sm-6 col-lg-7 d-flex">
        <div className="ratio ratio-4x3 position-relative overflow-hidden work-img-overlap-1" data-aos="fade-up"
          data-aos-delay="0">
          <img src="/src/assets/Img/img_1.jpg" className="img-fluid w-100 work-img" alt="Modern Design" />

          <a href="#" className="text-white text-decoration-none">
            <div className="case-studies position-absolute bottom-0 start-0 end-0 p-3">
              <span className="text-uppercase text-white-50">Modern Design</span>
              <h4>
                Creative and pixel-perfect layouts for modern web projects
              </h4>
            </div>
          </a>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-5 d-flex" data-aos="fade-up" data-aos-delay="200">
        <div className="position-relative ratio ratio-4x3 overflow-hidden work-img-overlap-2">
          <img src="/src/assets/Img/img_2.jpg" className="img-fluid w-100" alt="Clean UI" />
          <a href="#" className="text-white text-decoration-none z-2">
            <div className="case-studies position-absolute bottom-0 p-3">
              <span className="text-uppercase text-white-50">Clean UI</span>
              <h4>Simple, elegant and user-friendly design experiences.</h4>
            </div>
          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="400">
        <div className="position-relative ratio ratio-4x3 overflow-hidden work-img-overlap-3">
          <img src="/src/assets/Img/img_3.jpg" className="img-fluid w-100 h-100" />
          <a href="#" className="text-light text-decoration-none z-2">
            <div className="case-studies position-absolute bottom-0 p-3">
              <span className="text-uppercase text-white-50">Responsive</span>
              <h4>Adapts beautifully on any screen size and device</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="600">
        <div className="position-relative ratio ratio-4x3 overflow-hidden work-img-overlap-4">
          <img src=" /src/assets/Img/img_4.jpg" className="img-fluid w-100 h-100 z-1" />
          <a href="#" className="text-light text-decoration-none z-2">
            <div className="case-studies position-absolute bottom-0 p-3">
              <span className="text-uppercase text-white-50">Creative Projects</span>
              <h4>Designed with imagination and cutting-edge technology</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-5 d-flex" data-aos="fade-up" data-aos-delay="750">
        <div className="position-relative w-100 ratio ratio-4x3 overflow-hidden work-img-overlap-5">
          <img src=" /src/assets/Img/img_5.jpg" className="img-fluid w-100 z-1" />
          <a href="#" className="text-light text-decoration-none">
            <div className="case-studies case-studies position-absolute bottom-0 p-3 z-2">
              <span className="text-uppercase text-white-50">Custom Solutions</span>
              <h4>Tailored experiences built to fit your business goals.</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-7 d-flex" data-aos="fade-up" data-aos-delay="950">
        <div className="position-relative w-100 ratio ratio-4x3 overflow-hidden work-img-overlap-6">
          <img src=" /src/assets/Img/img_6.jpg" className="img-fluid w-100 z-1" />
          <a href="#" className="text-light text-decoration-none">
            <div className="case-studies case-studies position-absolute bottom-0 p-3 z-2">
              <span className="text-uppercase">Performance</span>

              <h4>Optimized for speed, quality and smooth experience</h4>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="text-center mt-4">
      <a href="#" className="btn btn-outline-light btn-lg align-self-center mt-auto mb-5 px-5" data-aos="fade-up"
        data-aos-delay="250">See All Works</a>
    </div>
  </div>
  )
}

export default workSection
