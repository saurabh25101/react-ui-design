 function ServiceCard({ icon, name, disc , delay}) {
  return (
    <div  
      className="col-12 col-sm-12 col-lg-4"
      data-aos="fade-right"
      data-aos-delay={delay}>
      <div className="d-flex align-items-center gap-4">
        <i className= {`${icon} fs-1 text-success`}></i>
        <h4 className="fw-bold m-0">{name}</h4>
      </div>

      <p className="text-muted mt-2 px-5">{disc}</p>
    </div>
  );
}

export default ServiceCard;

