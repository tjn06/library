import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import StandardButton from './Buttons/StandardButton'

// import HeaderTwoRows from './HeaderTwoRows';

const Div = styled.div`
  color: white;

  
  `;



function Home () {



  return(

<Div>

{/* <HeaderTwoRows /> */}

<StandardButton border={"2px solid white"} color={"red"} width={'10rem'} height={'2rem'} />
<StandardButton color="black" radius="0px"/>
<StandardButton  width="20rem"/>
<StandardButton  fontsize="10px" fontweight="300"/>

</Div>
  )
};

export default Home;