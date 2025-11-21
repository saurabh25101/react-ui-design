 import { NavLink } from "react-router-dom";
import "/src/App.css/";

function Navbar() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Web", path: "/services/web" },
        { name: "E-commerce", path: "/services/ecommerce" },
        { name: "Branding", path: "/services/branding" },
        { name: "API", path: "/services/api" },
      ],
    },
    {
      name: "DropDown",
      dropdown: [
        { name: "HTML", path: "/html" },
        { name: "CSS", path: "/css" },
        { name: "SASS", path: "/sass" },
        { name: "jQuery", path: "/jquery" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/connect" },
  ];

  return (
    <div className="container-fluid pt-5 z-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-5">
        <div className="container-fluid px-5">
          
          <h4 className="navbar-brand fw-bold fs-3 text-white">Aesthetic</h4>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul className="navbar-nav gap-3">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`nav-item ${link.dropdown ? "dropdown" : ""} position-relative`}
                >
                  {link.path ? (
                    <NavLink to={link.path} className="nav-link">{link.name}</NavLink>
                  ) : (
                    <span className="nav-link">{link.name}</span>
                  )}

                  {link.dropdown && (
                    <ul className="dropdown-menu">
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <NavLink
                            to={item.path}
                            className="dropdown-item bg-white text-black"
                            end
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* for  Mobile Menu */}
      <div
        className="offcanvas offcanvas-end text-bg-dark d-lg-none px-4"
        id="offcanvasMenu"
        style={{ width: "50%" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white pt-4"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body" data-bs-dismiss="offcanvas">



         <ul className="navbar-nav ">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`nav-item ${link.dropdown ? "dropdown" : ""} position-relative`}
                >
                  {link.path ? (
                    <NavLink to={link.path} className="nav-link">{link.name}</NavLink>
                  ) : (
                    <span className="nav-link">{link.name}</span>
                  )}

                  {link.dropdown && (
                    <ul className="dropdown-menu">
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <NavLink
                            to={item.path}
                            className="dropdown-item bg-white text-black"
                            end
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
