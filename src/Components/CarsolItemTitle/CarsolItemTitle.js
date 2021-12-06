import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CarsolItemTitle.css'
const CarsolItemTitle = () => {
    return (
        <section className="CarsolTitle ">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <p>Here are some of <span style={{color:"#7AB259"}}>our works</span></p>
                    </Col>
                    </Row>
                </Container>
        </section>
    );
};

export default CarsolItemTitle;