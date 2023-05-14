import "../css/index.css";
import "../css/App.css";
import FooterComponent from "../components/footerComponent";
import ProjectSidebarComponent from "../components/projectSidebarComponent";

function DrChrono() {
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

                <FooterComponent />
            </div>
        </div>
    );
}

export default DrChrono;
