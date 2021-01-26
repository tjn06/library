import React, { useState } from "react";
// import {Link} from 'react-router-dom'
// import styled from "styled-components";

import ParalaxHero from './contentblock/paralaxblock/ParalaxHero';
import ParalaxBlockTwoTextBlock from './contentblock/paralaxblock/ParalaxBlockTwoTextBlock';
import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
import HeroBlock from './contentblock/imageblock/HeroBlock';

const mediaQ = "686px"; // To all mediaquerys in styled components in this component
const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required


const Home = () => (
  <div >
    <ParalaxHero height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
  </div>
);

export default Home;
