import React, {useState, useEffect} from "react";
import { Parallax } from "react-parallax";
// import { Background } from "react-parallax";
import styled from "styled-components";
import { useGlobalState } from '../../state';

const StyledParalaxStyle = styled.div`
  /* font-family: sans-serif;
  text-align: center; */
`;

const StyledParalaxHeight = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

const StyledParalaxContent = styled.div`
  display: flex;
  flex-basis: 1024px;
  /* background: rgb(0,0,0,0.5); */
  padding: 20px;
  justify-content: center;
  align-items: center;


  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    /* left: 50%; */
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

const image1 = "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1190&q=80";
const image2 = "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80";

const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgParalaxBlockOneTextBlock');
  const [backg, setBackg] = useState(false);

  useEffect(() => {
    if(backgAlt) {
      setBackg(image1)
    } else {
      setBackg(image2)
    }
  }, [backgAlt])

  return(
    <StyledParalaxStyle>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <Parallax bgImage={backg} strength={scrollEffect} bgImageStyle={{opacity: '.6',   WebkitMask: 'linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box',
            mask: 'linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box' }}>
        <StyledParalaxHeight height={height}>
          <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>Text...text..text</StyledParalaxContent>
          
        </StyledParalaxHeight>
      </Parallax>
    </StyledParalaxStyle>
  );
};

export default ParalaxHero;
