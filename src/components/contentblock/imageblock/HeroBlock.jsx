import React from "react";
import styled from "styled-components";
import StandardButton from '../../buttons/StandardButton'
import { useGlobalState } from '../../state';

const image1 = "https://images.unsplash.com/photo-1560780552-ba54683cb263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const image2 = "https://images.unsplash.com/photo-1578596371629-0fe8c3c12f80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";


const StyledHeroBlock = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* background: #b81313; */
  background-image: url(${props => props.backgAlt ? props.image1 : props.image2});
  /* background-image: url(${image1}); */
  background-repeat: no-repeat;
  background-size: cover;
  /* justify-content: center; */
  align-items: center;
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* height: ${props => props.height}; */
  /* background: #b81313; */
  /* background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  /* padding-top: 200px; */
  padding-left: 20%; 
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledTextContent = styled.div`
  display: flex;
  color: #353535;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  width: 100%;
  text-align: left;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledTextPaddingBox = styled.div`
  padding: 1em;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledHeadingText = styled.div`
  font-size: 3em;
  text-transform: uppercase;
  color: #353535;;
  padding-left: 3px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  word-spacing: 2px;
  border-left: 5px solid #A84061;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    font-size: 2.5em;
  }
`;
const Text = styled.p`
  margin-left: 8px;
`

const StyledBtnContainer = styled.div`
  display: flex;
  padding-left: 10px;
  flex-wrap: wrap;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    /* font-size: 2.5em;
    flex-direction: column; */
  }
`;

const StyledButton = styled.button`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 130px;
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



const HeroBlock = ({height, mediaQueryBreakPoint}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgHeroBlock');
  // const [backg, setBackg] = useState(false);


  return (
  <StyledHeroBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} image1={image1} image2={image2}>
    {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
    }
    <StyledContent>
    <StyledTextContent>
            <StyledTextPaddingBox>
              <StyledHeadingText mediaQueryBreakPoint={mediaQueryBreakPoint}>Rubriktext Lorem ipsum</StyledHeadingText>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Text><br/>
              <StyledBtnContainer mediaQueryBreakPoint={mediaQueryBreakPoint}>
              <StandardButton fontsize="12px" fontweight="300" textcolor="white"
              width="15rem" height="3rem" margin="12px"
              radius="1px;" color="var(--color-pink)" />
              <StandardButton  fontsize="12px" fontweight="300" textcolor="white"
              width="15rem" height="3rem" margin="12px"
              radius="1px;" color="var(--color-green)" />
              </StyledBtnContainer>
            </StyledTextPaddingBox>
          </StyledTextContent>
    </StyledContent>
        
  </StyledHeroBlock>
  );
};

export default HeroBlock;