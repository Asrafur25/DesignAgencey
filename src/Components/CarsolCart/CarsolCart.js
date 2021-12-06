import React from "react";
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import "./CarsolCart.css";
import carsolLogo from "../../images/carousel-1.png";
import carsolLogo1 from "../../images/carousel-2.png";
import carsolLogo2 from "../../images/carousel-4.png";
const CarsolCart = () => {
  return (
    <section className="carsolCart">
      <Container>
        <Row className="mb-5">
          <Col xs={12} md={12}>
            <Carousel className="carsolImg">
              <Carousel.Item>
                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo1} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo2} />
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>

              {/* Second item */}

              <Carousel.Item>
              <Row>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo1} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo2} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo} />
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo2} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo} />
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carsolLogo1} />
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarsolCart;
