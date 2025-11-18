import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid pt-5 z-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-5">
        <div className="container-fluid  px-5">
          <h4 className="navbar-brand fw-bold fs-3 text-white">Aesthetic</h4>

          <button
            className="navbar-toggler border-0 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex ">
            <ul className="navbar-nav gap-3  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "  text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Services
                </NavLink>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      Web
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown text-decoration-none">
                <Link
                  className=" dropdown-toggle text-white text-decoration-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      HTML
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      CSS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      SASS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      jQuery
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/connect"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className="offcanvas offcanvas-end text-bg-dark d-lg-none  px-4"data-bs-dismiss="offcanvas"

            id="offcanvasMenu"  style={{ width: "50%" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <ul className="navbar-nav gap-3  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "  text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Services
                </NavLink>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      Web
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown text-decoration-none">
                <Link
                  className=" dropdown-toggle text-white text-decoration-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      HTML
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      CSS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      SASS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="#"
                    >
                      jQuery
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/connect"
                  className={({ isActive }) =>
                    "text-decoration-none " +
                    (isActive ? "active-link" : "text-white")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
