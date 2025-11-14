 function ContactBar() {
  return (
     <div className="container-fluid  position-absolute z-1">
      <div className="row pt-5">
        <div className="col-12 ">
          <div className="d-flex justify-content-lg-end justify-content-start gap-3 mx-5">
            <a href="#" className="text-decoration-none text-white"><i className="bi bi-phone num-icon"></i> +1 (0)123 456
              7890</a>
            <a href="#"><i className="bi bi-twitter num-icon"></i></a>
            <a href="#"><i className="bi bi-envelope num-icon"></i></a>
            <a href="#"><i className="bi bi-facebook num-icon"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
