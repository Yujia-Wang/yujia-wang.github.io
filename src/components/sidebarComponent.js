import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../css/index.css";
import "../css/App.css";
import logo from "../image/home/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";


export default function SidebarComponent() {
    return (
        <nav className="sidebar">
            <Container>
                <Row className="logo">
                    <Col className="center">
                        <a href="index.html">
                            <img src={logo} width="48" alt="logo" />
                        </a>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <a href="index.html">HOME</a>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <a href="index.html">ABOUT</a>
                    </Col>
                </Row>
                <Row className="nav-space nav-text">
                    <Col className="center">
                        <a href="index.html">RESUME</a>
                    </Col>
                </Row>
                <Row className="contact">
                    <Col className="center original">
                        <a href="">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Col>
                    <Col className="center original">
                        <a href="">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Col>
                    <Col className="center original">
                        <a href="">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}
