import React from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const StyledParalaxStyle = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const StyledParalaxHeight = styled.div`
  height: ${props => props.height};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #921515; */
`;

const StyledMaxWidthContent = styled.div`
  display: flex;
  margin-top: 50px;
  flex-basis: 1024px;
  /* background-color: grey; */
`;

const StyledParalaxContent = styled.div`
  background: rgba(243, 243, 243, 0.671);
  margin-left: 2vw;
  border-radius: 2px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    margin-left: 0vw;
  }
`;

const StyledTextContent = styled.div`
  display: flex;
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
  color: green;
  font-family: 'Franklin Gothic', sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;



// const image1 = "https://picsum.photos/800/600";
const image1 = "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";



const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => (
  <StyledParalaxStyle>
    <Parallax bgImage={image1} strength={scrollEffect}>
      <StyledParalaxHeight height={height}>
        <StyledMaxWidthContent>
          <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledTextContent>
            <StyledTextPaddingBox>
              <StyledHeadingText>15 års erfarenhet</StyledHeadingText>
              <p>15 års erfarenhet som snickare 🛠<br></br>
              För privatkunder, företag el. samarbeten med andra bolag inom branschen</p>
            </StyledTextPaddingBox>
          </StyledTextContent>
          </StyledParalaxContent>
        </StyledMaxWidthContent>
      </StyledParalaxHeight>
    </Parallax>
  </StyledParalaxStyle>
);

export default ParalaxHero;