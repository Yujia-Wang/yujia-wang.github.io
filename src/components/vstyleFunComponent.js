import {Col, Row} from "react-bootstrap";
import "../css/vstyle.css";
import React, {useRef} from "react";
import VstyleFunFilterGroupComponent from "./vstyleFunFilterGroupComponent";
import maleIcon from "../image/vstyle/male.svg";
import femaleIcon from "../image/vstyle/female.svg";

export default function VstyleFunComponent(props) {
    const genderSelectionRef = useRef(null);
    console.log(genderSelectionRef);

    return (
        <Row>
            <Col md={5} style={{paddingRight: "4.8rem"}}>
                <VstyleFunFilterGroupComponent
                    ref={genderSelectionRef}
                    filterName="Gender"
                    align="right"
                    activeFilter={0}
                    filters={[
                        {type: "icon", src: maleIcon, color: "#fff"},
                        {type: "icon", src: femaleIcon, color: "#fff"},
                    ]}
                />
              <VstyleFunFilterGroupComponent
                  filterName="Skin Color"
                  align="right"
                  activeFilter={0}
                  filters={[
                      {type: "fill", src: "none", color: "#ddbe9a"},
                      {type: "fill", src: "none", color: "#d3ab84"},
                      {type: "fill", src: "none", color: "#926b45"},
                  ]}
              />
              {/*<VstyleFunFilterGroupComponent*/}
              {/*    filterName="Clothing Category"*/}
              {/*    align="right"*/}
              {/*>*/}
              {/*    <VstyleFunFilterComponent type="icon" src={tankTopIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={tShirtIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={shirtIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={sweaterIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={suitIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={outwearIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={dressIcon} color="#fff" />*/}
              {/*</VstyleFunFilterGroupComponent>*/}
              {/*<VstyleFunFilterGroupComponent*/}
              {/*    filterName="Clothing Pattern"*/}
              {/*    align="right"*/}
              {/*>*/}
              {/*    <VstyleFunFilterComponent type="icon" src={solidIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={graphicIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={floralIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={plaidIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={spottedIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={stripedIcon} color="#fff" />*/}
              {/*</VstyleFunFilterGroupComponent>*/}
          </Col>
          <Col md={2}>
              <div id="glyph"></div>
          </Col>
          <Col md={5} style={{paddingLeft: "4.8rem"}}>
              {/*<VstyleFunFilterGroupComponent*/}
              {/*    filterName="Neckline Shape"*/}
              {/*    align="left"*/}
              {/*>*/}
              {/*    <VstyleFunFilterComponent type="icon" src={foldedIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={roundIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={vshapeIcon} color="#fff" />*/}
              {/*</VstyleFunFilterGroupComponent>*/}
              {/*<VstyleFunFilterGroupComponent*/}
              {/*    filterName="Accessory"*/}
              {/*    align="left"*/}
              {/*>*/}
              {/*    <VstyleFunFilterComponent type="icon" src={hatIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={glassesIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={scarfIcon} color="#fff" />*/}
              {/*    <VstyleFunFilterComponent type="icon" src={tieIcon} color="#fff" />*/}
              {/*</VstyleFunFilterGroupComponent>*/}
              {/*<VstyleFunFilterGroupComponent*/}
              {/*    filterName="Clothing Color"*/}
              {/*    align="left"*/}
              {/*>*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#301015" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#fce5f6" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#ed71ab" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#2db2eb" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#d42e00" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#00a384" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#81ba00" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#58595b" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#fcdd00" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#9b6a39" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#8f74b4" />*/}
              {/*    <VstyleFunFilterComponent type="fill" src="none" color="#f56e14" />*/}
              {/*    <VstyleFunFilterComponent type="colorful" src="none" color="linear-gradient(#fce5f6, #fcdd00, #f56e14, #ed71ab, #d42e00, #81ba00, #00a384, #8f74b4, #2db2eb, #9b6a39, #58595b)" />*/}
              {/*</VstyleFunFilterGroupComponent>*/}
          </Col>
      </Row>
    )
}