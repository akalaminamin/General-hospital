import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";
const About = () => {
  return (
    <div>
      <Header>
        <h5>About us</h5>
        <h1>General information</h1>
        <hr className="hr" />
        <p>
          What an About Us page should be is a goal-oriented sales page, one
          that focuses
          <br /> on highlighting the biggest selling points of your story and
          brand, <br /> making a strong first impression on curious customers
        </p>
      </Header>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default About;
