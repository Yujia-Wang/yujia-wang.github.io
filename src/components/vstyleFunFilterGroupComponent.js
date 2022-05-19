import {Col, Row} from "react-bootstrap";
import "../css/vstyle.css";
import React, {useState, useEffect} from "react";
import VstyleFunFilterComponent from "./vstyleFunFilterComponent";

export default function VstyleFunFilterGroupComponent(props) {
    const [currentActiveFilter, setCurrentFilterActive] = useState(0);

    let position = {
        justifyContent: "",
        textAlign: ""
    };

    if (props.align === "right") {
        position.justifyContent = "flex-end";
        position.textAlign = "right";
    } else {
        position.justifyContent = "flex-start";
        position.textAlign = "left";
    }

    useEffect(() => {
        if (props.activeFilter !== 0 && props.activeFilter < props.children.length) {
            setCurrentFilterActive(props.activeFilter);
        }
    },[]);

    const onChangeFilter = (index) => {
        setCurrentFilterActive(index);
    }

    const filters = props.filters.map(({type, src, color}, index) => {
        return <VstyleFunFilterComponent type={type} src={src} color={color} key={index} isActive={(currentActiveFilter === index)} onClick={() => onChangeFilter(index)}/>;
    })

    return (
        <Row style={{paddingTop: "1.6rem", paddingBottom: "1.6rem"}}>
            <Col md={12} style={{display: "flex", justifyContent: position.justifyContent, marginBottom: "0.8rem"}}>
                <p style={{textAlign: position.textAlign}}>{props.filterName}</p>
            </Col>
            <Col md={12} style={{display: "flex", flexWrap: "wrap", justifyContent: position.justifyContent, gap: "1.6rem"}}>
                {filters}
            </Col>
        </Row>
    );

}

