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
import ProblemBlockComponent from "../components/problemBlockComponent";
import NextPreviousComponent from "../components/nextPreviousComponent";
import fittingeasy from "../resource/fittingeasy/fittingeasy-pic.png";
import fittingeasySolution from "../resource/fittingeasy/solution.png";
import fittingeasyProcess from "../resource/fittingeasy/process.svg";
import fittingeasyCompetitive1 from "../resource/fittingeasy/competitive-oak.png";
import fittingeasyCompetitive2 from "../resource/fittingeasy/competitive-memomi.png";
import fittingeasyCompetitive3 from "../resource/fittingeasy/competitive-AR.png";
import fittingeasyTaskAnalysis from "../resource/fittingeasy/task-analysis.jpg";
import fittingeasySurvey1 from "../resource/fittingeasy/survey1.png";
import fittingeasySurvey2 from "../resource/fittingeasy/survey2.png";
import fittingeasyInterview1 from "../resource/fittingeasy/interview1.png";
import fittingeasyInterview2 from "../resource/fittingeasy/interview2.png";
import fittingeasyInterview3 from "../resource/fittingeasy/interview3.png";
import fittingeasyInterview4 from "../resource/fittingeasy/interview4.png";
import fittingeasySynthesis from "../resource/fittingeasy/synthesis.png";
import fittingeasyPersona1 from "../resource/fittingeasy/persona1.png";
import fittingeasyPersona2 from "../resource/fittingeasy/persona2.png";
import fittingeasyJourney from "../resource/fittingeasy/journey-map.png";
import fittingeasyBrainstorming1 from "../resource/fittingeasy/brainstorming1.jpg";
import fittingeasyBrainstorming2 from "../resource/fittingeasy/brainstorming2.jpg";
import fittingeasyBrainstorming3 from "../resource/fittingeasy/brainstorming3.jpg";
import fittingeasyFlow1 from "../resource/fittingeasy/userflow-1.png";
import fittingeasyFlow2 from "../resource/fittingeasy/userflow-2.png";
import fittingeasyFlow3 from "../resource/fittingeasy/userflow-3.png";
import fittingeasyFlow4 from "../resource/fittingeasy/userflow-4.png";
import fittingeasyIteration1 from "../resource/fittingeasy/iteration1.png";
import fittingeasyIteration2 from "../resource/fittingeasy/iteration2.png";
import fittingeasyIteration3 from "../resource/fittingeasy/iteration3.png";
import fittingeasyIteration4 from "../resource/fittingeasy/iteration4.png";
import fittingeasyIteration5 from "../resource/fittingeasy/iteration5.png";

function FittingEasy() {
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
                  imgSrc={fittingeasy}
              />
              <ProjectSectionComponent title="OVERVIEW" id="overview">
                  <SubsectionComponent subtitle="PROBLEM">
                      <p>Wheelchair users are facing more issues when shopping in a physical store, especially in the following aspects.</p>
                      <ul>
                          <li>
                              Physical stores are&nbsp;
                              <TextHighlightComponent
                                  text="not accessible enough"
                                  color="fittingeasy"
                              /> in terms of their layouts.
                          </li>
                          <li>
                              Accessible fitting rooms are often&nbsp;
                              <TextHighlightComponent
                                  text="unavailable due to inappropriate occupation"
                                  color="fittingeasy"
                              />.
                          </li>
                      </ul>
                      <ProblemBlockComponent
                          title="Thus, a design challenge emerged:"
                          text={[
                              "How can we improve the fitting room experience for wheelchair users?"
                          ]}
                      />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="SOLUTION">
                      <p>Here we present FittingEasy, a convenient app that helps wheelchair users go through try-on process smoothly. The main functions are:</p>
                      <img src={fittingeasySolution} className="pic-space" width="100%" alt="fittingeasy solution" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INFO">
                      <ProjectInfoComponent
                          members="Yujia Wang, Kaylin Broussard, Karthik Srinivasan, Jemma Yang"
                          time="Aug. 2017 &mdash; Dec. 2017"
                          keywords="Universal Design | Clothing Shopping | Mobile Application"
                          myRole={[
                              "During the research phase, I conducted a detailed literature review on existing solutions and a competitive analysis. The task analysis was revised by me. I also conducted several semi-structured interviews with potential users and accessibility experts. I created the personas and user journey map as well.",
                              "During the design phase, I actively contributed in the brainstorming session, and created a part of wireframes and high-fidelity user interfaces. I also revised the user flow and built an interactive prototype with InVision.",
                              "Then, I conducted several usability testing sessions to acquire design implications. Based on design implications, I iterated the design to keep improving our solution."
                          ]}
                      />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PROCESS">
                      <img src={fittingeasyProcess} className="pic-space" width="100%" alt="fittingeasy design process" />
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="RESEARCH" id="research">
                  <p>
                      We started our project by exploring our problem space, aiming to&nbsp;
                      <TextHighlightComponent
                          text="help customers to improve their in-store clothes shopping experience"
                          color="fittingeasy"
                      />. However, from our user research, we found that there are many existing technology solutions and related services that have already tackled this area,&nbsp;
                      <TextHighlightComponent
                          text="but they are not designed for wheelchair users"
                          color="fittingeasy"
                      />. Thus, we narrowed down our user group and problem space, and pivoted our research to focus on two particular problems that most wheelchair users are concerned about -&nbsp;
                      <TextHighlightComponent
                          text="the availability of fitting rooms and the accessibility of physical stores"
                          color="fittingeasy"
                      />.
                  </p>
                  <SubsectionComponent subtitle="COMPETITIVE ANALYSIS">
                      <p>We analyzed several previous solutions regarding to interactive technologies that offers different in-store clothes shopping experience.</p>
                      <Row>
                          <Col md={4}>
                              <img src={fittingeasyCompetitive1} className="pic-space pic-style" width="100%" alt="oak mirror" />
                              <p className="center">Oak Mirror | Photo: Oak Labs</p>
                          </Col>
                          <Col md={4}>
                              <img src={fittingeasyCompetitive2} className="pic-space pic-style" width="100%" alt="memomi" />
                              <p className="center">memomi | Photo: MemoMi Labs</p>
                          </Col>
                          <Col md={4}>
                              <img src={fittingeasyCompetitive3} className="pic-space pic-style" width="100%" alt="ar" />
                              <p className="center">AR | Photo: Zulqarnain Rashid</p>
                          </Col>
                      </Row>
                      <p>We found that:</p>
                      <ul>
                          <li>
                              Most existing interactive technologies&nbsp;
                              <TextHighlightComponent
                                  text="don’t fully take wheelchair users into consideration"
                                  color="fittingeasy"
                              />.
                          </li>
                          <li>Some existing interactive technologies like smart mirror are not accurate enough.</li>
                      </ul>
                      <p>
                          Current solutions are dedicated to improve in-store shopping experience for the general population while neglect that wheelchair users may have the same need.&nbsp;
                          <TextHighlightComponent
                              text="Therefore, we decided to narrow down our user group to wheelchair users"
                              color="fittingeasy"
                          />.
                      </p>
                      <ProblemBlockComponent
                          title="But..."
                          text={[
                              "Why in-store clothes shopping?",
                              "Isn't online shopping more convenient?"
                          ]}
                      />
                      <p>This question is most people feel confused about when it comes to in-store shopping, even within our team. Thus, we decided to conduct some competitive analysis to figure out if wheelchair users have the need to go to a physical store and why. And we found that:</p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="Many clothes bought online don’t fit very well"
                                  color="fittingeasy"
                              />. It can be the size, the color differentiated from the pictures, the style, etc.
                          </li>
                          <li>
                              <TextHighlightComponent
                                  text="They have the same need as other people to see, touch and feel products as well as take items home immediately"
                                  color="fittingeasy"
                              />.
                          </li>
                          <li>
                              In-store shopping is an unique experience that has influenced their lives in different ways. For them, in-store shopping is also&nbsp;
                              <TextHighlightComponent
                                  text="a chance to get out the room and have a good time with their friends or families"
                                  color="fittingeasy"
                              />.
                          </li>
                      </ul>
                      <p>The findings helped us to make up our mind to focus on wheelchair users.</p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="LITERATURE REVIEW">
                      <p>
                          <TextHighlightComponent
                              text="While ADA requires all retail stores must have necessary accessible facilities for people with various impairments, some stores can’t achieve this standard due to several reasons"
                              color="fittingeasy"
                          />, for example, limited store space, large customer volume in a certain period of time, and so on. The realistic limitations of retail stores and wheelchair users’ huge needs for a better fitting room experience led us to consider&nbsp;
                          <TextHighlightComponent
                              text="how we can improve it in limited circumstances"
                              color="fittingeasy"
                          />.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="TASK ANALYSIS">
                      <p>
                          With an overview of problems in mind, we decided to&nbsp;
                          <TextHighlightComponent
                              text="narrow down our research scope to specific problems"
                              color="fittingeasy"
                          />. Therefore, we conducted a task analysis to break down the shopping experience to steps, and further captured user needs and possible pain points.
                      </p>
                      <Row>
                          <Col md={{span: 6, offset: 3}}>
                              <img src={fittingeasyTaskAnalysis} className="pic-space" width="100%" alt="task analysis" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="SURVEY">
                      <p>
                          We launched a survey with questions about their current shopping situation and opinions about it. We found some strong evidence to prove that&nbsp;
                          <TextHighlightComponent
                              text="wheelchair users are not having satisfying physical store shopping experience, despite the same need as we do"
                              color="fittingeasy"
                          />.
                      </p>
                      <ul>
                          <li>
                              Nearly&nbsp;
                              <TextHighlightComponent
                                  text="75%"
                                  color="fittingeasy"
                              /> of respondents said they would go out for shopping.
                          </li>
                          <li>
                              Comparing online shopping and physical store shopping,&nbsp;
                              <TextHighlightComponent
                                  text="30.8%"
                                  color="fittingeasy"
                              /> prefer shopping online,&nbsp;
                              <TextHighlightComponent
                                  text="15.4%"
                                  color="fittingeasy"
                              /> prefer physical stores, and&nbsp;
                              <TextHighlightComponent
                                  text="53.8%"
                                  color="fittingeasy"
                              /> have no preference between the two.
                          </li>
                          <li>
                              When asked whether they would ask for assistance when shopping in stores,&nbsp;
                              <TextHighlightComponent
                                  text="46.2%"
                                  color="fittingeasy"
                              /> respondents said they prefer not asking for any help.
                          </li>
                      </ul>
                      <Row>
                          <Col md={6}>
                              <img src={fittingeasySurvey1} className="pic-space pic-style" width="100%" alt="survey 1" />
                          </Col>
                          <Col md={6}>
                              <img src={fittingeasySurvey2} className="pic-space pic-style" width="100%" alt="survey 2" />
                          </Col>
                      </Row>
                      <p>These results led us to establish some rough design criterias for the coming design process:</p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="The final design should not have too much extra help from store assistants but the suitable amount of help like other people receive"
                                  color="fittingeasy"
                              />.
                          </li>
                          <li>
                              <TextHighlightComponent
                                  text="Motivate wheelchair users to go shopping in a physical store"
                                  color="fittingeasy"
                              />. Based on our findings, they have this need, however, the poor in-store shopping experience stops them to go.
                          </li>
                      </ul>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INTERVIEW">
                      <p>
                          We interviewed 4 participants including two wheelchair users, an occupational therapist, and a research scientist who specializes in accessibility.&nbsp;
                          <TextHighlightComponent
                              text="We obtained many key user insights and identified our problem space"
                              color="fittingeasy"
                          />.
                      </p>
                      <Row>
                          <Col md={3}>
                              <img src={fittingeasyInterview1} className="pic-space pic-style" width="100%" alt="interview 1" />
                          </Col>
                          <Col md={3}>
                              <img src={fittingeasyInterview2} className="pic-space pic-style" width="100%" alt="interview 2" />
                          </Col>
                          <Col md={3}>
                              <img src={fittingeasyInterview3} className="pic-space pic-style" width="100%" alt="interview 3" />
                          </Col>
                          <Col md={3}>
                              <img src={fittingeasyInterview4} className="pic-space pic-style" width="100%" alt="interview 4" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="SYNTHESIS">
                      <p>
                          After reviewed all the data we collected from the methods above, we extracted and synthesized the data into&nbsp;
                          <TextHighlightComponent
                              text="two specific core problems based on what wheelchair users are most concerned: the availability of fitting rooms and the accessibility of physical stores"
                              color="fittingeasy"
                          />.
                      </p>
                      <img src={fittingeasySynthesis} className="pic-space" width="100%" alt="synthesis" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PERSONA">
                      <p>We created two personas that contain typical features of wheelchair users to keep reminding us of who we are designing for and what they are struggling with.</p>
                      <Row>
                          <Col md={6}>
                              <img src={fittingeasyPersona1} className="pic-space pic-style" width="100%" alt="persona 1" />
                          </Col>
                          <Col md={6}>
                              <img src={fittingeasyPersona2} className="pic-space pic-style" width="100%" alt="persona 2" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="USER JOURNEY">
                      <p>We also created a user journey map for wheelchair users to help us better empathize with our users as well as highlight the pain points.</p>
                      <img src={fittingeasyJourney} className="pic-space pic-style" width="100%" alt="journey map" />
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="DESIGN" id="design">
                  <SubsectionComponent subtitle="BRAINSTORMING">
                      <p>
                          During this session, we came up with plenty of ideas around our problem space. Then we coded and categorized these ideas by their type, such as body scanning, virtual assistants, tactile displays, and mechanical solutions. Once we structured the data, more patterns emerged. Next,&nbsp;
                          <TextHighlightComponent
                              text="we combined similar ideas, and compared each idea's feasibility to narrow down to three design concepts"
                              color="fittingeasy"
                          />.
                      </p>
                      <Row>
                          <Col md={4}>
                              <img src={fittingeasyBrainstorming1} className="pic-space pic-style" width="100%" alt="brainstorming 1" />
                          </Col>
                          <Col md={4}>
                              <img src={fittingeasyBrainstorming2} className="pic-space pic-style" width="100%" alt="brainstorming 2" />
                          </Col>
                          <Col md={4}>
                              <img src={fittingeasyBrainstorming3} className="pic-space pic-style" width="100%" alt="brainstorming 3" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="DESIGN ALTERNATIVES">
                      <Row>
                          <Col md={2}>
                              <p>Concept 1</p>
                          </Col>
                          <Col md={10}>
                              <p>
                                  The store sets up body scanning technology which would&nbsp;
                                  <TextHighlightComponent
                                      text="scan a customer's body and collect body size information"
                                      color="fittingeasy"
                                  />. The information will directly send to customer's phone while the store won't have access to it. When the customer finds some favored clothes, they can use the phone to&nbsp;
                                  <TextHighlightComponent
                                      text="scan the price tag, and the phone will show the information about how this clothes fits"
                                      color="fittingeasy"
                                  />. Also, the customer can check the virtual image of these clothes shown on a model.
                              </p>
                          </Col>
                      </Row>
                      <Row>
                          <Col md={2}>
                              <p>Concept 2</p>
                          </Col>
                          <Col md={10}>
                              <p>
                                  <TextHighlightComponent
                                      text="Customers can reserce a fitting room before they go to the store. They can pre-order clothes online, or select clothes in stores depending on their preference"
                                      color="fittingeasy"
                                  />. The selected clothes will be sent to the reserved fitting room before the customer arrives there. If the aisles are too narrow to get through, they can pre-order online and go straight to the fitting room without going through every aisle.
                              </p>
                          </Col>
                      </Row>
                      <Row>
                          <Col md={2}>
                              <p>Concept 3</p>
                          </Col>
                          <Col md={10}>
                              <p>
                                  <TextHighlightComponent
                                      text="Users can browse clothes options via a large in-store interactive display screen"
                                      color="fittingeasy"
                                  />. Users browse and search through a system that is similar to an online shopping experience, narrowing down categories and finding specific types of items.&nbsp;
                                  <TextHighlightComponent
                                      text="Clothes are displayed on the screen in actual size with relevant specification information, such as size"
                                      color="fittingeasy"
                                  />, price, and color options. Users then have the option to have the clothes pulled for them, or sent directly to a specified fitting room to try on.
                              </p>
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="USER FEEDBACK">
                      <p>
                          To keep narrowing down our design concepts, we decided to ask users for feedback.&nbsp;
                          <TextHighlightComponent
                              text="After we finished paper sketch and storyboards for our design concepts, we launched a survey and interviewed experts to gather user feedback"
                              color="fittingeasy"
                          />. We got many valuable insights and reconsidered how we could better design our final solution.&nbsp;
                          <TextHighlightComponent
                              text="Eventually, we built our final version of design concept incorporating shining points of each original ones"
                              color="fittingeasy"
                          />.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="HI-FI DESIGN & USER FLOW">
                      <p className="bold">Login & Signup</p>
                      <img src={fittingeasyFlow1} className="pic-space" width="100%" alt="login and signup flow" />
                      <p className="bold">Reserve a Fitting Room</p>
                      <img src={fittingeasyFlow2} className="pic-space" width="100%" alt="reserve a fitting room flow" />
                      <p className="bold">Pre-order Clothes</p>
                      <img src={fittingeasyFlow3} className="pic-space" width="100%" alt="preorder clothes flow" />
                      <p className="bold">Scan to Check Fittingness</p>
                      <img src={fittingeasyFlow4} className="pic-space" width="100%" alt="scan to check fittingness flow" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="PROTOTYPE">

                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="EVALUATION" id="evaluation">
                  <p>
                      After we finished the prototype, we had several experts and users go through our application.&nbsp;
                      <TextHighlightComponent
                          text="Through usability testing, we got their impressions and identified design flaws"
                          color="fittingeasy"
                      />.
                  </p>
                  <SubsectionComponent subtitle="USABILITY TESTING">
                      <p>
                          First, we developed&nbsp;
                          <TextHighlightComponent
                              text="1 example task to help users familiarize with the think-aloud process, and 4 tasks that cover the main features of our app"
                              color="fittingeasy"
                          />. They are:
                      </p>
                      <ul>
                          <li>Example Task: Enter measurements.</li>
                          <li>Task 1: Make a fitting room reservation and check the reservation detail.</li>
                          <li>Task 2: Pre-order the BDG Corduroy Trucker Jacket and make sure it has been successfully ordered.</li>
                          <li>Task 3: Scan a barcode of an item and send it to the fitting room.</li>
                          <li>Task 4: Imagine you are in the fitting room, and you want to try on more clothes. Order more clothes to try on.</li>
                      </ul>
                      <p>
                          4 users helped us perform usability testing.&nbsp;
                          <TextHighlightComponent
                              text="As they performed tasks, we asked them to think aloud"
                              color="fittingeasy"
                          />. Once the users completed their tasks, we asked several follow-up questions. Then they rated our design through the questionnaire based on SUS.&nbsp;
                          <TextHighlightComponent
                              text="The SUS result is 84.375, indicating that users are very satisfied"
                              color="fittingeasy"
                          />.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="DESIGN ITERATIONS">
                      <p>Based on testing results and user feedback, we identified the following problems and redesigned some features.</p>
                      <Row>
                          <Col md={6}>
                              <img src={fittingeasyIteration1} className="pic-space" width="100%" alt="iteration 1" />
                          </Col>
                          <Col md={6}>
                              <img src={fittingeasyIteration2} className="pic-space" width="100%" alt="iteration 2" />
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                              <img src={fittingeasyIteration3} className="pic-space" width="100%" alt="iteration 3" />
                          </Col>
                          <Col md={6}>
                              <img src={fittingeasyIteration4} className="pic-space" width="100%" alt="iteration 4" />
                          </Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                              <img src={fittingeasyIteration5} className="pic-space" width="100%" alt="iteration 5" />
                          </Col>
                      </Row>
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="REFLECTION" id="reflection">
                  <div>
                      <p>This is the first project that I was involved from the very beginning to the end. I learned a lot about evidence-based design process. Being proactive in every step, I have laid a solid foundation for future design work.</p>
                      <p>I was also impressed with the importance of accessible design for people with impairments. A wheelchair user said:</p>
                      <p style={{fontStyle: "italic"}}>
                          <TextHighlightComponent
                              text="&rdquo;You probably never think about what technology means to disabled people. For you, it is just an alternative option, but for us, it helps us to survive in this world.&rdquo;"
                              color="fittingeasy"
                          />
                      </p>
                      <p>I believe our work will benefit people significantly. I sincerely hope more and more people will join us in this cause and contribute to a better tomorrow for those in special needs.</p>
                  </div>
                  <NextPreviousComponent
                      previousText={"V.style"}
                      previousLink={"/vstyle"}
                      nextText={"DrChrono"}
                      nextLink={"/drchrono"}
                  />
              </ProjectSectionComponent>
              <FooterComponent />
          </div>
      </div>
  );
}

export default FittingEasy;
