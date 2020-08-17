import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const pizza = () => {
  //   const [formState, setFormState] = useState({
  //     name: "",
  //     pizzasize: "",
  //     toppings: {
  //       pepperoni: false,
  //       bacon: false,
  //       chicken: false,
  //       sausage: false,
  //     },
  //   });

  return (
    <div>
      <form>
        <label htmlFor="name">
          <p>Name</p>
          <input id="name" type="text" name="name" placeholder="Enter Name" />
        </label>
        <label htmlFor="pizzasize">
          <p>Pizza Size</p>
          <select id="pizzasize" name="pizzasize">
            <option>Choose a Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </label>
        <p>Choose Your Topping</p>
        <div className="toppings">
          <label htlmFor="toppings">
            Pepperoni
            <input id="toppings" type="checkbox" name="pepperoni" />
          </label>
          <label htlmFor="toppings">
            Bacon
            <input id="toppings" type="checkbox" name="bacon" />
          </label>
          <label htlmFor="toppings">
            Chicken
            <input id="toppings" type="checkbox" name="chicken" />
          </label>
          <label htlmFor="toppings">
            Sausage
            <input id="toppings" type="checkbox" name="sausage" />
          </label>
        </div>
        <label htlmFor="instructions">
          <p>Add Any Special Instruction</p>
          <textarea
            id="instructions"
            type="text"
            placeholder="Add any special instructions"
          />
        </label>
        <div>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default pizza;
