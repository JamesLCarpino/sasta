import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import updateAction from "./updateAction";
import { enterName, enterEmail } from "../../../state/rootSlice";

export default function FormName({ setFormStep, formStep }) {
  //temporary state before implementing redux/be
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: { name, email },
  });
  console.log("finding out where state is", "Name:", name, "EMAIL", email);

  const onSubmit = (data) => {
    dispatch(enterName(data.name));
    dispatch(enterEmail(data.email));
    setFormStep({
      formCheckboxes: true,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1: Please enter your name and email!</h2>
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
  );
}
