import React from "react";
import MapNav from "./map/MapNav";
import Form from "../components/contact/Form"
import History from './timeline/History';
import HistoryNoCollapse from "./timeline/HistoryNoCollapse";
import styled from "styled-components";

const StyleContent = styled.div` 
display: flex;
justify-content: center;

height: 75vh;
@media (max-width: 648px) {
font-size: 1em;
}
`;

const StyledHeaderText= styled.div` 
  align-self: center;
  font-size: 3em;
  text-transform: uppercase;
  color: #353535;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  word-spacing: 2px;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: 648px) {
    font-size: 1.5em;
    align-self: center;
  }
`;

const NotFound = () => {
  

  return (
    <StyleContent>
      <StyledHeaderText>Sidan kunde inte hittas...</StyledHeaderText>.
    </StyleContent>
  );
};

export default NotFound;