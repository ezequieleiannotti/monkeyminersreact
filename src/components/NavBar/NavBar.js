import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
// import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          {props.logo}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="#toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav text-center ms-auto">
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/firebase"}
              ></NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/category/3090"}
              >
                {props.link1}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/category/3080"}
              >
                {props.link2}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={"/category/GPU"}
              >
                {props.link3}
              </NavLink>
            </li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
