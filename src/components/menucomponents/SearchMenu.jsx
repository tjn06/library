import React, { useState, useEffect } from "react";
import styled from "styled-components";


//Searchbar

const StyledSearchWidthPosition = styled.div`
  margin: auto;
  /* padding: 20px; */
  width: 300px;
  padding: 0px 0px 10px 0px;

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
    color: var(--color-green);
    border: 2px solid var(--color-green);
  }
`;



const SearchMenu = ({setChildFilteredProducts, childFilterVal, products, searchFirstLabelText, searchSecondLabelText}) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [labeltAltOneOrAltTwo, setLabeltAltOneOrAltTwo] = useState();

  useEffect(() => {
  if(childFilterVal) {
    setFilteredProducts(
      products.filter((product) =>
      product.topping.some(topping => topping.toLowerCase().includes(search.toLowerCase())
      ))
    );
  } else {
    setFilteredProducts(
      products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  }, [search, childFilterVal, products]);

  
  useEffect(() => {
    childFilterVal ? setLabeltAltOneOrAltTwo(searchSecondLabelText) : setLabeltAltOneOrAltTwo(searchFirstLabelText);
  }, [childFilterVal, searchSecondLabelText, searchFirstLabelText]);


  useEffect(() => {
    setChildFilteredProducts(filteredProducts)
  }, [filteredProducts, setChildFilteredProducts]);



  return (
  <div>
      <StyledSearchWidthPosition>
        <StyledSearchPosFieldAndBtn>
          <StyledSearchField onChange={(e) => setSearch(e.target.value)} type="search" placeholder={labeltAltOneOrAltTwo} />
        </StyledSearchPosFieldAndBtn>
      </StyledSearchWidthPosition>
  </div>
    
  );
};



export default SearchMenu;