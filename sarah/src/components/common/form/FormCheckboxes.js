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
    action(data);
    // setFormStep({
    //   formCheckboxes: false,
    // });
    console.log("Checkboxes", data.target.value);
    //
  };

  const inputValue = (data) => {
    action(data.target.checked);
    console.log("cadat check ", data.target.checked);
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
            checked={state.details.needs.bottoms}
            onChange={inputValue}
            //ref={{ required: "Please choose 1" }}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
