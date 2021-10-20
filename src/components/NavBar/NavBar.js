import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Image/general-hospital-logo-color.png";
import { Navbar, Nav } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../Contexts/AuthProvider";
const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);
  const { currentUser, logOut } = useAuth();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={
        isSticky || isCollapsed
          ? " shadow-sm custom-bg py-2 "
          : " custom-bg py-4"
      }
    >
      <Navbar.Brand as={Link} to="/" className="ms-md-5">
        <img alt="Logo" src={logo} className="d-inline-block align-top" />
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="me-md-5 nav-item"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            className="me-md-5 nav-item"
            active
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="me-md-5 nav-item"
            active
          >
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="me-md-5 nav-item" active>
            Contact
          </Nav.Link>
          {!currentUser?.email ? (
            <Nav.Link
              exact
              as={Link}
              to="/login"
              className="me-md-5 px-4 custom-btn login-btn d-inline"
              active
            >
              Login
            </Nav.Link>
          ) : (
            <div className="d-flex align-items-center">
              <h6 className="d-inline me-3 mb-0">{currentUser?.displayName}</h6>
              <Nav.Link
                exact
                as={Link}
                onClick={logOut}
                to="/"
                className="me-md-5 px-4 custom-btn login-btn d-inline"
                active
              >
                <FiLogOut />
              </Nav.Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
