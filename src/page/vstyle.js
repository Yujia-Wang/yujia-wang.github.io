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
import vstyle from "../image/vstyle/vstyle-pic.png";
import vstyleSolution from "../image/vstyle/solution.png";
import vstyleProcess from "../image/vstyle/process.svg";
import vstyleDataAttribute from "../image/vstyle/data-attribute.png";
import vstyleAudience1 from "../image/vstyle/audience1.png";
import vstyleAudience2 from "../image/vstyle/audience2.png";
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

function Vstyle() {
  return (
      <div>
          <ProjectSidebarComponent
              navItem={[
                  {url: "#overview", name: "OVERVIEW"},
                  {url: "#research", name: "RESEARCH"},
                  {url: "#design", name: "DESIGN"},
                  {url: "#evaluation", name: "EVALUATION"},
                  {url: "#reflection", name: "REFLECTION"},
                  {url: "#fun", name: "FUN !"},
              ]}
          />
          <div className="content-wrapper">
              <ProjectImgComponent
                  imgSrc={vstyle}
                  showBtn={true}
                  projectLink="https://vstyle-infoviz.github.io"
                  btnText="Try V.style"
              />
              <ProjectSectionComponent title="OVERVIEW" id="overview">
                  <SubsectionComponent subtitle="WHAT IS V.STYLE?">
                      <p>
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
              <ProjectSectionComponent title="RESEARCH" id="research">
                  <p>
                      When beginning the project, our aim was to build an information visualization tool that could&nbsp;
                      <TextHighlightComponent
                          text="help people discover insights while remaining interesting"
                          color="vstyle"
                      />. To identify a clear design direction, we interviewed several experts in relation to their experiences and opinions of fashion. Combined with our dataset, we eventually identified our target audience and established two user goals.
                  </p>
                  <SubsectionComponent subtitle="DATA EXPLORATION">
                      <p>Our dataset originates from a fashion research group based in Cornell University. It contains clothing attribute annotations for over 27000 images uploaded by people internationally. These attributes include:</p>
                      <img src={vstyleDataAttribute} className="pic-space" width="100%" alt="data attribute" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="TARGET AUDIENCE">
                      <p>Before going to the design phase, we felt it necessary to identify target users for V.style, as to create a more targeted design with helpful attributes. The target users we identified are the following:</p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={6}>
                             <img src={vstyleAudience1} className="pic-space pic-style" width="100%" alt="audience 1" />
                          </Col>
                          <Col md={6}>
                              <img src={vstyleAudience2} className="pic-space pic-style" width="100%" alt="audience 2" />
                          </Col>
                      </Row>
                      <p>
                          <TextHighlightComponent
                              text="Since our target users include experts and laymen users, the design required easily understandable visualizations and in-depth domain knowledge."
                              color="vstyle"
                          />
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="USER GOALS">
                      <p>Based on the understanding of our dataset and users, we established two outlined goals with several specific sub-goals that our design should help users achieve:</p>
                      <p className="bold">Understanding how clothing styles change over time and vary around the world</p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="Identifying trends over time"
                                  color="vstyle"
                              /> - Fashion changes quickly and constantly. Identifying those changes over time may help users understand how and why these changes occur.
                          </li>
                          <li>
                              <TextHighlightComponent
                                  text="Identifying similarities and differences of cities"
                                  color="vstyle"
                              /> - Every culture has specific influences on the population, and this also applies to each city. How people are dressing in a city represents the location and the personality of the area as well.
                          </li>
                      </ul>
                      <p className="bold">Discovering inspirations for dressing up</p>
                      <ul>
                          <li>
                              <TextHighlightComponent
                                  text="dentifying popular styles of clothing combinations"
                                  color="vstyle"
                              /> - Besides the culture exploration of our design, a more practical usage could be assisting users and inspiring how they match clothing styles.
                          </li>
                      </ul>
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="DESIGN" id="design">
                  <p>
                      During the design phase, we encountered many challenges regarding&nbsp;
                      <TextHighlightComponent
                          text="how we can best present our data to users, while also reducing the learning curve"
                          color="vstyle"
                      />
                      . To overcome these challenges, we conducted&nbsp;
                      <TextHighlightComponent
                          text="multiple A/B testing sessions to balance the pros and cons"
                          color="vstyle"
                      />.
                  </p>
                  <SubsectionComponent subtitle="BRAINSTORMING">
                      <p>
                          First, we conducted a brainstorming session and roughly sketched out our ideas.&nbsp;
                          <TextHighlightComponent
                              text="The principle of this session was the ideas must be based on user goals."
                              color="vstyle"
                          />
                      </p>
                      <Row className="pic-space" style={{marginBottom: "1.6rem"}}>
                          <Col md={6}>
                              <img src={vstyleBrainstorming1} className="pic-style" width="100%" alt="brainstorming" />
                          </Col>
                          <Col md={6}>
                              <img src={vstyleBrainstorming2} className="pic-style" width="100%" height="100%" alt="brainstorming sketch" />
                          </Col>
                      </Row>
                      <p>After considering their feasibility and discarding some of them, we narrowed it down to four ideas. We then made a medium-fidelity design for each idea and delivered them to users for feedback.</p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="DESIGN ALTERNATIVES">
                      <div className="stack-group">
                          <Row>
                              <Col md={6}>
                                  <p className="bold">Chord Chart</p>
                                  <p>This concept details clothing combinations in different cities across the world.&nbsp;
                                      <TextHighlightComponent
                                          text="The area between two elements represents the percentage of people wearing these two pieces of clothing simultaneously."
                                          color="vstyle"
                                      />
                                      &nbsp;Users can also check the images of people wearing the two pieces and, perhaps, find inspirations.
                                  </p>
                                  <ProsConsComponent
                                      pros={[
                                          "Cool design",
                                          "Interesting function",
                                          "Useful"
                                      ]}
                                      cons={[
                                          "Lack colors",
                                          "Difficult city navigation"
                                      ]}
                                  />
                              </Col>
                              <Col md={6}>
                                  <img src={vstyleAlternative1} className="pic-style" width="100%" alt="chord chart" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={6}>
                                  <p className="bold">Glyph-based View</p>
                                  <p>
                                      <TextHighlightComponent
                                          text="This concept encoded data on human glyph to represent cities."
                                          color="vstyle"
                                      />
                                      &nbsp;Scrolling the time bar will show the change of the cities while clicking each glyph will show the details of this city. Furthermore, users may also drag elements to the human glyph to filter data, which creates an interesting filter interaction.
                                  </p>
                                  <ProsConsComponent
                                      pros={[
                                          "Visually appealing",
                                          "Interesting to use",
                                          "East to understand"
                                      ]}
                                      cons={[
                                          "Lack in-depth information"
                                      ]}
                                  />
                              </Col>
                              <Col md={6}>
                                  <img src={vstyleAlternative2} className="pic-style" width="100%" alt="glyph-based view" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={6}>
                                  <p className="bold">Spiral View</p>
                                  <p>
                                      <TextHighlightComponent
                                          text="This concept focused on clothing color changes of a city over the course of a year, with each spiral representing a city."
                                          color="vstyle"
                                      />
                                      &nbsp;The spiral rotates around the circle like a clock as the gradient reveals how the major color has altered over the year.
                                  </p>
                                  <ProsConsComponent
                                      pros={[
                                          "Expressive graphics",
                                          "Interesting representation"
                                      ]}
                                      cons={[
                                          "Difficult to understand",
                                          "Visual cluster"
                                      ]}
                                  />
                              </Col>
                              <Col md={6}>
                                  <img src={vstyleAlternative3} className="pic-style" width="100%" alt="spiral view" />
                              </Col>
                          </Row>
                          <Row>
                              <Col md={6}>
                                  <p className="bold">Map-based View</p>
                                  <p>This concept used cartography and charts to show how each attribute fluctuated in a city across the year.</p>
                                  <ProsConsComponent
                                      pros={[
                                          "Easy to understand"
                                      ]}
                                      cons={[
                                          "Too generic"
                                      ]}
                                  />
                              </Col>
                              <Col md={6}>
                                  <img src={vstyleAlternative4} className="pic-style" width="100%" alt="map-based view" />
                              </Col>
                          </Row>
                      </div>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="IDEA SYNTHESIS">
                      <p>
                          After organizing user feedback, we analyzed the pros and cons of each idea.&nbsp;
                          <TextHighlightComponent
                              text="Since each idea tackles different needs, we decided to extract the outstanding part of each idea and combine them, as to create a comprehensive visualization."
                              color="vstyle"
                          />
                          &nbsp;Based on the user goals we established earlier,&nbsp;
                          <TextHighlightComponent
                              text="we selected human glyph, line chart, and chord chart as our core sections."
                              color="vstyle"
                          />
                      </p>
                      <img src={vstyleIdeaSynthesis} className="pic-space pic-style" width="100%" alt="idea synthesis" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="CHALLENGE - INFORMATION STRUCTURE">
                      <p>Our final design concept contains three major sections: human glyph, line chart, and chord chart. However, each part corresponds to a user goal. It was not clear to us how we should decide their priorities.</p>
                      <ProblemBlockComponent
                          title="So..."
                          text="How we can balance the priorities of different sections?"
                      />
                      <p>
                          One core principle of information visualization we learned is&nbsp;
                          <TextHighlightComponent
                              text="Schneiderman's Mantra"
                              color="vstyle"
                          />
                      </p>
                      <p style={{fontStyle: "italic", fontWeight: "700"}}>
                          <TextHighlightComponent
                              text="&rdquo;Overview first, zoom and filter, then details-on-demand.&rdquo;"
                              color="vstyle"
                          />
                      </p>
                      <p>
                          It gave us another perspective to reconsider this problem - by&nbsp;
                          <TextHighlightComponent
                              text="thinking about user perception behavior instead of practical needs"
                              color="vstyle"
                          />
                          . Eventually, we established the following information structure.
                      </p>
                      <img src={vstyleInfoStructure} className="pic-space pic-style" width="100%" alt="information structure" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="CHALLENGE - LAYOUT">
                      <p>
                          The layout of our design elements was a tough challenge.&nbsp;
                          <TextHighlightComponent
                              text="We had two positioning options: side-by-side or top-to-bottom."
                              color="vstyle"
                          />
                          &nbsp;As we were aware of various pros and cons, we were faced with a difficult decision.
                      </p>
                      <Row style={{marginBottom: "1.6rem"}}>
                          <Col md={6}>
                             <img src={vstyleHorizontalLayout} className="pic-space pic-style" width="100%" alt="horizontal layout" />
                          </Col>
                          <Col md={6}>
                              <img src={vstyleVerticalLayout} className="pic-space pic-style" width="100%" alt="vertical layout" />
                          </Col>
                      </Row>
                      <p>
                          Thus, we conducted an&nbsp;
                          <TextHighlightComponent
                              text="A/B testing session"
                              color="vstyle"
                          />
                          &nbsp;with eight participants. The results reveal that&nbsp;
                          <TextHighlightComponent
                              text="participants take longer to finish tasks in the side-by-side view at first, as they are not familiar to this style of layout. However, with a little bit more practice, participants felt more confident in the side-by-side view, and the result became similar or even better than the top-to-bottom view."
                              color="vstyle"
                          />
                          &nbsp;Furthermore, participants' feedback revealed a preference to the side-by-side view. This was due to&nbsp;
                          <TextHighlightComponent
                              text="the constant scrolling of the top-to-bottom layout that proved to be irritating and tedious."
                              color="vstyle"
                          />
                          &nbsp;Thus, we decided to go with the side-by-side layout.
                      </p>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="CHALLENGE - CHORD CHART?">
                      <p>
                          During our A/B testing session, many participants mentioned&nbsp;
                          <TextHighlightComponent
                              text="issues they were having understanding the chord chart, as it created a visual cluster for them."
                              color="vstyle"
                          />
                          &nbsp;This ineffectiveness of the chord chart was not an issue we were expecting.
                      </p>
                      <ProblemBlockComponent
                          title="So..."
                          text="Is there any other replacement for chord chart to represent the percentage of clothing combinations?"
                      />
                      <p>
                          After conducting some research, we found that&nbsp;
                          <TextHighlightComponent
                              text="matrix is a very powerful visualization for the comparison of two items."
                              color="vstyle"
                          />
                          &nbsp;It caters to our use of combinations, while it was clear to understand. Therefore, we changed our chord chart to matrix and collected more feedback from several users. This revealed to be the right decision based on user feedback.
                      </p>
                      <img src={vstyleMatrix} className="pic-space pic-style" width="100%" alt="matrix" />
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="INTERACTION DESIGN">
                      <p>
                          When designing an information visualization, the interactions are as important as the representations,&nbsp;
                          <TextHighlightComponent
                              text="as it should serve the users to achieve their goals."
                              color="vstyle"
                          />
                          &nbsp;To make every interaction meaningful, we build off from the user goals that we identified earlier.
                      </p>
                      <p className="bold">Identifying the trends over time</p>
                      <Row style={{marginTop: "1.6rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleTrend1} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 1</p>
                              <p>By dragging the time bar, users can see the major style of cities of a certain period.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleTrend2} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 2</p>
                              <p>Clicking a city (human glyph), the line chart will show the changes of current attribute over years.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleTrend3} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 3</p>
                              <p>Using the dropdown menu, users can choose specific attribute and see the changes of the selected attribute over time.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleTrend4} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 4</p>
                              <p>Clicking another city will add another line to the line chart to represent this city, allowing comparisons.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem", marginBottom: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleTrend5} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 5</p>
                              <p>Take the attribute "shirt", for example, hovering over a certain point will show the percentage of how many people are wearing shirts in this city during this time period. It will also reveal the cities that have the maximum percentage and the minimum percentage.</p>
                          </Col>
                      </Row>
                      <p className="bold">Identifying the similarities and differences of cities</p>
                      <Row style={{marginTop: "1.6rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleSimilarity1} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 1</p>
                              <p>After clicking a city, the human glyph view will change. The opacity of the glyph correlates to how similar it is to the selected city. The higher the opacity is, the closer it is to the selected city. Clicking the city again will deselect it.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem", marginBottom: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleSimilarity2} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 2</p>
                              <p>Hovering over a city will show the details of this city, such as clothing category, clothing pattern, and major color.</p>
                          </Col>
                      </Row>
                      <p className="bold">Identifying popular styles of clothing combinations</p>
                      <Row style={{marginTop: "1.6rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleCombo1} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 1</p>
                              <p>Similarly to the interactions of the line chart, clicking a city will show the matrix of this city. The color represents the most popular color of this combination, and the opacity represents the percentage people wearing something like this in this area.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleCombo2} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 2</p>
                              <p>Clicking another city to add another matrix. When two cities have a similar clothing combination, it will be highlighted when hovering over it.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleCombo3} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 3</p>
                              <p>Hovering over the square of the matrix will show the detailed explanation of this clothing combination.</p>
                          </Col>
                      </Row>
                      <Row style={{marginTop: "2.4rem"}}>
                          <Col md={6}>
                              <video autoPlay muted loop className="video-feature">
                                  <source src={vstyleCombo4} />
                              </video>
                          </Col>
                          <Col md={6}>
                              <p className="bold">Interaction 4</p>
                              <p>Clicking a square of the matrix will reveal the example pictures.</p>
                          </Col>
                      </Row>
                  </SubsectionComponent>
                  <SubsectionComponent subtitle="FINAL PROTOTYPE">
                      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                          <iframe
                              width="960"
                              height="540"
                              src="https://www.youtube.com/embed/zovGOdgGuKM"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{transform: "scale(0.8)", boxShadow: "0 5px 20px 0 #d8d8d8"}}
                          />
                          <div style={{width: "24rem"}}>
                              <a href="https://vstyle-infoviz.github.io" target="_blank">
                                  <button className="project-img-btn">Try V.style</button>
                              </a>
                          </div>
                      </div>
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="EVALUATION" id="evaluation">
                  <p>
                      Before delivering our final prototype to users for feedback we established several metrics to help us evaluate. We then invited several students who are interested in fashion to try out V.style. The results show that&nbsp;
                      <TextHighlightComponent
                          text="our design is very interesting and visually appealing. However, the learnability can still be improved."
                          color="vstyle"
                      />
                  </p>
                  <SubsectionComponent subtitle="EVALUATION METRICS">
                      <p>Since information visualization system is different from traditional apps, our evaluation focus has been changed to the following aspects. They are:</p>
                      <p className="bold">Learnability - 4.2 / 5.0</p>
                      <p>
                          <TextHighlightComponent
                              text="Our visualization is relatively new for most users. Thus, learnability has always been our big concern."
                              color="vstyle"
                          />
                          &nbsp;We would like to know if users can get familiar with our tool very quickly. The results revealed that the learnability still need to be improved. Although we provided an instruction image in the very beginning, users still feel overwhelmed.&nbsp;
                          <TextHighlightComponent
                              text="We might implement a step-by-step storytelling instruction to tackle it."
                              color="vstyle"
                          />
                      </p>
                      <p className="bold">Efficiency - 4.6 / 5.0</p>
                      <p>
                          This project is&nbsp;
                          <TextHighlightComponent
                              text="goal-driven"
                              color="vstyle"
                          />
                          . Therefore, accomplishing tasks efficiently is an important metric to evaluate our design. The results revealed that&nbsp;
                          <TextHighlightComponent
                              text="users can quickly finish tasks after getting familiar with how it works."
                          />
                      </p>
                      <p className="bold">Insightfulness - 4.6 / 5.0</p>
                      <p>
                          The ultimate purpose of information visualization is to&nbsp;
                          <TextHighlightComponent
                              text="discover insights"
                              color="vstyle"
                          />
                          . We hope users can discover some interesting findings. Here are some insights that our users found:
                      </p>
                      <ul>
                          <li>Everybody loves black and white shirts or T-shirts, no matter where they come from. One world, one "style".</li>
                          <li>The famous fashionable cities like New York and Milan, they share the same styles.</li>
                          <li>Proximity has influences on fashion styles. More closer, more similar.</li>
                      </ul>
                      <p className="bold">Satisfaction - 4.9 / 5.0</p>
                      <p>
                          One of our primary goals for this project is to provide joy. We hope it's also a fun tool to use since fashion is also an interesting topic. And it turned out&nbsp;
                          <TextHighlightComponent
                              text="EVERYBODY LOVES IT!"
                              color="vstyle"
                          />
                          &nbsp;They love these cute little human glyphs with different clothing. They are curious about fashion style in other cities. The positive feedback makes us feel happy.
                      </p>
                  </SubsectionComponent>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="REFLECTION" id="reflection">
                  <div>
                      <p>This project is one of my favorite projects. I’m so proud of what we have accomplished. Information visualization was a new territory for us. An innovate way to present data means more efforts for users to learn. However, an appropriate visualization can help users discover in-depth findings, which is something that simple bar charts cannot achieve. To design an appropriate visualization, we have to be user-driven, focusing on their goals.</p>
                      <p>During the design phase, we have encountered so many tough challenges that we have to make a choice. Some of them are choices between achievable functions and visual effects, and some are choices among different ways to present data. There’s always a trade-off. What we can do is to balance these trade-offs and think about one question: are you just trying to make it visually amazing? or really trying to design for your users?</p>
                  </div>
              </ProjectSectionComponent>
              <DividerComponent />
              <ProjectSectionComponent title="FUN !" id="fun">
                  <VstyleFunComponent />
              </ProjectSectionComponent>
              <FooterComponent />
          </div>
      </div>
  );
}

export default Vstyle;
