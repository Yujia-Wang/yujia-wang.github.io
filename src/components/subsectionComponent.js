import {Col, Row} from "react-bootstrap";


export default function SubsectionComponent(props, {children}) {
    return (
        <Row className="subsection-space">
            <Col>
                <h4 className="subsection-title-space">{props.subtitle}</h4>
                {children}
            </Col>
        </Row>
    );
}