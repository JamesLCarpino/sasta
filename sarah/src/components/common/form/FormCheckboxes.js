import React from "react";
import { useForm } from "react-hook-form";
import updateAction from "./updateAction";
import { useStateMachine } from "little-state-machine";

export default function FormCheckboxes(setFormStep) {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors } = useForm({
    defaultValues: state.details,
  });

  const onSubmit = (data) => {
    //action(data);
    // setFormStep({
    //   formCheckboxes: false,
    // });
    console.log("Checkboxes", data.target.value);
    //
  };

  const inputValue = (data) => {
    action(data.target.checked);
    console.log("cadat check ", data.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Select your needs!</h2>
        <label>
          Bottoms:
          <input
            name="bottoms"
            type="checkbox"
            onChange={inputValue}
            value="bottoms"
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
