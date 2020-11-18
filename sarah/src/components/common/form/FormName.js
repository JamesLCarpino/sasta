import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import updateAction from "./updateAction";
import { useStateMachine } from "little-state-machine";

export default function FormName({ setFormStep, formStep }) {
  //temporary state before implementing redux/be
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.details,
  });
  const { push } = useHistory();
  const onSubmit = (data) => {
    action(data);
    // push("/getting-started/needs");
    setFormStep({
      formName: false,
      formCheckboxes: true,
    });
    console.log(formStep);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1: Please enter your name and email!</h2>
      <label>
        Name:
        <input
          name="name"
          ref={register({ required: "Please enter your name." })}
        />
      </label>
      <label>
        Email:
        <input name="email" ref={register({ required: "Email Required" })} />
      </label>
      <button type="submit">Next!</button>
    </form>
  );
}
