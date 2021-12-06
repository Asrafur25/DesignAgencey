import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeroLogo.css'
import LogoImage from "../../images/logos/slack.png"
import LogoImage1 from"../../images/logos/google.png"
import LogoImage2 from"../../images/logos/uber.png"
import LogoImage3 from "../../images/logos/netflix.png"
import LogoImage4 from "../../images/logos/airbnb.png"


const HeroLogo = () => {
    return (
        <section className="mt-5 ms-5 me-5">
        <Container>
            <Row>
                <Col xs={12} md={12} className="heroLogoImage">
                    <img src={LogoImage} alt=""/>
                    <img src={LogoImage1} alt=""/>
                    <img src={LogoImage2} alt=""/>
                    <img src={LogoImage3} alt=""/>
                    <img src={LogoImage4} alt=""/>
                  
                </Col>
                </Row>
        </Container>
            </section>
    );
};

export default HeroLogo;