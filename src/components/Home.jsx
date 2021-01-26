import React, { useState } from "react";
// import {Link} from 'react-router-dom'
// import styled from "styled-components";

import ParalaxHero from './contentblock/paralaxblock/ParalaxHero';
import ParalaxBlockTwoTextBlock from './contentblock/paralaxblock/ParalaxBlockTwoTextBlock';
import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
import HeroBlock from './contentblock/imageblock/HeroBlock';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import StandardButton from './buttons/StandardButton'

// import HeaderTwoRows from './HeaderTwoRows';

const Div = styled.div`
  color: white;
  `;


const mediaQ = "686px"; // To all mediaquerys in styled components in this component
const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required


const Home = () => (
  <Div>
    <ParalaxHero height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <StandardButton border={"2px solid white"} color={"red"} width={'10rem'} height={'2rem'} />
    <StandardButton color="black" radius="0px"/>
    <StandardButton  width="20rem"/>
    <StandardButton  fontsize="10px" fontweight="300"/>
  </Div>
);

export default Home;
