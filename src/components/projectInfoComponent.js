 import {Container, Row, Col} from "react-bootstrap";
import React from "react";
 import {Link} from "react-router-dom";

export default function ProjectInfoComponent(props) {
    return (
        <Row>
            <Col md={2}>
                <p>Team Members</p>
            </Col>
            <Col md={10}>
                <p>{props.members}</p>
            </Col>
            <Col md={2}>
                <p>Time Frame</p>
            </Col>
            <Col md={10}>
                <p>{props.time}</p>
            </Col>
            <Col md={2}>
                <p>Key Words</p>
            </Col>
            <Col md={10}>
                <p>{props.keywords}</p>
            </Col>
            <Col md={2}>
                <p>My Role</p>
            </Col>
            <Col md={10}>
                {props.myRole.map((content) => (
                    <p className="text-align">
                        {content}
                    </p>
                ))}
            </Col>
        </Row>
    );
}