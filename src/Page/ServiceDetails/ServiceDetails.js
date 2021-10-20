import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import img from "../../Image/service3.jpg";
import Footer from "../../components/Footer/Footer";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const foundService = serviceDetails.find(
      (sevice) => sevice.id == serviceId
    );
    setService(foundService);
  }, [serviceDetails]);

  return (
    <div className="service-details">
      <Container>
        <img src={img} className="service_img" alt="single service" />
        <h3 className="pt-3 pb-1"></h3>
        <p className="mb-5">
          Interactively procrastinate high-payoff content without
          backward-compatible data. Quickly cultivate optimal processes. General
          health care needs General health needs include health promotion,
          preventive care (immunization, general health screening), treatment of
          acute and chronic illness, and appropriate referral for more
          specialized needs where required.
        </p>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
