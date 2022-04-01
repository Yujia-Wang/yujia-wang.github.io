import "../css/index.css";
import "../css/App.css";
import FooterComponent from "../components/footerComponent";
import ProjectSidebarComponent from "../components/projectSidebarComponent";
import ProjectImgComponent from "../components/projectImgComponent";
import ProjectOverviewComponent from "../components/projectOverviewComponent";
import SubsectionComponent from "../components/subsectionComponent";
import ProjectInfoComponent from "../components/projectInfoComponent";
import TextHighlightComponent from "../components/textHighlightComponent";
import vstyle from "../image/vstyle/vstyle-pic.png";
import vstyleSolution from "../image/vstyle/solution.png";

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
                  <SubsectionComponent subtitle="WHAT IS V.STYLE?">
                      <p className="text-align">
                          <TextHighlightComponent
                              text=" V.style is a website that helps users gain insights about various fashion styles across cities and time."
                              color="linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.1) 50%)"
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
                  <SubsectionComponent></SubsectionComponent>
              </ProjectOverviewComponent>
              <FooterComponent />
          </div>
      </div>
  );
}

export default Vstyle;
