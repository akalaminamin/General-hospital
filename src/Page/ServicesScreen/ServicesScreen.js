import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Services from '../../components/Services/Services';

const ServicesScreen = () => {
    return (
        <>
        <Header>
        <h5>Our</h5>
        <h1>Services</h1>
        <hr className="hr" />
        <p>
        Compellingly embrace empowered e-business after user friendly intellectual capital. <br /> Interactively actualize front-end processes with effective convergence.
        </p>
      </Header>
        <Services></Services>
        <Footer></Footer>
        </>
    )
}

export default ServicesScreen;
