import {Row, Col} from "react-bootstrap";
import "../css/index.css";
import "../css/App.css";
import FooterComponent from "../components/footerComponent";
import ProjectSidebarComponent from "../components/projectSidebarComponent";
import ProjectImgComponent from "../components/projectImgComponent";
import vstyle from "../image/vstyle/vstyle-pic.png";
import ProjectOverviewComponent from "../components/projectOverviewComponent";
import SubsectionComponent from "../components/subsectionComponent";
import TextHighlightComponent from "../components/textHighlightComponent";

function Vstyle() {
  return (
      <div>
          <ProjectSidebarComponent
              navItem={[
                  {url: "#overview", name: "OVERVIEW"},
                  {url: "/", name: "RESEARCH"},
                  {url: "/", name: "DESIGN"},
                  {url: "/", name: "EVALUATION"},
                  {url: "/", name: "REFLECTION"},
                  {url: "/", name: "FUN !"},
              ]}
          />
          <div className="content-wrapper">
              <ProjectImgComponent
                  imgSrc={vstyle}
                  showBtn={true}
                  projectLink="https://vstyle-infoviz.github.io"
                  btnText="Try V.Style"
              />
              <ProjectOverviewComponent>
                  <SubsectionComponent>
                      <h4 className="section-title-space">WHAT IS V.STYLE?</h4>
                      <p className="text-align">
                          <TextHighlightComponent
                              text=" V.style is a website that helps users gain insights about various fashion styles across cities and time."
                              color="linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.1) 50%)"
                          /> The website accomplishes this by visualizing relevant information. The site includes the following views:
                      </p>
                      <p className="text-align">
                          <TextHighlightComponent
                              text=" V.style is a website that helps users gain insights about various fashion styles across cities and time."
                              color="linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.1) 50%)"
                          />
                      </p>
                  </SubsectionComponent>
              </ProjectOverviewComponent>
              <FooterComponent />
          </div>
      </div>
  );
}

export default Vstyle;
