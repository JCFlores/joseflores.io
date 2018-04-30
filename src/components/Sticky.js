import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";

const Sticky = styled.div`
  font-size: 24px; 
  font-weight: bold;
  font-family: Comic Sans MS;
  line-height: 1.2em;    
  position: absolute;
  background: #fdf3ac;
  padding: 0 0 3% 0;
  width: 16em;
  height: 14em;
  box-shadow: 4px 5px 18px 0px;
`;

const StickyBorder = styled.div`
  background: #f7d951d1;
  width: 100%;
  padding: 3% 0;
`;

const StickyContent = styled.p`
  padding: 1.2em;
  font-weight: normal;
  font-size: 18px;
  font-family: Comic Sans MS;
`;

const StickyNote = (props) => (
  <Sticky style={props.style}>
    <StickyBorder />
    {props.title}
    <StickyContent>{props.content}</StickyContent>
  </Sticky>
);

export default StickyNote;
