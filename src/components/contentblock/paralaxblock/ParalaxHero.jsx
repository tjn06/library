import React, {useState, useEffect} from "react";
import { Parallax } from "react-parallax";
// import { Background } from "react-parallax";
import styled from "styled-components";
import StandardButton from '../../buttons/StandardButton'
import { useGlobalState } from '../../state';

const StyledParalaxStyle = styled.div`
  font-family: sans-serif;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
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
  justify-content: flex-start;
  /* margin-top: 50px; */
  flex-basis: 1024px;
  /* background-color: grey; */
`;

const StyledParalaxContent = styled.div`
  /* background: #ecebea; */
  /* margin-left: 6vw; */
  border-radius: 2px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    margin-left: 0vw;
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
  color: #353535;
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



// const image1 = "https://picsum.photos/800/600";
const image1 = "https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1071&q=80";
const image2 = "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";


const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgParalaxHero');
  const [backg, setBackg] = useState(false);

  useEffect(() => {
    if(backgAlt) {
      setBackg(image1)
    } else {
      setBackg(image2)
    }
  }, [backgAlt])
  
  
  return (
  <StyledParalaxStyle>
    {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
    }
    <Parallax bgImage={backg} strength={scrollEffect} bgImageStyle={{opacity: '.8', WebkitMask: 'linear-gradient(90deg, transparent 33%, #380A46 100%) 0% 0% no-repeat padding-box',
          mask: 'linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box' }}>
      <StyledParalaxHeight height={height}>
        <StyledMaxWidthContent>
          <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>
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
          </StyledParalaxContent>
          
        </StyledMaxWidthContent>
      </StyledParalaxHeight>
    </Parallax>

  </StyledParalaxStyle>
);
}
export default ParalaxHero;