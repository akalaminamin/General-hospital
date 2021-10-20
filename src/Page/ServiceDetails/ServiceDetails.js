import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import useService from "../../Hooks/useServices/useService";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  //   const [services] = useService();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const serviceItem = services.find(
      (singleService) => parseInt(singleService.id) === parseInt(serviceId)
    );
    // console.log(serviceItem);
  }, [services]);
  return (
    <div className="service-details">
      <Container>
        <h3>Id Number: {serviceId}</h3>
      </Container>
    </div>
  );
};

export default ServiceDetails;
