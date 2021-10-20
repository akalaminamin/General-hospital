import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {
  return (
    <div>
      <Header>
        <h5>Contact</h5>
        <h1>Contact us</h1>
        <hr className="hr" />
        <p>
          Distinctively re-engineer revolutionary meta-services and premium
          architectures. <br /> Intrinsically incubate intuitive opportunities
          and real-time potentialities.
        </p>
      </Header>
      <Container className="py-5">
        <div className="services-header">
          <p className="services-subtitle">Contact us anytime</p>
          <h2 className="title">
            <span className="span">Send us</span>
            <br />
            your comments
          </h2>
          <hr className="hr" />
          <p className="para">
            Quickly aggregate B2B users and worldwide potentialities.
            Progressively plagiarize <br /> resource-leveling e-commerce through
            resource-leveling core competencies.
          </p>
        </div>
        <ContactForm></ContactForm>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
