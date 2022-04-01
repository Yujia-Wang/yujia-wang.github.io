import "../css/index.css";
import "../css/App.css";
import {Row, Col} from "react-bootstrap";
import FooterComponent from "../components/footerComponent";
import ProjectSidebarComponent from "../components/projectSidebarComponent";
import ProjectImgComponent from "../components/projectImgComponent";
import ProjectSectionComponent from "../components/projectSectionComponent";
import SubsectionComponent from "../components/subsectionComponent";
import ProjectInfoComponent from "../components/projectInfoComponent";
import TextHighlightComponent from "../components/textHighlightComponent";
import DividerComponent from "../components/dividerComponent";
import vstyle from "../image/vstyle/vstyle-pic.png";
import vstyleSolution from "../image/vstyle/solution.png";
import vstyleProcess from "../image/vstyle/process.svg";
import vstyleDataAttribute from "../image/vstyle/data-attribute.png";
import vstyleAudience1 from "../image/vstyle/audience1.png";
import vstyleAudience2 from "../image/vstyle/audience2.png";

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
              <ProjectSectionComponent title="OVERVIEW">
                  <SubsectionComponent subtitle="WHAT IS V.STYLE?">
                      <p className="text-align">
                          <TextHighlightComponent
                              text=" V.style is a website that helps users gain insights about various fashion styles across cities and time."
                              color="vstyle"
                          /> The website accomplishes this by visualizing relevant information. The site includes the following views:
                      </p>
                      <img src={vstyleSolution} className="pic-space" width="100%" alt="vstyle solution" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INFO">
                      <ProjectInfoComponent
                          members="Yujia Wang, Joshua Yao, Yizhou Liu, Yuan Zhou"
                          time="Aug. 2018 &mdash; Dec. 2018"
                          keywords="Information Visualization | Fashion | Glyph Representation | Website Application"
                          myRole={[
                              "During the research phase, I explored our dataset to organize what we have in order to conduct several semi-structured interviews about user goals.",
                              "During the design phase, I contributed multiple ideas, including one major suggestion that eventually became our finalized concept. I also visualized the idea and created glyphs of clothing and human subjects. I then revised the final design and developed it into an actionable website.",
                              "Along the design phase, I conducted several usability testing sessions to acquire design implications to tackle some challenges. Based on the design implications, I iterated the design in order to find the best way to present V.style."
                          ]}
                      />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PROCESS">
                      <img src={vstyleProcess} className="pic-space" width="100%" alt="vstyle design process" />
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="RESEARCH">
                  <p className="text-align">
                      When beginning the project, our aim was to build an information visualization tool that could &nbsp;
                      <TextHighlightComponent
                          text="help people discover insights while remaining interesting"
                          color="vstyle"
                      />. To identify a clear design direction, we interviewed several experts in relation to their experiences and opinions of fashion. Combined with our dataset, we eventually identified our target audience and established two user goals.
                  </p>
                  <SubsectionComponent subtitle="DATA EXPLORATION">
                      <p className="text-align">Our dataset originates from a fashion research group based in Cornell University. It contains clothing attribute annotations for over 27000 images uploaded by people internationally. These attributes include:</p>
                      <img src={vstyleDataAttribute} className="pic-space" width="100%" alt="data attribute" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="TARGET AUDIENCE">
                      <p className="text-align">Before going to the design phase, we felt it necessary to identify target users for V.style, as to create a more targeted design with helpful attributes. The target users we identified are the following:</p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={6}>
                             <img src={vstyleAudience1} className="pic-space pic-style" width="100%" alt="audience 1" />
                          </Col>
                          <Col md={6}>
                              <img src={vstyleAudience2} className="pic-space pic-style" width="100%" alt="audience 1" />
                          </Col>
                      </Row>
                      <p className="text-align">
                          <TextHighlightComponent
                              text="Since our target users include experts and laymen users, the design required easily understandable visualizations and in-depth domain knowledge."
                              color="vstyle"
                          />
                      </p>
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <FooterComponent />
          </div>
      </div>
  );
}

export default Vstyle;
