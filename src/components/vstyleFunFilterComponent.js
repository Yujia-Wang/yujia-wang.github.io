import {Col, Row} from "react-bootstrap";
import "../css/vstyle.css";
import React from "react";

export default function VstyleFunFilterComponent(props) {
    let position = {
        justifyContent: "",
        textAlign: ""
    };

    if (props.align == "right") {
        position.justifyContent = "flex-end";
        position.textAlign = "right";
    } else {
        position.justifyContent = "flex-start";
        position.textAlign = "left";
    }

    return (
        <Row style={{paddingTop: "1.6rem", paddingBottom: "1.6rem"}}>
            <Col md={12} style={{display: "flex", justifyContent: position.justifyContent}}>
                <p style={{textAlign: position.textAlign}}>{props.filterName}</p>
            </Col>
            <Col md={12} style={{display: "flex", justifyContent: position.justifyContent, gap: "2.4rem"}}>
                {props.filters.map(({type, src, color}) => {
                    if (type === "icon") {
                        return (
                            <div className="filter-container" style={{backgroundColor: {color}}}>
                                <img src={src} className="filter-icon" width="60%" alt="fun icon"/>
                            </div>
                        )
                    } else {
                        return (
                            <div className="filter-container" style={{backgroundColor: {color}}} />
                        )
                    }
                })}
            </Col>
        </Row>
    );
}