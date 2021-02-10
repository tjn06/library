import React from "react";
import MapNav from "./map/MapNav";
import Form from "../components/contact/Form"
import History from './timeline/History';
import HistoryNoCollapse from "./timeline/HistoryNoCollapse";
import styled from "styled-components";

const StyledBlock = styled.div`
  font-family: 'Rokkitt', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ececec;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 20px;
  
  @media (max-width: 686px){
    padding: 5px;
  }
`
const StyledArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  

` 

const NotFound = () => {
  

  return (
    <div>
      <StyledBlock>
      <StyledArea>
      <h1>Här hittar du oss!</h1>
      </StyledArea>
      
      <StyledArea>
      <MapNav width={'400px'} height={'400px'} radius={'10px'}
      border={"1px solid #888888"} shadow={"-3px 3px 10px -2px rgba(0, 0, 0, 0.253)"}/>
      </StyledArea>
      <StyledArea>
      <h1>Använd formuläret nedan för att kontakta oss</h1>
      </StyledArea>
      <StyledArea>
      <Form />
      </StyledArea>
      <StyledArea>
      <HistoryNoCollapse />
      </StyledArea>
      <StyledArea>
      <History />
      </StyledArea>
      </StyledBlock>
    </div>
  );
};

export default NotFound;