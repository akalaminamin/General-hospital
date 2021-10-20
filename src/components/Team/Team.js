import React, { useEffect, useState } from "react";
import "./Team.css";
import signature from "../../Image/signature.png";
import teamImg from "../../Image/img-general-hospital-05.png";
import { Row, Col } from "react-bootstrap";
import TeamMember from "../TeamMember/TeamMember";
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("./Team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  });
  return (
    <>
      <div className="team pt-5 mb-5">
        <div className="container">
          <Row className="gx-4">
            <Col xs={12} md={8}>
              <div className="services-header">
                <p className="services-subtitle">Dr Alicia Harley</p>
                <h2 className="title">
                  <span className="span">Our </span>Team
                </h2>
                <hr className="hr" />
                <p className="para">
                  General Hospital is an American daytime television soap opera.
                  It is listed in Guinness <br /> World Records as the
                  longest-running American soap opera in production,
                </p>
                <img src={signature} alt="signature" />
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={teamImg} className="w-100" alt="team photo" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container team-member mb-5">
        <Row xs={1} md={4} className="gx-4">
          {teamMembers.map((singleMember) => (
            <TeamMember singleMember={singleMember} key={singleMember.id} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Team;
