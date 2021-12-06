import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './CourseCart.css'

const CourseCart = (props) => {
    const{name,img,about}=props.course
    
    return (
        
                    <Col xs={12} md={4} className="courseCart mt-5">
                        <Card style={{ width: '100%', border:"0" }} className={name==="Graphic design"?"shadow-lg":""}>
                            <div className="img">
                            <Card.Img variant="top" src={img}  />
                            </div>
                            <Card.Body>
                         <p className="courseName">{name}</p>
                         <p className="courseAbout">{about}</p>
                            </Card.Body>
                        </Card>
                    </Col>
    )
};

export default CourseCart;