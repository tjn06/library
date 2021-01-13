import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Tobbe = styled.div`
  border: 1px solid black;
`
function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="logo"></div>
        <div className="titles">
          <Tobbe className="title-1">
            <h2>DECIDE</h2><h3>THEIR DESTINY...</h3>
          </Tobbe>
          <div className="title-2">
            <h2>VOTE</h2><h3>FOR THE ONE THAT LOOKS STRONGEST!!</h3>
          </div>
          <div className="title-3">
            <h2>MAKE</h2><h3>YOUR OWN HAMSTER CHAMPION!</h3>
          </div>
        </div>
      </div>
      <Link to="/battlemode" className="back-to-battlemode" ><button className="back-to-battlemode">&lt; GO TO BATTLEMODE &gt;</button></Link>
    </div>
  );
}

export default Home;