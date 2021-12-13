import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Team></Team>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
