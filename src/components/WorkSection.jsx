import img1 from "../assets/Img/img_1.jpg";
import img2 from "../assets/Img/img_2.jpg";
import img3 from "../assets/Img/img_3.jpg";
import img4 from "../assets/Img/img_4.jpg";
import img5 from "../assets/Img/img_5.jpg";
import img6 from "../assets/Img/img_6.jpg";

function WorkSection({ backgroundColor, repeatTimes = 1, btnText, btnClass }) {
  
  const images = [
    {
      id: 1,
      imgSrc: img1,
      title: "Modern Design",
      description: "Creative and pixel-perfect layouts for modern web projects",
      size: "col-12 col-sm-6 col-md-6 col-lg-7",
      overlap: "work-img-overlap-1",
      delay: 0,
    },
    {
      id: 2,
      imgSrc: img2,
      title: "Clean UI",
      description: "Simple, elegant and user-friendly design experiences.",
      size: "col-12 col-sm-6 col-md-6 col-lg-5",
      overlap: "work-img-overlap-2",
      delay: 200,
    },
    {
      id: 3,
      imgSrc: img3,
      title: "Responsive",
      description: "Adapts beautifully on any screen size and device",
      size: "col-12 col-sm-6  col-md-6 col-lg-6",
      overlap: "work-img-overlap-3",
      delay: 400,
    },
    {
      id: 4,
      imgSrc: img4,
      title: "Creative Projects",
      description: "Designed with imagination and cutting-edge technology",
      size: "col-12 col-sm-6  col-md-6 col-lg-6",
      overlap: "work-img-overlap-4",
      delay: 600,
    },
    {
      id: 5,
      imgSrc: img5,
      title: "Custom Solutions",
      description: "Tailored experiences built to fit your business goals.",
      size: "col-12 col-sm-6 col-md-6  col-lg-5",
      overlap: "work-img-overlap-5",
      delay: 750,
    },
    {
      id: 6,
      imgSrc: img6,
      title: "Performance",
      description: "Optimized for speed, quality and smooth experience",
      size: "col-12 col-sm-6 col-md-6 col-lg-7",
      overlap: "work-img-overlap-6",
      delay: 950,
    },
  ];

  const repeatedImages = Array(repeatTimes).fill(images).flat();


  return (
    <div className="container-fluid" style={{ background: backgroundColor }}>
      <div className="conatainer p-5"> 
      <div className="row d-flex py-5 px-2 g-3 px-5 ">
        <div
          className="col-12  text-center text-light"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <h1>Our Latest Works</h1>
          <p>Accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        </div>

        {repeatedImages.map((image, index) => (
          <div
            className={`  ${image.size} d-flex`}
            key={`${image.id}-${index}`}

            data-aos="fade-up"
            data-aos-delay={image.delay}
          >
            <div
              className={`position-relative ratio ratio-4x3 overflow-hidden ${image.overlap}`}
            >
              <img
                src={image.imgSrc}
                className={
                  index === 0
                    ? "img-fluid w-100 h-100 work-img"
                    : "img-fluid w-100 h-100"
                }
                alt={image.title}
              />
              <a href="#" className="text-light text-decoration-none z-2">
                <div className="case-studies position-absolute bottom-0 p-3">
                  <span className="text-uppercase text-white-50">
                    {image.title}
                  </span>
                  <h4>{image.description}</h4>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a
          href="#"
          className={`btn btn-lg align-self-center mt-auto mb-5 px-5 rounded-0  ${btnClass}`}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {btnText}
        </a>
      </div>
      </div>
    </div>
  );
}

export default WorkSection;
