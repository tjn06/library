import React, { useState, useEffect } from "react";

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
  }, [pizzas,firstListPizzas,secondListPizzas ]);

  const outputPizzasFirstColumn = pizzas.slice(0,firstListPizzas).map((pizza) => (
    <div className="card" key={pizza.id}>
      <div>{pizza.name}</div>

      <div className="show-vertical">
        <div className="topping">
        {pizza.topping.map((top) => (
          <div >{top},&nbsp; </div>
        ))}
        </div>

        <div className="prices">
          <div>{pizza.price}</div>
          <div>{pizza.price_family}</div>
        </div>
      </div>
    </div>
  ));

  const outputPizzasSecondColumn = pizzas.slice(firstListPizzas,secondListPizzas).map((pizza) => (
    <div className="card" key={pizza.id}>
      <div>{pizza.name}</div>

      <div className="show-vertical">
        <div className="topping">
        {pizza.topping.map((top) => (
          <div >{top},&nbsp; </div>
        ))}
        </div>

        <div className="prices">
          <div>{pizza.price}</div>
          <div>{pizza.price_family}</div>
        </div>
      </div>
    </div>
  ));
  

  return (
    <div className='test'>

      <div className='gridding'>

        <div className="gTeAXC">
          
          <div className="card">
            <div></div>
            <div className="show-vertical">
              <div className="topping">
                <div >g</div>
            </div>
            <div className="prices">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

          {outputPizzasFirstColumn}</div>
        <div className="gTeAXC"> {outputPizzasSecondColumn}</div>
      </div>

    </div>

    
  );
};



export default Menu;