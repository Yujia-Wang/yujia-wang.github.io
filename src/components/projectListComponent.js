import React from "react";
import { Stack } from "react-bootstrap";
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
                <ProjectWidgetComponent imgSource={foodex} altText={"FoodEx"} />
                <ProjectWidgetComponent imgSource={vstyle} altText={"VStyle"} />
                <ProjectWidgetComponent imgSource={fittingeasy} altText={"FittingEasy"} />
                <ProjectWidgetComponent imgSource={fittingeasy} altText={"FittingEasy"} />
            </Stack>
            <FooterComponent />
        </Stack>
    );
}
