function Footer() {
  return (
    <footer className="footer-section text-black p-5">
      <div className="container-fluid p-5">
        <div className="row text-center">
          <div className="col-12 col-sm-12 mb-4 col-lg-4">
            <h2>About Us</h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eos molestias quod sint ipsum possimus temporibus officia iste
              perspiciatis consectetur in fugiat repudiandae cum. Totam
              cupiditate nostrum ut neque
            </p>
          </div>

          <div className="col-12 col-sm-12 mb-4 col-lg-4">
            <h2>Links</h2>
            <ul className="link list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-success">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-success">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-success">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-success">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6   col-lg-4">
            <h2>Get In Touch</h2>
            <div>
              <p className="email">Email: example@gmail.com</p>
              <p className="phone">Phone: +1 234 567 890</p>
              <p className="address">Live Chat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fotter-icon col-12">
        <div className="d-flex justify-content-end gap-5 px-5">
          <a href="#" className=" text-success fs-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className=" text-success fs-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className=" text-success fs-3">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
