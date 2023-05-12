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
import ProsConsComponent from "../components/prosConsComponent";
import ProblemBlockComponent from "../components/problemBlockComponent";
import VstyleFunComponent from "../components/vstyleFunComponent";
import foodex from "../image/foodex/foodex-pic.png";
import foodexSolution from "../image/foodex/solution.png";
import foodexProcess from "../image/foodex/process.svg";
import foodexSurvey1 from "../image/foodex/survey1.png";
import foodexSurvey2 from "../image/foodex/survey2.png";
import foodexInterview1 from "../image/foodex/ubereats.png";
import foodexInterview2 from "../image/foodex/grubhub.png";
import foodexInterview3 from "../image/foodex/wechat.png";
import foodexSynthesis from "../image/foodex/synthesis.png";
import foodexPersona1 from "../image/foodex/persona1.svg";
import foodexPersona2 from "../image/foodex/persona2.svg";
import foodexPersona3 from "../image/foodex/persona3.svg";
import foodexProblemStoryboard from "../image/foodex/problem-storyboard.svg";
import vstyleBrainstorming1 from "../image/vstyle/brainstorming1.jpg";
import vstyleBrainstorming2 from "../image/vstyle/brainstorming2.svg";
import vstyleAlternative1 from "../image/vstyle/alternative1.png";
import vstyleAlternative2 from "../image/vstyle/alternative2.png";
import vstyleAlternative3 from "../image/vstyle/alternative3.png";
import vstyleAlternative4 from "../image/vstyle/alternative4.png";
import vstyleIdeaSynthesis from "../image/vstyle/idea-synthesis.png";
import vstyleInfoStructure from "../image/vstyle/information-structure.png";
import vstyleHorizontalLayout from "../image/vstyle/layout1.png";
import vstyleVerticalLayout from "../image/vstyle/layout2.png";
import vstyleMatrix from "../image/vstyle/matrix.png";
import vstyleTrend1 from "../image/vstyle/trend1.mp4";
import vstyleTrend2 from "../image/vstyle/trend2.mp4";
import vstyleTrend3 from "../image/vstyle/trend3.mp4";
import vstyleTrend4 from "../image/vstyle/trend4.mp4";
import vstyleTrend5 from "../image/vstyle/trend5.mp4";
import vstyleSimilarity1 from "../image/vstyle/similarity1.mp4";
import vstyleSimilarity2 from "../image/vstyle/similarity2.mp4";
import vstyleCombo1 from "../image/vstyle/combo1.mp4";
import vstyleCombo2 from "../image/vstyle/combo2.mp4";
import vstyleCombo3 from "../image/vstyle/combo3.mp4";
import vstyleCombo4 from "../image/vstyle/combo4.mp4";
import vstyleAudience1 from "../image/vstyle/audience1.png";
import vstyleAudience2 from "../image/vstyle/audience2.png";
import vstyleDataAttribute from "../image/vstyle/data-attribute.png";

function FoodEx() {
  return (
      <div>
          <ProjectSidebarComponent
              navItem={[
                  {url: "#overview", name: "OVERVIEW"},
                  {url: "#research", name: "RESEARCH"},
                  {url: "#design", name: "DESIGN"},
                  {url: "#evaluation", name: "EVALUATION"},
                  {url: "#reflection", name: "REFLECTION"},
              ]}
          />
          <div className="content-wrapper">
              <ProjectImgComponent
                  imgSrc={foodex}
              />
              <ProjectSectionComponent title="OVERVIEW" id="overview">
                  <SubsectionComponent subtitle="PROBLEM">
                      <p>
                          Overseas Chinese students often live far from home and usually face a lot of pressure from college and studying. This can make finding nutritious meals every day a major problem. The obvious solution is to use food delivery services, which are quick and convenient.&nbsp;
                          <TextHighlightComponent
                              text="For overseas Chinese students, there are two main types of food delivery services they usually use, but they both come with some issues:"
                              color="foodex"
                          />
                      </p>
                      <p>For traditional food delivery apps,</p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="The total cost can be quite high."
                                  color="foodex"
                              />
                          </li>
                          <li>
                              It can be&nbsp;
                              <TextHighlightComponent
                                  text="hard for students to communicate with drivers regarding navigation."
                                  color="foodex"
                              />
                          </li>
                      </ul>
                      <p>For the WeChat platform,</p>
                      <ul>
                          <li>
                              It has a critical mass but&nbsp;
                              <TextHighlightComponent
                                  text="the whole service is unprofessional."
                                  color="foodex"
                              />
                          </li>
                      </ul>
                      <p>From the perspective of restaurants, they have expectations regarding food delivery services as well, including:</p>
                      <ul>
                          <li>Improving sales</li>
                          <li>Facilitating communication with customers</li>
                          <li>Making the food delivery services more efficient</li>
                      </ul>
                      <ProblemBlockComponent
                          title="Thus, a design challenge emerged:"
                          text="How can the affordability and communication of food delivery services be improved while maintaining the profit of restaurants?"
                      />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="SOLUTION">
                      <p>FoodEx is a WeChat Mini Program designed to improve affordability and communication of food delivery services for overseas Chinese students whilst maintaining the profit of restaurants. The main features are:</p>
                      <img src={foodexSolution} className="pic-space" width="100%" alt="foodex solution" />
                      <p>From the perspective of restaurants,</p>
                      <ul>
                          <li>Foodpool - social features facilitate sharing and advertising which improves sales.</li>
                          <li>Pre-organized pick-up station and fixed time – reduces communication efforts.</li>
                          <li>WeChat-based - more professional, provides a lot of potential customers, and it’s easy to advertise.</li>
                      </ul>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INFO">
                      <ProjectInfoComponent
                          members="Yujia Wang, Shengxi Wu, Yan Tan, Jiawei Zhang, Qixuan Huang"
                          time="Aug. 2018 &mdash; Dec. 2018"
                          keywords="Foodpool | Eco-friendly | Centralized Pick-up | WeChat Mini Program"
                          myRole={[
                              "During the research phase, I conducted several semi-structured interviews about the overall food delivery experiences of overseas Chinese students. I also conducted a comparitive analysis to explore the pros and cons of different food delivery services. I created the personas as well.",
                              "During the design phase, I actively contributed in the brainstorming session and created wireframes and high-fidelity user interfaces. I also revised the user flow and built an interactive prototype with InVision.",
                              "I then conducted several usability testing sessions to acquire design implications. Based on design implications, I iterated the design to continue improving our solution."
                          ]}
                      />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PROCESS">
                      <img src={foodexProcess} className="pic-space" width="100%" alt="foodex design process" />
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="RESEARCH" id="research">
                  <div>
                      <p>
                          We started our project by focusing on&nbsp;
                          <TextHighlightComponent
                              text="how overseas Chinese students eat every day"
                              color="foodex"
                          />, which we did for the following reasons:
                      </p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="Lacking of independency"
                                  color="foodex"
                              /> - many Chinese students lack of life skills because most Chinese parents focus more on academic education when raising their children.
                          </li>
                          <li>
                              <TextHighlightComponent
                                  text="Struggling with heavy academic activities"
                                  color="foodex"
                              /> - Chinese students are more likely to spend time on studying due to traditional Chinese culture.
                          </li>
                          <li>
                              <TextHighlightComponent
                                  text="Dealing with culture barrier"
                                  color="foodex"
                              /> - Chinese students need to adapt to the new environment including food culture.
                          </li>
                      </ul>
                      <p>Therefore, we conducted a survey to better understand how they overcome these difficulties.</p>
                  </div>
                  <SubsectionComponent subtitle="SURVEY">
                      <p>We launched a survey with questions about their common dining options and opinions about them.</p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={6}>
                             <img src={foodexSurvey1} className="pic-space pic-style" width="100%" alt="survey 1" />
                          </Col>
                          <Col md={6}>
                              <img src={foodexSurvey2} className="pic-space pic-style" width="100%" alt="survey 2" />
                          </Col>
                      </Row>
                      <p>
                          According to our survey results, a lot of students are&nbsp;
                          <TextHighlightComponent
                              text="tired of on-campus dining options and are seeking alternatives"
                              color="foodex"
                          />. A popular and convenient solution would be using a food delivery service.&nbsp;
                          <TextHighlightComponent
                              text="However, they complained that they’ve had negative experiences with these services"
                              color="foodex"
                          /> including Uber Eats, which is why we believe there is a design opportunity and why we decided to focus on this area.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INTERVIEW / COMPARITIVE ANALYSIS">
                      <p>Since food delivery services are a common choice among overseas students, we wanted to investigate the popular food delivery solutions/services existing on the market, and their using experience. We conducted several semi-structured interviews with overseas students for comparitive analysis:</p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={4}>
                             <img src={foodexInterview1} className="pic-space pic-style" width="100%" alt="unber eats" />
                          </Col>
                          <Col md={4}>
                              <img src={foodexInterview2} className="pic-space pic-style" width="100%" alt="grubhub" />
                          </Col>
                          <Col md={4}>
                              <img src={foodexInterview3} className="pic-space pic-style" width="100%" alt="wechat" />
                          </Col>
                      </Row>
                      <p>
                          After in-depth interviews with users, one one hand, they are complaining that food delivery apps like UberEats and Grubhub are usually&nbsp;
                          <TextHighlightComponent
                              text="more expensive and harder to communicate with drivers"
                              color="foodex"
                          />. On the other hand, although many of our users&nbsp;
                          <TextHighlightComponent
                              text="love the idea of using WeChat to order food"
                              color="foodex"
                          />, as an instant messenger,&nbsp;
                          <TextHighlightComponent
                              text="however, WeChat is not professional in many aspects of food delivery services"
                              color="foodex"
                          />, which could not provide the same level of user experience as other platforms.
                      </p>
                      <p>
                          To make our final solution more comprehensive, we also interviewed several restaurant owners to get some insights from their perspective. As a restaurant owner, they need to&nbsp;
                          <TextHighlightComponent
                              text="make sure that the service they provide has to be lucrative"
                          />. In terms of food delivery services, they shared some expectations to it:
                      </p>
                      <ul>
                          <li>
                              Improving sales - the sales need to&nbsp;
                              <TextHighlightComponent
                                  text="cover the membership fee at least"
                                  color="foodex"
                              />.
                          </li>
                          <li>
                              Facilitating communication with customers - many conflicts are due to&nbsp;
                              <TextHighlightComponent
                                  text="misunderstanding"
                                  color="foodex"
                              />.
                          </li>
                          <li>
                              Making the food delivery services more efficient -&nbsp;
                              <TextHighlightComponent
                                  text="one order one delivery seems not very efficient during the busiest hours"
                                  color="foodex"
                              />.
                          </li>
                      </ul>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="SYNTHESIS">
                      <p>After reviewing all the data we collected from the methods above, we summarized our users’ representative concerns about popular food delivery services.</p>
                      <img src={foodexSynthesis} className="pic-space" width="100%" alt="foodex synthesis" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PERSONA">
                      <p>We created three personas that summarized typical features of users as design requirements to guide our design directions.</p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={4}>
                             <img src={foodexPersona1} className="pic-space pic-style" width="100%" alt="persona 1" />
                          </Col>
                          <Col md={4}>
                              <img src={foodexPersona2} className="pic-space pic-style" width="100%" alt="persona 2" />
                          </Col>
                          <Col md={4}>
                              <img src={foodexPersona3} className="pic-space pic-style" width="100%" alt="persona 3" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PROBLEM STORYBOARD">
                      <p>To better illustrate the problem, we created a storyboard that depicts the problem scenario when they use food delivery services.</p>
                      <img src={foodexProblemStoryboard} className="pic-space pic-style" width="100%" alt="problem storyboard" />
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="DESIGN" id="design">
                  <p>

                  </p>
              </ProjectSectionComponent>
          </div>
      </div>
  );
}

export default FoodEx;
