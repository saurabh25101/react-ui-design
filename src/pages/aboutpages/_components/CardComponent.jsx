function CardComponent({ img, name, role, about }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="d-flex flex-column text-center h-100 p-3">
        <img
          src={img}
          className="rounded-circle mx-auto mb-3"
          width="120"
          height="120"
        />

        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
        <p className="card-text text-black-50">{about}</p>

        <div className="d-flex justify-content-center gap-3 text-success mt-auto">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
