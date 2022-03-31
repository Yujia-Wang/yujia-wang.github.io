import {Col, Row} from "react-bootstrap";


export default function SubsectionComponent({children}) {
    return (
        <Row>
            <Col>
                {children}
            </Col>
        </Row>
    );
}