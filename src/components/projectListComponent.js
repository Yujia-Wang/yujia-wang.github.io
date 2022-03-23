import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../css/index.css";
import "../css/App.css";
import ProjectWidgetComponent from "./projectWidgetComponent";
import foodex from "../image/home/foodex.png";
import vstyle from "../image/home/vstyle.png";
import fittingeasy from "../image/home/fittingeasy.png";

export default function ProjectListComponent() {
    return (
        <section className="project section">
            <Container className="section-container">
                <Row className="title-container">
                    <Col className="center">
                        <h2>FEATURED PROJECTS</h2>
                    </Col>
                </Row>
                <Row className="copyright-container">
                    <Col className="center">
                        <p className="copyright">Yujia (Bobo) Wang &copy; 2022 All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
            <div className="horizontal-project">
                <ProjectWidgetComponent imgSource={foodex} altText={"FoodEx"} />
                <ProjectWidgetComponent imgSource={vstyle} altText={"VStyle"} />
                <ProjectWidgetComponent imgSource={fittingeasy} altText={"FittingEasy"} />
            </div>
        </section>
    );
}
