import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <>
      <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1
          className="  pb-4 fw-normal display-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          GET IN TOUCH
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
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4 ">Get In Touch</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label  ">
                  Your firstname
                </label>
                <input
                  type="text"
                  className="form-control  "
                  id="firstname"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label  ">
                  Your email address
                </label>
                <input
                  type="email"
                  className="form-control  "
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label ">
                  Your subject of this message
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-success">
                  Message
                </label>
                <textarea
                  className="form-control  "
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6 gx-5 px-5">
            <h2 className="mb-4  ">Contact Information</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Address:</strong> 198 West 21th Street, Suite 721 New
                York NY 10016
              </li>
              <li>
                <strong>Phone:</strong> +1235 2355 98
              </li>
              <li>
                <strong>Email:</strong> info@yoursite.com
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://gettemplates.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success text-decoration-none"
                >
                  gettemplates.co
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Connect;
