import React from "react";
import { Col } from "react-bootstrap";
import { Link, } from "react-router-dom";
import "./Service.css";
import { FaCaretRight } from "react-icons/fa";

const Service = ({ singleService }) => {
  const {id, image, subtitle, title, description } = singleService;
  return (
    <>
      <Col className="gy-3">
        <div className="custom-card">
          <div className="img-hover">
            <img src={image} alt="service" />
          </div>
          <div className="p-4">
            <h4 className="mb-2 card-subtitle">{subtitle}</h4>
            <h2>
                {title}
            </h2>
            <p className="card-desc">{description.slice(0, 60)}</p>
            <button className="custom-btn read-more-btn">
              <Link to={`/service/${id}`} className="read-more-link">
                Read More <FaCaretRight />
              </Link>
            </button>
          </div>
        </div>
      </Col>

    </>
  );
};

export default Service;
