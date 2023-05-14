import "../css/index.css";
import "../css/App.css";
import {Container} from "react-bootstrap";


export default function DividerComponent() {
    return (
        <Container className="divider-container">
            <div className="section-divider"></div>
        </Container>
    );
}