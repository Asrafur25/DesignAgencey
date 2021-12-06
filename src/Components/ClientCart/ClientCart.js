import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./ClientCart.css";
import ClientImage from "../../images/customer-1.png";
import ClientImage1 from "../../images/customer-2.png";
import ClientImage2 from "../../images/customer-3.png";
const ClientCart = () => {
  return (
    <section className="ClientCart mt-5">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1>
              Clients <span style={{ color: "#7AB259" }}>Feedback</span>
            </h1>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }} className="mt-5">
                  <div className="ClientImage">
                    <Card.Img variant="top" src={ClientImage} />
                  </div>
                  <Card.Body className="BodyComponents">
                    <h1>Nash Patrik</h1>
                    <h2>CEO, Manpol</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                  </Card.Body>
                </Card>
              </Col>


              <Col>

              <Card style={{ width: "18rem" }} className="mt-5">
                  <div className="ClientImage">
                    <Card.Img variant="top" src={ClientImage1} />
                  </div>
                  <Card.Body className="BodyComponents">
                    <h1>Miriam Barron</h1>
                    <h2>CEO, Manpol</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                  </Card.Body>
                </Card>
              </Col>


              <Col>

              <Card style={{ width: "18rem" }} className="mt-5">
                  <div className="ClientImage">
                    <Card.Img variant="top" src={ClientImage2} />
                  </div>
                  <Card.Body className="BodyComponents">
                    <h1>Bria Malone</h1>
                    <h2>CEO, Manpol</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientCart;
