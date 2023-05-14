import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../css/index.css";
import "../css/App.css";
import aboutMe from "../resource/about/about.svg";
import about1 from "../resource/about/about1.jpg";
import about2 from "../resource/about/about2.jpg";
import about3 from "../resource/about/about3.jpg";
import about4 from "../resource/about/about4.jpg";
import about5 from "../resource/about/about5.jpg";
import about6 from "../resource/about/about6.jpg";
import about7 from "../resource/about/about7.jpg";
import about8 from "../resource/about/about8.jpg";
import about9 from "../resource/about/about9.jpg";
import about10 from "../resource/about/about10.jpg";
import about11 from "../resource/about/about11.jpg";
import about12 from "../resource/about/about12.jpg";

export default function AboutIntroComponent() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={aboutMe} width="100%" alt="about image" />
                    </Col>
                </Row>
            </Container>
            <Container className="project-content">
                <Row>
                    <Col>
                        <p className="bold-text">Hey! I'm Bobo!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>My name is Yujia (Bobo) Wang. Currently I'm
                            a UX/UI designer in EverCommerce - DrChrono.</p>
                        <p>I'm a designer - I care about every user and I strive to bring
                            enjoyable experiences into people's lives.</p>
                        <p>I'm a developer - I make ideas become a reality.</p>
                        <p>I'm a student - I am always striving to learn more and grow
                            myself.</p>
                        <p>I'm a dream chaser - I never give up and I welcome challenges.</p>
                        <p>I'm a lover - I am proud of who I am and I believe in myself.</p>
                    </Col>
                </Row>
                <Row style={{marginTop: "11.2rem"}}>
                    <Col>
                        <p className="bold-text">I used to dream of flying in the sky. I still do...</p>
                    </Col>
                </Row>
                <Row className="gallery">
                    <Col md={3}>
                        <img src={about1} width="100%" alt="photo 1" />
                    </Col>
                    <Col md={3}>
                        <img src={about2} width="100%" alt="photo 2" />
                    </Col>
                    <Col md={3}>
                        <img src={about3} width="100%" alt="photo 3" />
                    </Col>
                    <Col md={3}>
                        <img src={about4} width="100%" alt="photo 4" />
                    </Col>
                </Row>
                <Row className="gallery">
                    <Col md={3}>
                        <img src={about5} width="100%" alt="photo 5" />
                    </Col>
                    <Col md={3}>
                        <img src={about6} width="100%" alt="photo 6" />
                    </Col>
                    <Col md={3}>
                        <img src={about7} width="100%" alt="photo 7" />
                    </Col>
                    <Col md={3}>
                        <img src={about8} width="100%" alt="photo 8" />
                    </Col>
                </Row>
                <Row className="gallery">
                    <Col md={3}>
                        <img src={about9} width="100%" alt="photo 9" />
                    </Col>
                    <Col md={3}>
                        <img src={about10} width="100%" alt="photo 10" />
                    </Col>
                    <Col md={3}>
                        <img src={about11} width="100%" alt="photo 11" />
                    </Col>
                    <Col md={3}>
                        <img src={about12} width="100%" alt="photo 12" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
