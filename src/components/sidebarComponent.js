import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/index.css";
import "../css/App.css";
import logo from "../resource/home/logo.svg";
import resume from "../resource/resume/yujia-wang-resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function SidebarComponent() {
    return (
        <nav className="sidebar">
            <Container>
                <Row className="logo">
                    <Col className="center">
                        <Link to="/">
                            <img src={logo} width="48" alt="logo" />
                        </Link>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <Link to="/">HOME</Link>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <Link to="/about">ABOUT</Link>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <a href={resume} target="_blank">RESUME</a>
                    </Col>
                </Row>
                <Row className="contact">
                    <Col md={12} className="center original">
                        <a href="mailto:yj.wang0605@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Col>
                    <Col md={12} className="center original">
                        <a href="https://www.linkedin.com/in/yujia-wang" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}
