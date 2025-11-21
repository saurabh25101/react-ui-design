import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../aboutpages/css/about.css";
import Card from "./components/CardComponent";

import img1 from "/src/assets/Img/img_1.jpg";
import img2 from "/src/assets/Img/img_2.jpg";
import img3 from "/src/assets/Img/img_3.jpg";
import img4 from "/src/assets/Img/img_4.jpg";
import img5 from "/src/assets/Img/img_5.jpg";
import img6 from "/src/assets/Img/img_6.jpg";
import PageHeader from "./components/PageHeader";

const images = [img1, img2, img3, img4, img5, img6];

const teamMembers = [
  {
    img: "/src/assets/Img/person_1.jpg",
    name: "Jean Smith",
    role: "Developer",
    about:
      "Quos quia provident tates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.",
  },
  {
    img: "/src/assets/Img/person_2.jpg",
    name: "Hush Raven",
    role: "Designer",
    about:
      "Quos quia provident ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.",
  },
  {
    img: "/src/assets/Img/person_3.jpg",
    name: "Alex King",
    role: "Manager",
    about:
      "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque.",
  },
  {
    img: "/src/assets/Img/person_1.jpg",
    name: "Jean",
    role: "Tester",
    about:
      "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.",
  },
  {
    img: "/src/assets/Img/person_2.jpg",
    name: "Rab",
    role: "Support",
    about:
      "Quos quia provident consequuntur culpa maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque.",
  },
  {
    img: "/src/assets/Img/person_3.jpg",
    name: "Ankit",
    role: "React Developer",
    about:
      "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.",
  },
];

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
         <PageHeader title="ABOUT US"/>
    
    
      <div className="container-fluid text-black mt-5 pt-5">
        <div
          className="text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1>Company History</h1>
          <p>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>

        <div
          className="row px-4 text-black-50 p-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="col-12 col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repudiandae maiores officiis illo soluta accusantium architecto
              cumque ipsam aut quasi, repellendus reprehenderit rem minima eius
              impedit. Earum dolor omnis officiis tenetur dolorum.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repudiandae maiores officiis illo soluta accusantium architecto
              cumque ipsam aut quasi, repellendus reprehenderit rem minima eius
              impedit. Earum dolor omnis officiis tenetur dolorum.
            </p>
          </div>
        </div>

        <div
          className="p-5 mb-5 border-bottom"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="w-100 h-100 ratio ratio-4x3">
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="text-center" data-aos="fade-up" data-aos-delay="400">
        <h1>Meet The Team</h1>
        <p>
          Dignissimos asperiores vitae velit veniam totam fuga molestias
          accusamus alias autem provident. Odit ab aliquam dolor eius.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <div className="row mt-5 pt-5 mb-5 pb-5 gx-5">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              about={member.about}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
