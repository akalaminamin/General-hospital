import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import FooterLogo from "../../Image/footer.png";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer py-4">
        <div className="container">
          <Row>
            <Col
              xs={12}
              md={6}
              className="text-md-start text-center mb-4 mb-md-0"
            >
              <img src={FooterLogo} alt="footer logo" />
            </Col>
            <Col className="text-md-end text-center">
              <p className="text-light">Visit us on social networks:</p>
              <div className="icon pe-5">
                <span className="p-1 mx-1">
                  <a
                    href="https://www.facebook.com/AK.AlAmin01"
                    className="text-light"
                  >
                    <FaFacebookF />
                  </a>
                </span>
                <span className="p-1 mx-1">
                  <a href="https://twitter.com/" className="text-light">
                    <FaTwitter />
                  </a>
                </span>
                <span className="p-1 mx-1">
                  <a
                    href="https://www.linkedin.com/signup"
                    className="text-light"
                  >
                    <FaLinkedin />
                  </a>
                </span>
              </div>
            </Col>
          </Row>
          <hr className="footer-hr" />
          <Row className="text-light">
            <Col xs={12} md={2}>
              <div>
                <Link
                  className="nav-link text-light d-flex direction-row"
                  to="/about"
                >
                  About use
                </Link>
                <Link
                  className="nav-link text-light d-flex direction-row"
                  to="/about"
                >
                  Team
                </Link>
                <Link
                  className="nav-link text-light d-flex direction-row"
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className="nav-link text-light d-flex direction-row"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div>
                <h3 className="fs-3 mt-3">About MediCare</h3>
                <hr className="hr" />
                <p className="pe-3">
                  Enthusiastically mesh long-term high-impact infrastructures
                  vis-a-vis efficient customer service. Professionally fashion
                  wireless leadership rather than prospective experiences.
                </p>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="text-center px-5">
                <h3 className="fs-1 number">0-800-777-2331</h3>
                <p>
                  Call us now if you are in a medical emergency need, we will
                  reply swiftly and provide you with a medical aid.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <Row className=" d-flex align-items-center justify-content-between text-dark  py-4">
          <Col xs={12} md={6}>
            <p className="mb-0">
              Copyright by BoldThemes 2018. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <Link
              className="nav-link d-block d-md-inline text-uppercase text-dark fs-6 fw-normal"
              to="/about"
            >
              About use
            </Link>
            <Link
              className="nav-link d-block d-md-inline text-uppercase text-dark fs-6 fw-normal"
              to="/about"
            >
              Team
            </Link>
            <Link
              className="nav-link d-block d-md-inline text-uppercase text-dark fs-6 fw-normal"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="nav-link d-block d-md-inline text-uppercase text-dark fs-6 fw-normal"
              to="/contact"
            >
              Contact
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
