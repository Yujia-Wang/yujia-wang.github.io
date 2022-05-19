import "../css/vstyle.css";
import React from "react";

export default function VstyleFunFilterComponent(props) {

    if (props.type === "icon") {
        return (
            <div className={"filter-container " + (props.isActive ? "filter-active" : "")} style={{backgroundColor: props.color}} onClick={props.onClick}>
                <img src={props.src} className="filter-icon" width="60%" alt="fun icon"/>
            </div>
        )
    } else if (props.type === "fill") {
        return (
            <div className={"filter-container " + (props.isActive ? "filter-active" : "")} style={{backgroundColor: props.color}} onClick={props.onClick} />
        )
    } else {
        return (
            <div className={"filter-container " + (props.isActive ? "filter-active" : "")} style={{backgroundImage: props.color}} onClick={props.onClick} />
        )
    }
}