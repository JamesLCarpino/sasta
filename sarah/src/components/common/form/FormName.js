import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
  enterName,
  enterEmail,
  enterLocation,
  enterNeeds,
} from "../../../state/rootSlice";

export default function FormName({ setFormStep, formStep }) {
  //temporary state before implementing redux/be
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const state = useSelector((state) => state.location.state);
  const zip_code = useSelector((state) => state.location.zip_code);
  const country = useSelector((state) => state.location.country);
  const city = useSelector((state) => state.location.city);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: { name, email, state, zip_code, country, city },
  });
  console.log("finding out where state is", "Name:", name, "EMAIL", email);

  const onSubmit = (data) => {
    dispatch(enterName(data.name));

    dispatch(enterEmail(data.email));

    setFormStep({
      formLocation: true,
    });

    console.log(data);
    // history.push("/getting-started/location");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Lets learn a bit about you!</h2>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            ref={register({ required: "Please enter your name." })}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input name="email" ref={register({ required: "Email Required" })} />
        </label>

        <button type="submit">Next!</button>
      </form>
    </>
  );
}
