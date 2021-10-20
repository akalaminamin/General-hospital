import React from "react";
import { Col } from "react-bootstrap";
import "./TeamMember.css";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
const TeamMember = ({ singleMember }) => {
  const { image, subtitle, name, description } = singleMember;

  return (
    <div>
      <Col className="mb-4 mb-md-0">
        <div className="img-hover ">
          <img className="w-100" src={image} alt="team member" />
        </div>
        <div className="team-content p-3">
          <h6>{subtitle}</h6>
          <hr className="new-hr" />
          <h2 className="name fs-4 mb-3">{name}</h2>
          <p className="desc">{description}</p>
          <div className="icon">
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
              <a href="https://www.linkedin.com/signup" className="text-light">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default TeamMember;
