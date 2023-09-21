import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <NavLink 
              to = "/" 
              className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
            >
              Home
            </NavLink>

            <NavLink 
              to = "about" 
              className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
              >
              About
            </NavLink>

            <NavLink 
              to = "login" 
              className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
              >
              Login
            </NavLink>

          </ul>
        </div>
      </div>
    </nav>
  );
};
