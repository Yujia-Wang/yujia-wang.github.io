import React, { Component } from "react";
import "../css/index.css";
import "../css/App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import ImgCompareImgComponent from "./imgCompareImgComponent";
import ProjectListComponent from "./projectListComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/pro-light-svg-icons";

export default class HomepageComponent extends Component {
    render() {
        return (
            <ReactFullpage
                licenseKey = { "084CABA9-B9B64F0F-962A3391-BCC711D9" }
                scrollingSpeed = {1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper className="fullpage-wrapper">
                            <section className="intro section">
                                <ImgCompareImgComponent/>
                                <div className="job-title center">
                                    <span>UX/UI DESIGNER & ENGINEER</span>
                                </div>
                                <div className="next-page center">
                                    <FontAwesomeIcon icon={faAngleDoubleDown} fontSize="2.4rem"/>
                                </div>
                            </section>
                            <ProjectListComponent/>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}