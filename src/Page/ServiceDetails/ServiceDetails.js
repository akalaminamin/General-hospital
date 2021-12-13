import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    if (serviceDetails.length > 0) {
      const foundService = serviceDetails.find(
        (singleService) => singleService.id == serviceId
      );
      setService(foundService);
    }
  }, [serviceDetails]);
  console.log(service)
  return (
    <div className="service-details">
      <Container>
        <img src={service.image} className="service_img" alt="single service" />
        <h3 className="pt-3 pb-1">{service.title}</h3>
        <p className="mb-5">
         {service.description}
        </p>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
