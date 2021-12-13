import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { BsPhone, BsEnvelope } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
const ContactForm = () => {
  return (
    <Container className="p-sm-3">
      <div className="services-header">
        <p className="services-subtitle">Contact us anytime</p>
        <h2 className="title">
          <span className="span">Get in</span> touch
        </h2>
        <hr className="hr" />
      </div>
      <Row>
        <Col xs={12} md={7} className="pe-md-5">
          <Form
            action="https://formsubmit.co/hrhridoydigital@gmail.com"
            method="POST"
          >
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
            <br />
            <input
              className="form-input"
              type="email"
              name="name"
              placeholder="Email"
              required
            />
            <br />
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Subject"
              required
            />
            <br />
            <textarea
              name="textarea"
              className="form-input"
              id=""
              cols="20"
              rows="9"
              placeholder="Your message"
            ></textarea>
            <br />
            <Button type="submit" variant="primary" className="ms-2 mb-5">
              Submit Form
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={5} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center flex-column mb-4 contact-bg">
            <h4> Phone</h4>
            <div>
              <BsPhone className="text-primary mx-2" />
              +8880189585441
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column mb-4 contact-bg">
            <h4>Email Address</h4>
            <div>
              <BsEnvelope className="text-primary mx-2" />
              alaminamin3091@gmail.com
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column mb-4 contact-bg">
            <h4>Linkedin</h4>
            <div>
              <FaLinkedin className="text-primary mx-2" />
              <a
                href="https://www.linkedin.com/in/mdalaminamin/"
                target="_blank"
                className="text-decoration-none text-dark"
              >
                Contact with Linkedin
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column mb-sm-4 mb-0 contact-bg">
            <h4>Location</h4>
            <div>
              <ImLocation className="text-primary mx-2" />
              Comilla, Bangladesh
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
