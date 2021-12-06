import React from "react";
import { Container, Row, Col, Form ,Button} from "react-bootstrap";
import "./EmailPortion.css";
const EmailPortion = () => {
  return (
    <section className="EmailPortion">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h1>Let us handle your project, professionally.</h1>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </Col>

          <Col xs={12} md={6}>
            <Form className="EamilFrom">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Your Email Address" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Your name/company's name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
                <Form.Control as="textarea" rows={10} placeholder="Your message"/>
              </Form.Group>
              <Button variant="primary">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmailPortion;
