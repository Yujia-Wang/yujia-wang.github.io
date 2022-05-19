import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../css/index.css";
import "../css/App.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/pro-light-svg-icons";
import {faEnvelope} from "@fortawesome/pro-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function ProjectSidebarComponent(props) {
    return (
        <nav className="sidebar">
            <Container>
                <Row className="back">
                    <Col className="center">
                        <Link to="/">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                        </Link>
                    </Col>
                </Row>
                {props.navItem.map(({url, name}, index) => (
                    <Row className="nav-space nav-text" key={index}>
                        <Col className="center">
                            <a href={url}>{name}</a>
                        </Col>
                    </Row>
                ))}
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