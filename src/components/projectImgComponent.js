import {Container, Row, Col} from "react-bootstrap";

export default function ProjectImgComponent(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{position: "relative"}}>
                        <img src={props.imgSrc} width="100%" alt="vstyle picture" />
                        <div className="project-img-btn-wrapper" style={{display: props.showBtn?"block":"none"}}>
                            <a href={props.projectLink} target="_blank">
                                <button className="project-img-btn">{props.btnText}</button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}