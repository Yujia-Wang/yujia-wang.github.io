import {Col, Row} from "react-bootstrap";


export default function SubsectionComponent(props) {
    return (
        <Row className="subsection-space">
            <Col>
                <h4 className="subsection-title-space">{props.subtitle}</h4>
                {props.children}
            </Col>
        </Row>
    );
}