import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
const Header = ({ children }) => {
  console.log(children);
  return (
    <div className="page-header">
      <Container>{children}</Container>
    </div>
  );
};

export default Header;
