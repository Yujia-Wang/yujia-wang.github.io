import {Container, Row, Col} from "react-bootstrap";
import React from "react";

export default function ProjectSectionComponent(props) {
    return (
        <Container className="project-content" id={props.id}>
            <Row>
                <Col md={{span: 4, offset: 4}} className="center title-space">
                    <h1>{props.title}</h1>
                </Col>
            </Row>
            <div style={{display:"flex", flexDirection: "column", gap:"12rem"}}>
                {props.children}
            </div>
        </Container>
    );
}