import React, { useState, useEffect } from "react";
import { Row,Col,Container  } from "react-bootstrap";
import CarsolCart from "../../Components/CarsolCart/CarsolCart";
import CarsolItemTitle from "../../Components/CarsolItemTitle/CarsolItemTitle";
import ClientCart from "../../Components/ClientCart/ClientCart";
import CourseCart from "../../Components/CourseCart/CourseCart";
import CourseTitle from "../../Components/CourseTitle/CourseTitle";
import EmailPortion from "../../Components/EmailPortion/EmailPortion";
import HeroHome from "../../Components/HeroHome/HeroHome";
import HeroLogo from "../../Components/HeroLogo/HeroLogo";
import './Home.css'

const Home = () => {
  const [course, setCourse] = useState([]);

  /* useEffect(() => {
    console.log("result")
    fetch("./coursecart.json")
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []); */
  useEffect(() => {
    fetch("./coursecart.json")
    .then((res) => res.json())
    .then((result) => setCourse(result));
  }, []);
  return (
    <>
      <HeroHome />
      <HeroLogo />
      <CourseTitle/>
      <Container>
        <Row>
          <Col xs={12} md={12}>
        <Row>
          {course.map((course)=><CourseCart course={course}/>)}
        </Row>
          </Col>
        </Row>
        </Container>
        <CarsolItemTitle/>
        <CarsolCart/>
        <ClientCart/>
        <EmailPortion/>
        <footer >
        copyright Orange labs 2020
          </footer>
    </>
  );
};

export default Home;
