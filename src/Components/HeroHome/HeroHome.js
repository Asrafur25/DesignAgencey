
import React from "react";
import { Col, Container, Row,Button} from "react-bootstrap";
import image from "../../images/logos/Frame.png";
import "./HeroHome.css"
const HeroHome = () => {
  return (
    <section className="herohome-bg-color">
      <Container >
        <Row >
          <Col xs={12} md={6} className="mb-3">
            <h1 className="herohome-container">
              Let's Grow Your
              <br />
              Brand To The
              <br />
              Next Level
            </h1>
            <p className="herohome-paragraph">Lorem ipsum dolor sit amet, consectetur<br/>
             adipiscing elit. Purus commodo ipsum duis <br/>
             laoreet maecenas. Feugiat 
              </p>
              <Button className="btn">Hire Us</Button>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={image}
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroHome;
