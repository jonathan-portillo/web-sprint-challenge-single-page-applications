import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Pizza = () => {
  const [formState, setFormState] = useState({
    name: "",
    pizzasize: "",
    pepperoni: false,
    bacon: false,
    chicken: false,
    sausage: false,
    instructions: "",
  });

  const [disableButton, setDisableButton] = useState();

  const [order, setOrder] = useState([]);

  const [errors, setErrors] = useState({
    name: "",
    pizzasize: "",
    toppings: {
      pepperoni: false,
      bacon: false,
      chicken: false,
      sausage: false,
    },
    instructions: "",
  });

  const submitOrder = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users", formState).then((response) => {
      setOrder([...order, response.data]);
      setFormState({
        name: "",
        pizzasize: "",
        pepperoni: false,
        bacon: false,
        chicken: false,
        sausage: false,
        instructions: "",
      });
    });
    console.log("order submitted!");
  };

  const orderChange = (e) => {
    e.persist();
    const newOrderData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newOrderData);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must have at least 2 characters")
      .required("Name is required"),
    pizzasize: yup
      .string()
      .oneOf(
        ["Small", "Medium", "Large", "Extra Large"],
        "Must pick a size for pizza"
      ),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean(),
    instructions: yup.string(),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
      setDisableButton(!isValid);
    });
  }, [formState]);

  return (
    <div>
      <form onSubmit={submitOrder}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            id="name"
            type="text"
            name="name"
            data-cy="name"
            placeholder="Enter Name"
            value={formState.name}
            onChange={orderChange}
          />
          {errors.name.length > 2 ? <p>{errors.name}</p> : null}
        </label>
        <label htmlFor="pizzasize">
          <p>Pizza Size</p>
          <select
            id="pizzasize"
            name="pizzasize"
            data-cy="pizzasize"
            onChange={orderChange}
          >
            <option>Choose a Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
          {errors.pizzasize.length > 0 ? <p>{errors.pizzasize}</p> : null}
        </label>
        <p>Choose Your Topping</p>

        <label htmlFor="pepperoni">
          Pepperoni
          <input
            id="pepperoni"
            type="checkbox"
            name="pepperoni"
            data-cy="pepperoni"
            value={formState.pepperoni}
            onChange={orderChange}
          />
        </label>
        <label htmlFor="bacon">
          Bacon
          <input
            id="bacon"
            type="checkbox"
            name="bacon"
            data-cy="bacon"
            value={formState.bacon}
            onChange={orderChange}
          />
        </label>
        <label htmlFor="chicken">
          Chicken
          <input
            id="chicken"
            type="checkbox"
            name="chicken"
            data-cy="chicken"
            value={formState.chicken}
            onChange={orderChange}
          />
        </label>
        <label htmlFor="sausage">
          Sausage
          <input
            id="sausage"
            type="checkbox"
            name="sausage"
            data-cy="sausage"
            value={formState.sausage}
            onChange={orderChange}
          />
        </label>

        <label htlmFor="instructions">
          <p>Add Any Special Instruction</p>
          <textarea
            id="instructions"
            type="text"
            name="instructions"
            data-cy="instructions"
            placeholder="Add any special instructions"
            value={formState.instructions}
            onChange={orderChange}
          />
        </label>
        <div>
          <button data-cy="submit" disabled={disableButton} type="submit">
            Submit Order
          </button>
        </div>
        <pre>{JSON.stringify(order, null, 2)}</pre>
      </form>
    </div>
  );
};

export default Pizza;
