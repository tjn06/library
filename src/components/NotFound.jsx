import React from "react";
import MapNav from "./map/MapNav";
import Form from "../components/contact/Form"
import History from './timeline/History';
import HistoryNoCollapse from "./timeline/HistoryNoCollapse";
import styled from "styled-components";

const StyledBlock = styled.div`
  font-family: 'Rokkitt', serif;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  padding: 50px;

  @media (max-width: 686px){
    padding: 5px;
  }
`

const NotFound = () => {
  

  return (
    <div>
      <StyledBlock>
      <MapNav width={'400px'} height={'400px'} radius={'10px'}
      border={"1px solid #888888"} shadow={"-3px 3px 10px -2px rgba(0, 0, 0, 0.253)"}/>
      </StyledBlock>
      <Form />
      
      <HistoryNoCollapse />
      
      <History />
    </div>
  );
};

export default NotFound;