
function ProductSection() {
  return (
    <div className="container-fluid bg-body-secondary text-center">
    <div data-aos="fade-up" data-aos-delay="0">
      <h1 className="pt-5">PRODUCT</h1>
      <p>
        Dignissimos asperiores vitae velit veniam totam fuga molestias
        accusamus alias autem provident. Odit ab aliquam dolor eius.
      </p>
    </div>

    <div className="card-section">
      <div className="row mt-5 pb-5 p-2 g-4">
        <div className="col-12 col-md-6 col-lg-4 ratio-4x3" data-aos="fade-up" data-aos-delay="200">
        <img src="/src/assets/Img/img_2.jpg" className="img-fluid w-100 h-100" alt="Image 1" />
        </div>

        <div className="col-12 col-md-6 d-none col-lg-4 d-lg-block d-sm-block ratio-4x3" data-aos="fade-up"
          data-aos-delay="400">
          <img src=" /src/assets/Img/img_3.jpg" className="img-fluid w-100 h-100" alt="Image 2" />
        </div>

        <div className="col-12 col-lg-4 d-none d-lg-block ratio-4x3" data-aos="fade-up" data-aos-delay="600">
          <img src=" /src/assets/Img/img_4.jpg" className="img-fluid w-100 h-100" alt="Image 3" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductSection
