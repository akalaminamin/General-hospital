import React, {useState, useEffect} from "react";
import "./Services.css";
import { Row, Container } from "react-bootstrap";
import Service from "../Service/Service";
// import useService from "../../Hooks/useServices/useService";
const Services = () => {
  // const [services] = useService();
  const [services, setServices] = useState([]);
    
    useEffect(() => {
      fetch("/Services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
  return (
    <div className="services py-5">
      <Container>
        <div className="services-header">
          <p className="services-subtitle">Our Services</p>
          <h2 className="title">
            <span className="span">What services</span>
            <br />
            Medicare offers?
          </h2>
          <hr className="hr" />
          <p className="para">
            General Hospital is an American daytime television soap opera. It is
            listed in Guinness <br /> World Records as the longest-running
            American soap opera in production,
          </p>
        </div>
        <div className="services-content ">
          <Row xs={1} md={3} className="gx-4">
            {services.map((service) => (
              <Service singleService={service} key={service.id} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
