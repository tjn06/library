import React, { useState, useEffect } from "react";
import standard from '../assets/standard.svg';
import family from '../assets/family.svg';

const Menu = () => {
  const [firstListPizzas, setFirstListPizzas] = useState();
  const [secondListPizzas, setSecondListPizzas] = useState();

  const pizzas = [
    {
      "id": 1,
      "category": "Pizza",
      "name": "1.Vesuvius",
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
      "name": "2.Hawaii",
      "topping": [
        "Tomat",
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
      "name": "3.Kebab",
      "topping": [
        "Tomat",
        "Ost",
        "Skinka",
        "Ananas"
      ],
      "price": 79,
      "price_family": 120,
      "rank": 1
    },
    {
      "id": 4,
      "category": "Pizza",
      "name": "4.Grodan",
      "topping": [
        "Tomat",
        "Ost",
        "Skinka",
        "Ananas"
      ],
      "price": 79,
      "price_family": 120,
      "rank": 1
    },
    {
      "id": 5,
      "category": "Viking",
      "name": "5.Special",
      "topping": [
        "Tomat",
        "Ost",
        "Skinka",
        "Ananas"
      ],
      "price": 79,
      "price_family": 120,
      "rank": 1
    }
  ]


  useEffect(() => {
  
  let number = (pizzas.length);
  // let halfRoundedUp = (number % 2) ? number/2 + .5 : number/2;
  // let halfRoundedDown = (number % 2) ? number/2 - .5 : number/2;


    setFirstListPizzas((number % 2) ? number/2 + .5 : number/2)
    setSecondListPizzas(firstListPizzas + ((number % 2) ? number/2 - .5 : number/2))
  }, [firstListPizzas, pizzas.length, secondListPizzas]);

  const outputPizzasFirstColumn = pizzas.slice(0,firstListPizzas).map((pizza) => (
    <div className="card" key={pizza.id}>
      <div className="show-vertical">
        <div className="first-col-width">{pizza.name}</div>
        <div className="prices">
          <div className="standard-price">{pizza.price}</div>
          <div className="family-price">{pizza.price_family}</div>
        </div>
      </div>

      <div className="first-col-width">
        <span>&nbsp;&nbsp;&nbsp;</span>
        {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
      </div>
    </div>
  ));

  const outputPizzasSecondColumn = pizzas.slice(firstListPizzas,secondListPizzas).map((pizza) => (
    <div className="card" key={pizza.id}>
      <div className="show-vertical">
        <div className="first-col-width">{pizza.name}</div>
        <div className="prices">
          <div className="standard-price">{pizza.price}</div>
          <div className="family-price">{pizza.price_family}</div>
        </div>
      </div>

      <div className="first-col-width">
        {pizza.topping.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item }</span> )}
      </div>
    </div>
  ));
  

  return (
    <div className='test'>
      <div className='gridding'>

        <div className="gTeAXC">
          <div className="header-card">
            {/* <div><b>Pizza</b></div> */}
            <div className="show-vertical">
              <div className="first-col-width">
                <div></div>
              </div>
              <div className="prices">
                <div className="standard-price"><img title="my-img" src={standard} alt="my-img" /></div>
                <div className="standard-price"><img title="my-img" src={family} alt="my-img" /></div>
              </div>
            </div>
          </div>
        {outputPizzasFirstColumn}
        </div>

        <div className="gTeAXC"> 
          <div className="header-card-show-hide">
              {/* <div></div> */}
              <div className="show-vertical">
                <div className="first-col-width">
                  <div><b></b></div>
                </div>
                <div className="prices">
                <div className="standard-price"><img title="my-img" src={standard} alt="my-img" /></div>
                  <div className="standard-price"><img title="my-img" src={family} alt="my-img" /></div>
                </div>
              </div>
            </div> 
        {outputPizzasSecondColumn}
        </div>

      </div>
    </div>

    
  );
};



export default Menu;