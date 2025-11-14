import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../aboutpages/css/about.css";
import Card from "./_components/Cardcomponent";

function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1
          className="pb-4 fw-normal display-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          ABOUT US
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

      <div className="container-fluid text-black mt-5 pt-5">
        <div className="text-center ">
          <h1>Company History</h1>
          <p>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>

        <div className="row px-4 text-black-50 p-4 ">
          <div className="col-12 col-lg-6 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repudiandae maiores officiis illo soluta accusantium architecto
              cumque ipsam aut quasi, repellendus reprehenderit rem minima eius
              impedit. Earum dolor omnis officiis tenetur dolorum.
            </p>
          </div>

          <div className="col-12 col-lg-6 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repudiandae maiores officiis illo soluta accusantium architecto
              cumque ipsam aut quasi, repellendus reprehenderit rem minima eius
              impedit. Earum dolor omnis officiis tenetur dolorum.
            </p>
          </div>
        </div>

        <div className=" p-5   mb-5  border-bottom ">
          <Slider {...settings}>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_1.jpg" />
            </div>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_2.jpg" />
            </div>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_3.jpg" />
            </div>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_4.jpg" />
            </div>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_5.jpg" />
            </div>
            <div className="w-100 h-100 ratio ratio-4x3">
              <img src="/src/assets/Img/img_6.jpg" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center">
        <h1>Meet The Team</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>
           <div className="container"> 
      <div className="row mt-5 pt-5 mb-5 pb-5 gx-5">
        <Card
          img="/src/assets/Img/person_1.jpg"
          name="Jean Smith"
          role="Developer"
          about=" Quos quia provident  tates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci."
        />

        <Card
          img="/src/assets/Img/person_2.jpg"
          name="Hush Raven"
          role="Designer"
          about=" Quos quia provident  ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci."
        />

        <Card
          img="/src/assets/Img/person_3.jpg"
          name="Alex King"
          role="Manager"
          about="Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque   "
        />

        <Card
          img="/src/assets/Img/person_1.jpg"
          name="Jean"
          role="Tester"
          about="Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci. "
        />

        <Card
          img="/src/assets/Img/person_2.jpg"
          name="Rab"
          role="Support"
          about=" Quos quia provident consequuntur cul ne maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possi i."
        />

        <Card
          img="/src/assets/Img/person_3.jpg"
          name="Ankit"
          role="React Developer"
          about="Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci. "
        />
      </div>
      </div>
    </>
  );
}

export default About;
