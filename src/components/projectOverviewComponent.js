import {Container, Row, Col} from "react-bootstrap";
import React from "react";

export default function ProjectOverviewComponent({children}) {
    return (
        <Container className="project-content">
            <Row>
                <Col md={{span: 4, offset: 4}} className="center title-space">
                    <h1>OVERVIEW</h1>
                </Col>
            </Row>
            {children}
        </Container>
    );
}