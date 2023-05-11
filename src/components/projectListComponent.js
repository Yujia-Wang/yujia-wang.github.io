import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/index.css";
import "../css/App.css";
import ProjectWidgetComponent from "./projectWidgetComponent";
import FooterComponent from "./footerComponent";
import foodex from "../image/home/foodex.png";
import vstyle from "../image/home/vstyle.png";
import fittingeasy from "../image/home/fittingeasy.png";

export default function ProjectListComponent() {
    return (
        <Stack className="project">
            <div className="title-container center">
                <h2>FEATURED PROJECTS</h2>
            </div>
            <Stack direction="horizontal" className="horizontal-project">
                <Link to="/">
                    <ProjectWidgetComponent imgSource={fittingeasy} altText={"DrChrono Design System"} />
                </Link>
                <Link to="/foodex">
                    <ProjectWidgetComponent imgSource={foodex} altText={"FoodEx"} />
                </Link>
                <Link to="/vstyle">
                    <ProjectWidgetComponent imgSource={vstyle} altText={"VStyle"} />
                </Link>
                <Link to="/">
                    <ProjectWidgetComponent imgSource={fittingeasy} altText={"FittingEasy"} />
                </Link>
            </Stack>
            <div style={{marginTop: "16rem"}}>
                <FooterComponent />
            </div>
        </Stack>
    );
}
