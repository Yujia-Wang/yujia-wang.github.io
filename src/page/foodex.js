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
import foodexBrainstorming from "../image/foodex/brainstorm.svg";
import foodexFoodpool1 from "../image/foodex/foodpool-concept1.svg";
import foodexFoodpool2 from "../image/foodex/foodpool-concept2.svg";
import foodexFoodpool3 from "../image/foodex/foodpool-concept3.svg";
import foodexCommunication1 from "../image/foodex/communication-concept1.svg";
import foodexCommunication2 from "../image/foodex/communication-concept2.svg";
import foodexCommunication3 from "../image/foodex/communication-concept3.svg";
import foodexSolutionStoryboard1 from "../image/foodex/solution-storyboard1.svg";
import foodexSolutionStoryboard2 from "../image/foodex/solution-storyboard2.svg";
import foodexBusiness from "../image/foodex/business-canvas.svg";
import foodexWireframe from "../image/foodex/wireframe-flow.png";
import foodexIterative1 from "../image/foodex/iterative1.png";
import foodexIterative2 from "../image/foodex/iterative2.png";
import foodexIterative3 from "../image/foodex/iterative3.png";
import foodexEvaluation from "../image/foodex/evaluation.png";

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
                          text={[
                              "How can the affordability and communication of food delivery services be improved while maintaining the profit of restaurants?"
                          ]}
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
                      <Row>
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
                      <Row>
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
                      <Row>
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
                      Based on our research, we found that although WeChat is not a professional food delivery platform,&nbsp;
                      <TextHighlightComponent
                          text="many overseas Chinese students still prefer to order food from it because they have been used to doing everything with WeChat"
                          color="foodex"
                      />. We believe there is a design opportunity to&nbsp;
                      <TextHighlightComponent
                          text="build a WeChat Mini Program that incorporates relevant food delivery features while utilizing the advantage of the critical mass of WeChat"
                          color="foodex"
                      />.
                  </p>
                  <SubsectionComponent subtitle="BRAINSTORMING">
                      <p>
                          Since we have decided to focus on WeChat, we conducted a brainstorming session to come up with ideas&nbsp;
                          <TextHighlightComponent
                              text="around traditional food delivery apps to tackle its two major problems"
                              color="foodex"
                          />.
                      </p>
                      <p>
                          In terms of affordability, our first thought was group-order food since&nbsp;
                          <TextHighlightComponent
                              text="group-order has already become a very popular business model in China that helps customers to save money meanwhile increasing the profit of business owners"
                              color="foodex"
                          />. Successul business examples like Taobao, Pinduoduo, and Meituan, have proved that group-order is a win-win situation. However, to make group-order effective, a certain amount of users are necessary. Therefore, our challenge extended to:&nbsp;
                          <TextHighlightComponent
                              text="how we can encourage users to participate in foodpool?"
                              color="foodex"
                          />
                      </p>
                      <img src={foodexBrainstorming} className="pic-space pic-style" width="100%" alt="foodex brainstorming" />
                      <p>After considering their feasibility and discarding some of them, we narrowed them down to three ideas for each issue. We then sketched each idea and delivered them to users for feedback.</p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="DESIGN ALTERNATIVES - FOODPOOL">
                      <div className="stack-group">
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Level-up Gamification</p>
                                  <p>Users will be given a series of missions to accomplish. Missions, for example, place 2 more orders, share to 3 more friends, and so on, will encourage users to be more active in this app. Once they reach to the next level, they will get more rewards and discounts.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Game-like",
                                          "The sense of achievement",
                                          "Interesting to use"
                                      ]}
                                      cons={[
                                          "High-frequency use required",
                                          "Patience required"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexFoodpool1} className="pic-style" width="100%" alt="level-up gamification" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Tiered Discount</p>
                                  <p>Users are encouraged to invite more people to the foodpool by distributing an invitation link. Once the headcount reaches to a certain quota, all users in this foodpool will be able to enjoy the discount of next level.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Motivated",
                                          "Enjoy with friends",
                                          "Easy to use"
                                      ]}
                                      cons={[
                                          "Invitations can be disturbing"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexFoodpool2} className="pic-style" width="100%" alt="tiered discount" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Ranking System</p>
                                  <p>Each restaurant will set up a ranking list of users who are active in sharing invitation links. Top users will get discounts from the restaurant.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Interesting",
                                          "Motivated"
                                      ]}
                                      cons={[
                                          "Loyalty required",
                                          "Too competitive",
                                          "Too much effort"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexFoodpool3} className="pic-style" width="100%" alt="ranking system" />
                              </Col>
                          </Row>
                      </div>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="DESIGN ALTERNATIVES - COMMUNICATION">
                      <div className="stack-group">
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Push Notification</p>
                                  <p>Users will receive a push notification from the delivery driver before they arrive at the pick-up station. It reduces anxiety while they are waiting and helps users to prepare ahead.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Useful",
                                          "Effective"
                                      ]}
                                      cons={[
                                          "Worry about the accuracy"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexCommunication1} className="pic-style" width="100%" alt="push notification" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Food Locker</p>
                                  <p>The delivery driver will drop multiple food orders in lockers on one ride. Users can pick up their food with their barcode. This eliminates the communication process between users and drivers completely during delivery.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Convenient",
                                          "Flexible",
                                          "Environment-friendly"
                                      ]}
                                      cons={[
                                          "What if I can't pick it up"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexCommunication2} className="pic-style" width="100%" alt="food locker" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={7}>
                                  <p className="bold">Driver-assisted Pick-up</p>
                                  <p>The drivers will deliver multiple food orders on one ride. They will wait at the pick-up station and distribute the food. They can also help users in case they have any other needs. This changes online communication to face-to-face communication.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Helpful",
                                          "Convenient"
                                      ]}
                                      cons={[
                                          "Might need to wait"
                                      ]}
                                  />
                              </Col>
                              <Col md={5}>
                                  <img src={foodexCommunication3} className="pic-style" width="100%" alt="driver-assisted pick-up" />
                              </Col>
                          </Row>
                      </div>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="FINAL DESIGN CONCEPT">
                      <p>From the feedback of users, we got many valuable insights and reconsidered about these concepts. Eventually, we combined users' favorite ideas and established the final design concept.</p>
                      <ul>
                          <li>
                              It’s WeChat-based - very&nbsp;
                              <TextHighlightComponent
                                  text="familiar to target users and requires few set-up"
                                  color="foodex"
                              />.
                          </li>
                          <li>
                              Foodpool - enables users to&nbsp;
                              <TextHighlightComponent
                                  text="group-order food and get various discounts based on headcounts"
                                  color="foodex"
                              />.
                          </li>
                          <li>
                              Pre-organized pick-up station and fixed time - enables users to&nbsp;
                              <TextHighlightComponent
                                  text="pick up food at pre-organized pick-up lockers"
                                  color="foodex"
                              />.
                          </li>
                      </ul>
                      <p>To better illustrate how our solution solves the problem, we created a solution storyboard as well.</p>
                      <Row>
                          <Col md={6}>
                             <img src={foodexSolutionStoryboard1} className="pic-space pic-style" width="100%" alt="solution storyboard before" />
                          </Col>
                          <Col md={6}>
                              <img src={foodexSolutionStoryboard2} className="pic-space pic-style" width="100%" alt="solution storyboard after" />
                          </Col>
                      </Row>
                      <p>
                          As illustrated together with the problem storyboard, our solution provides a foodpool system and tiered discount model to help users&nbsp;
                          <TextHighlightComponent
                              text="reduce their average cost"
                              color="foodex"
                          />. Meanwhile, the food locker can&nbsp;
                          <TextHighlightComponent
                              text="eliminate the needs to communicate with the delivery drivers, saving troubles for both sides"
                              color="foodex"
                          />. And&nbsp;
                          <TextHighlightComponent
                              text="multiple orders in one delivery is also environment-friendly"
                              color="foodex"
                          />.
                      </p>
                      <ProblemBlockComponent
                          title="Wait..."
                          text={[
                              "What about restaurant owners?",
                              "How they feel about our final design concept?"
                          ]}
                      />
                      <p>
                          We interviewed several restaurant owners to get their opinions about our final solution, and found that they would love to set different levels of discounts as long as they can get enough customers and it's profitable. However, they were worried that&nbsp;
                          <TextHighlightComponent
                              text="they might not be able to get enough orders during the fixed time period"
                              color="foodex"
                          />, which leads our app to have no difference with apps like UberEats. Thus, we changed our final solution:&nbsp;
                          <TextHighlightComponent
                              text="users can only purchase lunch or dinner"
                              color="foodex"
                          />. Through this way, students can fulfill their needs of daily meals meanwhile restaurants can also maintain acceptable orders.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="BUSINESS CANVAS">
                      <p>To become a professional and comprehensive business, we created a business canvas to help us establish our business model.</p>
                      <img src={foodexBusiness} className="pic-space pic-style" width="100%" alt="business canvas" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="WIREFRAME & USER FLOW">
                      <p>
                          We started our visual design by creating a low-fi wireframe. The wireframe contains the major functions of our final design concept. Then, we delivered to users for feedback, and&nbsp;
                          <TextHighlightComponent
                              text="make sure our visual design structure can lead users to fulfill their needs"
                              color="foodex"
                          />.
                      </p>
                      <img src={foodexWireframe} className="pic-space" width="100%" alt="foodex wireframe" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="ITERATIVE PROCESS">
                      <p>We asked 5 users and 2 restaurant owners to test our wireframes. Based on testing results and user feedback, we identified the following problems and redesigned some features.</p>
                      <p className="bold">Home</p>
                      <img src={foodexIterative1} className="pic-space" width="100%" alt="home iteration" />
                      <p className="bold">My Cart</p>
                      <img src={foodexIterative2} className="pic-space" width="100%" alt="my cart iteration" />
                      <p className="bold">My Order</p>
                      <img src={foodexIterative3} className="pic-space" width="100%" alt="my order iteration" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="FINAL PROTOTYPE">

                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="EVALUATION" id="evaluation">
                  <div>
                     <p>From the initial low-fi wireframes to final hi-fi prototype, we conducted 3 heuristic evaluation sessions and 20 usability testing sessions in total. The results proved that our final design is usable, efficient, and able to fulfill users’ needs.</p>
                    <img src={foodexEvaluation} className="pic-space pic-style" width="100%" alt="evaluation" />
                  </div>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="REFLECTION" id="reflection">
                  <div>
                      <p>Designing for users is not an easy job to do, especially when you need to consider about business as well, it becomes even harder. There are a lot of trade-offs you need to deal with. For example, during the design process, some restaurants owners would like to give away free drinks or sides instead of actual money, however, most users prefer to get the actual money rebate. Eventually, we decided to give restaurant owners the freedom to set up the discount levels, but it has to be money related. By this way, we help make sure the restaurant can still get profit meanwhile it doesn’t sacrifice users’ interests.</p>
                      <p>It leads me to think about the relationship between business and user objectives. In this case, as a relatively new service provider, to get into the market and become competitive, FoodEx can’t always think about its stakeholders and restaurant owners. It has to start focusing on users. Putting the users’ needs first is how we attract more users, and eventually benefit our stakeholders and restaurants. As Andrew Kucheriavy, the CEO & founder of Intechnic, said: you can’t reach your business objectives at the expense of those of your users.</p>
                  </div>
              </ProjectSectionComponent>
          </div>
      </div>
  );
}

export default FoodEx;
