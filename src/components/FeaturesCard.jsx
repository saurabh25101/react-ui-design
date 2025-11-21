function FeaturesCard() {
  const features = [
    {
      icon: "ti-search",
      title: "Search",
      text: "Dignissimos asperiores vitae velit veniam totam fuga molestias provident.",
      delay: 0,
    },
    {
      icon: "ti-bell",
      title: "Announcement",
      text: "Dignissimos asperiores vitae velit veniam totam fuga.",
      delay: 200,
    },
    {
      icon: "ti-timer",
      title: "Timer",
      text: "Dignissimos asperiores vitae velit veniam totam fuga molestias provident.",
      delay: 400,
    },
  ];

  return (
    <section id="cards">
      <div className="container text-center position-relative z-1">
        <div className="row justify-content-center g-0 px-5 gy-5">
          {features.map((item, index) => (
            <div className="col-12  col-lg-4  py-2" key={index}>
              <div
                className={` card text-white border-0 rounded-0 h-100  py-5  ${
                  index === 1 ? "card-2" : " "
                }`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <span className="card-icon p-3 rounded-circle text-light position-absolute start-50 translate-middle top-0 my-2 d-flex align-items-center justify-content-center">
                  <i className={`${item.icon} fs-1`}></i>
                </span>

                <div className="card-body p-4 pt-5">
                  <h4 className="card-title mt-4 fw-normal">{item.title}</h4>
                  <p className="card-text text-white-50">{item.text}</p>

                  <a
                    href="#"
                    className="btn btn-outline-light btn-md border-3 mt-3 mb-5"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesCard;
