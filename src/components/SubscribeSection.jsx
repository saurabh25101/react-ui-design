 
 
 function SubscribeSection() {
   return (
    <div className="container-fluid bg-dark text-light pb-5 text-center mt-5 mb-5 pt-5">
    <div data-aos="fade-up" data-aos-delay="0">
      <h1 className="pt-5">Subscribe</h1>
      <p className="text-white-50">Be the first to know about the new template</p>
    </div>

    <form className="container mt-5 mb-5">
      <div className="row justify-content-center g-3 mt-5">
        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="200">
          <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <div className="col-12 col-md-4 mb-5" data-aos="fade-up" data-aos-delay="400">
          <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="500">
          <button type="submit" className="btn btn-success w-100">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
   )
 }
 
 export default SubscribeSection
 