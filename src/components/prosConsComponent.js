import React from "react";
import "../css/index.css";
import "../css/App.css";
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";
import {faHeartBroken} from "@fortawesome/pro-solid-svg-icons";


export default function ProsConsComponent(props) {
    return (
        <Row>
            <Col md={6}>
                <div className="pros-cons-title">
                    <FontAwesomeIcon icon={faHeart} fontSize="1.6rem" color="#fc5759"/>
                    <p style={{color: "#fc5759"}}>Likes</p>
                </div>
                <ul className="pros-cons-list">
                    {props.pros.map((content, index) => (
                        <li key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </Col>
            <Col md={6}>
                <div className="pros-cons-title">
                    <FontAwesomeIcon icon={faHeartBroken} fontSize="1.6rem" color="#fc5759"/>
                    <p style={{color: "#fc5759"}}>Dislikes</p>
                </div>
                <ul className="pros-cons-list">
                    {props.cons.map((content, index) => (
                        <li key={index}>
                            {content}
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    );
}