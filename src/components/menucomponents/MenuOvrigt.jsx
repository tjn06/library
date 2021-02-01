import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FilterMenu from './FilterMenu';
import SearchMenu from './SearchMenu';


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

const StyledCard = styled.div` 
  /* border: 4px solid rgb(22, 189, 58); */
  height: auto;
  padding: 3px;
  border-bottom: 1px solid #d1d1d1;
`;

const StyledShowVertical = styled.div` 
  display: flex;
  /* max-width: 100vw; */
`;

const StyledFirstRowWidth = styled.div`
  width: 85%;
  text-align: left;
`;

const StyledSecondRowPriceOrImage = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

//----------------------------------

const StyledCenter = styled.div` 
display: flex;
justify-content: center;
padding-bottom: 10px;
border-bottom: 1px solid black;
`;

const StyledNavMenuItem= styled.p` 
padding: 0px 25px 0px 25px;
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


const thisPizzas = [
  {
    "id": 1,
    "category": "Efterrätt",
    "name": "Glassbåt",
    "topping": [
      "ISBERGSSALLAD",
      "GURKA",
      "COCKTAILTOMATER"
    ],
    "price": 79,
    "rank": 3
  },
  {
    "id": 2,
    "category": "Efterrätt",
    "name": "Creme brulee",
    "topping": [
      "ISBERGSSALLAD",
      "GURKA",
      "COCKTAILTOMATER",
      "LÖK"
    ],
    "price": 79,
    "rank": 1
  },
  {
    "id": 3,
    "category": "Övrigt",
    "name": "Spaghetti köttfärsås",
    "topping": [
      "Tomat",
      "MögelOst",
      "Oxfile",
      "Ananas"
    ],
    "price": 79,
    "rank": 1
  }
]



const MenuOvrigt = () => {
  const [firstListProducts, setFirstListProducts] = useState();
  const [secondListProducts, setSecondListProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProductsCategory, setFilteredProductsCategory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('alla');
  
  
  //---------
  const [thisFilterVal, setThisFilterVal] = useState(false);


  //---------
  useEffect(() => {
    let number = (filteredProductsCategory.length);
      setFirstListProducts((number % 2) ? number/2 + .5 : number/2)
      setSecondListProducts(firstListProducts + ((number % 2) ? number/2 - .5 : number/2))
    }, [filteredProductsCategory, firstListProducts]);


  function setThisFilterAndLabelName(firstOrSecondFilter) {
    setThisFilterVal(firstOrSecondFilter)
  }

  function setThisFilteredProducts(filteredProductsChild) {
    setFilteredProducts(filteredProductsChild)
  }

  // Used filtered products and filter again on category
  useEffect(() => {
      if (categoryFilter !== "alla") {
        console.log('mu')
        setFilteredProductsCategory(
          filteredProducts.filter((product) =>
          product.category.toLowerCase().includes(categoryFilter.toLowerCase())
          )
        );
      } else {
        setFilteredProductsCategory(filteredProducts)
      }
    }, [categoryFilter, filteredProducts]);


  
  const outputPizzasFirstColumn = filteredProductsCategory.slice(0,firstListProducts).map((pizza) => (
    <StyledCard key={pizza.id}>
      <StyledShowVertical>
        <StyledFirstRowWidth>{pizza.id}. {pizza.name}</StyledFirstRowWidth>
        <StyledSecondRowPriceOrImage>
          <div className="standard-price">{pizza.price}</div>
          
        </StyledSecondRowPriceOrImage>
      </StyledShowVertical>

      <StyledFirstRowWidth>
        {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
      </StyledFirstRowWidth>
    </StyledCard>
  ));

  const outputPizzasSecondColumn = filteredProductsCategory.slice(firstListProducts,secondListProducts).map((pizza) => (
    <StyledCard key={pizza.id}>
      <StyledShowVertical>
        <StyledFirstRowWidth>{pizza.id}. {pizza.name}</StyledFirstRowWidth>
        <StyledSecondRowPriceOrImage>
          <div className="standard-price">{pizza.price}</div>
          
        </StyledSecondRowPriceOrImage>
      </StyledShowVertical>

      <StyledFirstRowWidth>
        {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
      </StyledFirstRowWidth>
    </StyledCard>
  ));
  


  return (
  <div>
    <FilterMenu setChildFilterAndLabelName={setThisFilterAndLabelName}
    firstFilter="Namn" secondFilter="Ingrediens"/>
    <SearchMenu setChildFilteredProducts={setThisFilteredProducts}
    childFilterVal={thisFilterVal} products={thisPizzas}
    searchFirstLabelText="Sök övrigt" searchSecondLabelText="Sök på ingrediens"/>
      
      <StyledCenter>
      <StyledNavMenuItem onClick={() => setCategoryFilter('alla')} >Alla</StyledNavMenuItem> | 
      <StyledNavMenuItem onClick={() => setCategoryFilter('Efterrätt')} >Efterrätt</StyledNavMenuItem> | 
      <StyledNavMenuItem onClick={() => setCategoryFilter('Övrigt')} >Övriga rätter</StyledNavMenuItem>
      </StyledCenter>
    

    <StyledGridMenu>
      <StyledRowColWrapper>
      {outputPizzasFirstColumn}
      </StyledRowColWrapper>

      <StyledRowColWrapper> 

      {outputPizzasSecondColumn}
      </StyledRowColWrapper>
    </StyledGridMenu>
  </div>
    
  );
};



export default MenuOvrigt;