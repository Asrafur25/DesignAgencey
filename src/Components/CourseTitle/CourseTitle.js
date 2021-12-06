import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CourseTitle.css'
const CourseTitle = () => {
    return (
        <section className="courseTitle ">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <p>Provide awesome <span style={{color:"#7AB259"}}>services</span></p>
                    </Col>
                    </Row>
                </Container>
        </section>
    );
};

export default CourseTitle;