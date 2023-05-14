import React from "react";
import {Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/index.css";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowLeft, faLongArrowRight} from "@fortawesome/pro-regular-svg-icons";


export default function NextPreviousComponent(props) {
    return (
        <Row>
            <Col md={6}>
                <div className="previous-page-link">
                    <Link to={props.previousLink}>
                        <FontAwesomeIcon icon={faLongArrowLeft} />
                        {props.previousText}
                    </Link>
                </div>
            </Col>
            <Col md={6}>
                <div className="next-page-link">
                    <Link to={props.nextLink}>
                        {props.nextText}
                        <FontAwesomeIcon icon={faLongArrowRight} />
                    </Link>
                </div>
            </Col>
        </Row>
    );
}
