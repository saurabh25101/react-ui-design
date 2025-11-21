 import img_2 from "/src/assets/Img/img_2.jpg";
import img_3 from "/src/assets/Img/img_3.jpg";
import img_4 from "/src/assets/Img/img_4.jpg";

function ProductSection() {
  const products = [
    { img: img_2, delay: 300 },
    { img: img_3, delay: 600 },
    { img: img_4, delay: 900 }
  ];

  return (
    <div className="container-fluid bg-body-secondary text-center">
      <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="pt-5">PRODUCT</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>

      <div className="card-section">
        <div className="row mt-5 pb-5 p-2 g-4">

          {products.map((item, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-lg-4 ${
                index !== 0 ? "d-none d-lg-block" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <img
                src={item.img}
                className="img-fluid w-100 h-100"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ProductSection;
