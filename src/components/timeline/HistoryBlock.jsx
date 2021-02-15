import React, {useState} from 'react'
import styled from "styled-components";
import {Collapse} from 'react-collapse';
import { useGlobalState } from '../state';

const StyledWrapper = styled.div`
  /* background-color: white; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5px 10px 10px 10px;
  @media (max-width: 686px){
    max-width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  &:after{
    background-color: #91bb98;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;

    @media (max-width: 686px){
      left: 10px;
      
    }
  }
`

const StyledCircle = styled.span`
  background-color:  white;
  border: 3px solid  #91bb98;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  z-index: 1;
  
  @media (max-width: 686px){
      left: -68px;;
    }

`

const StyledContent = styled.div`
  /* background-color: white; */
  min-width: 150px;
  max-width: 200px;
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  text-align: right;
  position: relative;
 
  @media (max-width: 686px){
      left: 85px;
      text-align: center;
      align-items: center;
    }

  &:after{
    content:'';
    background-color: white;
    position: absolute;
    width: 15px;
    height: 15px;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    box-shadow: 3px -3px 1px rgba(0, 0, 0, 0.3);

    @media (max-width: 686px){
      right: auto;
      left: -7.5px;
      box-shadow: -3px 3px 1px rgba(0, 0, 0, 0.3);
    }


  }
`

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-left: 0px;
  margin: 10px 0;
  width: 50%;

  @media (max-width: 686px){
      justify-content: center;

    }



  &:nth-child(odd){
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0px;

  
    ${StyledContent}{
    align-items: flex-start;
    text-align: left;
    @media (max-width: 686px){
      text-align: center;
      left: -110px;
      width: 200px;
      padding: 15px;
      align-items: center;

    }
  }
  ${StyledContent}:after{
    right: auto;
    left: -7.5px;
    box-shadow: -3px 3px 1px rgba(0, 0, 0, 0.3);
  }
  ${StyledCircle}{
    right: auto;
    left: -40px;

    @media (max-width: 686px){
      left: -68px;
    }
}
  }
`
const StyledTime = styled.p`
  font-weight: 900;
  font-size: 20px;
  font-size: xx-large;
  color:  #91bb98;
`
const StyledCategory = styled.p`
  font-weight: 500;
  font-size: 18px;
`

const StyledText = styled.p`
  font-weight: 300;
  font-size: 10px;
  margin-top: 10px;
`

const StyledHistory = styled.div`
  text-align: center;
  font-family: 'Rokkitt', serif;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};
`
const Text = styled.h1`
  color: #91bb98;
`

const StyledButton = styled.button`
  position: absolute;
  left: 0;
  background-color: #176fb8;
  color: white;
  margin: 3px 3px 1px 3px;
  /* padding: 1px; */
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 0px transparent;
    border: 1px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    background-color: #03A9F4;
  }
  :active {
    outline: 0;
    /* border: 1px solid black; */
  }
  :focus {
    outline: 0;
}
`;

const data = [
  {
    category:"Början",
    time:"2010",
    text:"Vi öpnnade vår första butik"
  },

  {
    category:"Ny butik",
    time:"2012",
    text:"Vi öpnnade dörrrarna till vår fräscha butik i NOrdstan"
  },

  {
    category:"Bästa Butiken i Göteborg",
    time:"2013",
    text:"Vi vann pris för bästa butik i staden"
  },

  {
    category:"Utvecklingen",
    time:"2015",
    text:"Inte bara pizzor utan även sallader"
  },

  {
    category:"Nytt",
    time:"2016",
    text:"Renoverade hela stället"
  },

  {
    category:"En era startar",
    time:"2018",
    text:"Tobias tog över och en ny era tar vid"
  },

  {
    category:"Corona",
    time:"2020",
    text:"Corona kom och livet blev tufft för alla"
  }
];



 const HistoryBlock = ({backgOne, backgTwo}, props) => {
  const [showHide, setShowHide] = useState(false);
  const toggle = () => setShowHide(!showHide);

  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgHistoryBlock');
  
  return (
    <div>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <StyledHistory onClick={toggle} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
        <Text>Vår historia</Text>
        <Collapse isOpened={showHide}>

        <StyledWrapper>
        {data.map((data) =>
          <StyledItem>

            <StyledContent>

              <StyledTime>{data.time}</StyledTime>

              <StyledCategory>{data.category}</StyledCategory>

              <StyledText>{data.text}</StyledText>

              <StyledCircle></StyledCircle>

            </StyledContent>
            
          </StyledItem>
        )}
        </StyledWrapper>

        </Collapse>
      </StyledHistory>
    </div>
  );
};

export default HistoryBlock