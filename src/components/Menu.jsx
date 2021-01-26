import React, { useState, useEffect } from "react";
import standard from '../assets/standard.svg';
import family from '../assets/family.svg';
import { Routes, Route } from "react-router-dom";

import MenuPizza from './menucomponents/MenuPizza';
import MenuKebab from './menucomponents/MenuKebab';
import MenuSallad from './menucomponents/MenuSallad';
import MenuDryck from './menucomponents/MenuDryck';
import MenuOvrigt from './menucomponents/MenuOvrigt';

import styled from "styled-components";

const StyledWrapperCentering = styled.div` 
  display: flex;
  justify-content: center;
`;

const StyledContentWidth = styled.div` 
  display: flex;
  flex-direction: column;
  width: 900px; 
  /* flex-basis: 1080px; */
  /* margin: 0 auto; */
  justify-content: center;
`;

const StyledCenter = styled.div` 
display: flex;
justify-content: space-evenly;
padding-bottom: 10px;
`;

const StyledNavMenuItem= styled.p` 
cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
&.selected {
  color: green;
}
&:hover {
  color: green;
  transition: all 0.1s ease;
}
`;

const StyledGridMenu = styled.div`
  /* border: 1px solid rgb(24, 179, 44); */
  height: auto;
  display: grid;
  gap: 5px;
  row-gap: 0;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
    /* user-select: none; */
  @media only screen and (max-width: 804px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRowColWrapper = styled.div`
    /* width: 100%;
    border: 2px solid rgb(0, 0, 0); */
`;

const StyledHeaderCardFirstRow = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0);
  padding: 3px;
`;

const StyledHeaderCardSecondRow = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0);
  padding: 3px;

  @media only screen and (max-width: 804px) {
    display: none;
  }
`;

const StyledCard = styled.div` 
  /* border: 4px solid rgb(22, 189, 58); */
  height: auto;
  padding: 3px;
  border-bottom: 1px dashed rgb(0, 0, 0);
`;

const StyledShowVertical = styled.div` 
  display: flex;
  /* max-width: 100vw; */
`;

const StyledFirstRowWidth = styled.div`
  width: 70%;
  text-align: left;
`;

const StyledSecondRowPriceOrImage = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
`;

//Searchbar

const StyledSearchWidthPosition = styled.div`
  margin: auto;
  /* padding: 20px; */
  width: 300px;

  @media only screen and (max-width: 300px) {
    padding: 0px 5px;
    width: 100%;
  }
`;


const StyledSearchPosFieldAndBtn = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 36px;
`;

const StyledSearchField = styled.input`
  width: 100%;
  border: 2px solid #c4c4c4;
  /* border-right: none; */
  padding: 5px;
  height: 20px;
  /* border-radius: 5px 0 0 5px; */
  border-radius: 5px;
  outline: none;
  color: #c4c4c4;
  height: 36px;

  &:focus {
    color: green;
    border: 2px solid green;
  }
`;

// const StyledSearchBtn = styled.button`
//   width: 40px;
//   height: 36px;
//   border: 1px solid #c4c4c4;
//   background:#c4c4c4;
//   text-align: center;
//   color: #fff;
//   border-radius: 0 5px 5px 0;
//   cursor: pointer;
//   font-size: 20px;

//   &:focus {
//     background:green;
//   }
// `;


const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFlexCenterPos = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLetterSpacing = styled.div`
  letter-spacing: 3px;
  font-size: 0.6em;
  color:  #8f8f8f;
  /* font-weight: bold; */
  line-height: 1.2em;
`;

const StyledTextSidesFilter = styled.div`
  width: 3em;
  padding: 0px 0px 0px 1px;
  color: grey;
  font-size: 0.6em;
  line-height: 2.8em;
  `;

const Input = styled.input`
  /* margin-top:10px; */
  position:relative;
  width:90px;
  height:30px;
  -webkit-appearance: none;
  /* background: linear-gradient(0deg, #333, #000); */
  background: #c9c8c8;
  outline: none;
  border-radius: 10px;
  cursor: pointer;


  &:checked {
    /* background: linear-gradient(0deg, #dbdbdb, #dbdbdb); */
    background:  #c9c8c8;

  }

  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:50px;
    height:30px;
    /* background: linear-gradient(0deg, #000, #fafafa); */
    background: green;
    border-radius: 10px;
    transform: scale(.98,.96);
    transition:.5s;
  }

  &:checked:before {
    left:40px;
    background: #005500;
  }

  &:checked:after {
    left:110px;
  }
`;




const pizzas = [
  {
    "id": 1,
    "category": "Pizza",
    "name": "Vesuvius",
    "topping": [
      "Tomat",
      "Ost",
      "Skinka"
    ],
    "price": 79,
    "price_family": 120,
    "rank": 3
  },
  {
    "id": 2,
    "category": "Pizza",
    "name": "Hawaii",
    "topping": [
      "Basilika",
      "Ost",
      "Skinka",
      "Ananas"
    ],
    "price": 79,
    "price_family": 120,
    "rank": 1
  },
  {
    "id": 3,
    "category": "Pizza",
    "name": "Kebab",
    "topping": [
      "Tomat",
      "MögelOst",
      "Oxfile",
      "Ananas"
    ],
    "price": 79,
    "price_family": 120,
    "rank": 1
  },
  {
    "id": 4,
    "category": "Pizza",
    "name": "Grodan",
    "topping": [
      "Tomat",
      "Ost",
      "Kyckling",
      "Ananas"
    ],
    "price": 79,
    "price_family": 120,
    "rank": 1
  },
  {
    "id": 5,
    "category": "Viking",
    "name": "Special",
    "topping": [
      "Tomat",
      "Basilika",
      "Skinka",
      "Ananas",
      "Ost",
      "Skinka",
      "Ananas",
      "Gräs"
    ],
    "price": 89,
    "price_family": 120,
    "rank": 1
  }
]



const Menu = () => {
  // const [firstListPizzas, setFirstListPizzas] = useState();
  // const [secondListPizzas, setSecondListPizzas] = useState();
  // const [search, setSearch] = useState("");
  // const [filteredPizzas, setFilteredPizzas] = useState([]);
  // const [toppingOrName, setToppingOrName] = useState(false);
  // const [textToppingOrName, setTextToppingOrName] = useState("What are you looking for?");

  // useEffect(() => {
  // if(toppingOrName) {
  //   setFilteredPizzas(
  //     pizzas.filter((pizza) =>
  //     pizza.topping.some(topping => topping.toLowerCase().includes(search.toLowerCase())
  //     ))
  //   );
  // } else {
  //   setFilteredPizzas(
  //     pizzas.filter((pizza) =>
  //     pizza.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }

  // }, [search, toppingOrName]);


  // useEffect(() => {
  //   toppingOrName ? setTextToppingOrName('Sök efter ingrediens') : setTextToppingOrName('Sök efter pizza')
  // }, [toppingOrName]);

  // useEffect(() => {
  // let number = (filteredPizzas.length);
  //   setFirstListPizzas((number % 2) ? number/2 + .5 : number/2)
  //   setSecondListPizzas(firstListPizzas + ((number % 2) ? number/2 - .5 : number/2))
  // }, [firstListPizzas, secondListPizzas, filteredPizzas]);

  
  // const outputPizzasFirstColumn = filteredPizzas.slice(0,firstListPizzas).map((pizza) => (
  //   <StyledCard key={pizza.id}>
  //     <StyledShowVertical>
  //       <StyledFirstRowWidth>{pizza.id}. {pizza.name}</StyledFirstRowWidth>
  //       <StyledSecondRowPriceOrImage>
  //         <div className="standard-price">{pizza.price}</div>
  //         <div className="family-price">{pizza.price_family}</div>
  //       </StyledSecondRowPriceOrImage>
  //     </StyledShowVertical>

  //     <StyledFirstRowWidth>
  //       {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
  //     </StyledFirstRowWidth>
  //   </StyledCard>
  // ));

  // const outputPizzasSecondColumn = filteredPizzas.slice(firstListPizzas,secondListPizzas).map((pizza) => (
  //   <StyledCard key={pizza.id}>
  //     <StyledShowVertical>
  //       <StyledFirstRowWidth>{pizza.id}. {pizza.name}</StyledFirstRowWidth>
  //       <StyledSecondRowPriceOrImage>
  //         <div className="standard-price">{pizza.price}</div>
  //         <div className="family-price">{pizza.price_family}</div>
  //       </StyledSecondRowPriceOrImage>
  //     </StyledShowVertical>

  //     <StyledFirstRowWidth>
  //       {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
  //     </StyledFirstRowWidth>
  //   </StyledCard>
  // ));
  const PIZZA = 'pizza', KEBAB = 'kebab', SALLAD = 'sallad', DRYCK = 'dryck', OVRIGT = 'ovrigt';

  const [currentScreen, setCurrentScreen] = useState(PIZZA);
  const [activeClass, setActiveClass] = useState(PIZZA);
  
  const pizzaScreen = () => { 
    setCurrentScreen(PIZZA)
    setActiveClass(PIZZA)
  }
  const kebabScreen = () => { 
    setCurrentScreen(KEBAB)
    setActiveClass(KEBAB)
  }
  const salladScreen = () => { 
    setCurrentScreen(SALLAD)
    setActiveClass(SALLAD)
  }
  const dryckScreen = () => { 
    setCurrentScreen(DRYCK)
    setActiveClass(DRYCK)
  }
  const ovrigtScreen = () => {
    setCurrentScreen(OVRIGT)
    setActiveClass(OVRIGT)
  }

  let content = null;
  switch (currentScreen) {
      case PIZZA:
          content = ( <MenuPizza /> )
          break;
      case KEBAB:
          content = ( <MenuKebab /> )
          break;
      case SALLAD:
           content = ( <MenuSallad /> )
          break;
      case DRYCK:
        content = ( <MenuDryck /> )
          break;
      case OVRIGT:
         content = ( <MenuOvrigt /> )
            break;
      default:
          content = ( <MenuPizza /> )
}
  


  return (
  <StyledWrapperCentering>
    <StyledContentWidth>

      <StyledCenter> 
      <StyledNavMenuItem onClick={pizzaScreen} className={activeClass === PIZZA  ? 'selected' : ''}> PIZZA </StyledNavMenuItem>
      <StyledNavMenuItem > | </StyledNavMenuItem>
      <StyledNavMenuItem onClick={kebabScreen} className={activeClass === KEBAB  ? 'selected' : ''}> KEBAB/FALAFEL </StyledNavMenuItem>
      <StyledNavMenuItem > | </StyledNavMenuItem>
      <StyledNavMenuItem onClick={salladScreen} className={activeClass === SALLAD  ? 'selected' : ''}> SALLAD </StyledNavMenuItem>
      <StyledNavMenuItem > | </StyledNavMenuItem>
      <StyledNavMenuItem onClick={dryckScreen} className={activeClass === DRYCK  ? 'selected' : ''}> DRYCK </StyledNavMenuItem>
      <StyledNavMenuItem > | </StyledNavMenuItem>
      <StyledNavMenuItem onClick={ovrigtScreen} className={activeClass === OVRIGT  ? 'selected' : ''}> ÖVRIGT </StyledNavMenuItem>
      </StyledCenter>


      {/* <StyledFlexColumn>
        <StyledFlexCenterPos>
          <StyledLetterSpacing>SÖKFILTER</StyledLetterSpacing>
        </StyledFlexCenterPos>
        <StyledFlexCenterPos>
        <StyledTextSidesFilter>Namn</StyledTextSidesFilter>
          <Input onChange={() => setToppingOrName(!toppingOrName)} type="checkbox" name="" />
        <StyledTextSidesFilter>Ingrediens</StyledTextSidesFilter>
        </StyledFlexCenterPos>
      </StyledFlexColumn>
      
      <StyledSearchWidthPosition>
        <StyledSearchPosFieldAndBtn>
          <StyledSearchField onChange={(e) => setSearch(e.target.value)} type="search" placeholder={textToppingOrName} /> */}
          {/* <StyledSearchBtn type="submit">
            <i className="fa fa-search"></i>
          </StyledSearchBtn> */}
        {/* </StyledSearchPosFieldAndBtn>
      </StyledSearchWidthPosition>
      
      <StyledGridMenu>
        <StyledRowColWrapper>
          <StyledHeaderCardFirstRow> */}
            {/* <div><b>PizzaHeader</b></div> */}
            {/* <StyledShowVertical >
              <StyledFirstRowWidth> */}
                {/* <div><b>PizzaHeader2</b></div> */}
              {/* </StyledFirstRowWidth>
              <StyledSecondRowPriceOrImage>
                <div className="standard-price"><img title="my-img" src={standard} alt="my-img" /></div>
                <div className="standard-price"><img title="my-img" src={family} alt="my-img" /></div>
              </StyledSecondRowPriceOrImage>
            </StyledShowVertical>
          </StyledHeaderCardFirstRow>
        {outputPizzasFirstColumn}
        </StyledRowColWrapper> */}

        {/* <StyledRowColWrapper> 
          <StyledHeaderCardSecondRow> */}
              {/* <div><b>PizzaHeader</b></div> */}
              {/* <StyledShowVertical >
                <StyledFirstRowWidth> */}
                  {/* <div><b>PizzaHeader2</b></div> */}
                {/* </StyledFirstRowWidth>
                <StyledSecondRowPriceOrImage>
                <div className="standard-price"><img title="my-img" src={standard} alt="my-img" /></div>
                  <div className="standard-price"><img title="my-img" src={family} alt="my-img" /></div>
                </StyledSecondRowPriceOrImage>
              </StyledShowVertical>
            </StyledHeaderCardSecondRow> 
        {outputPizzasSecondColumn}
        </StyledRowColWrapper>
      </StyledGridMenu> */}
      {content}
    </StyledContentWidth>
  </StyledWrapperCentering>
    
  );
};



export default Menu;