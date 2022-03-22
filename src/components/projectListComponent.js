import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ReactFullpage from "@fullpage/react-fullpage";
import "../css/index.css";
import "../css/App.css";
import ProjectWidgetComponent from "./projectWidgetComponent";
import ImgCompareImgComponent from "./imgCompareImgComponent";
import foodex from "../image/home/foodex.png";
import vstyle from "../image/home/vstyle.png";
import fittingeasy from "../image/home/fittingeasy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/pro-light-svg-icons";

export default function ProjectListComponent() {
    return (
        <ReactFullpage
            licenseKey = { "084CABA9-B9B64F0F-962A3391-BCC711D9" }
            scrollingSpeed = {1000}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper className="fullpage-wrapper">
                        <section className="intro section">
                            <ImgCompareImgComponent />
                            <div className="job-title center">
                                <span>UX/UI DESIGNER & ENGINEER</span>
                            </div>
                            <div className="next-page center">
                                <FontAwesomeIcon icon={faAngleDoubleDown} fontSize="2.4rem"/>
                            </div>
                        </section>
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
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}
