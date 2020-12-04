import React, { useState } from "react";
import { Route } from "react-router-dom";
import FormCheckboxes from "./FormCheckboxes";
import FormName from "./FormName";
import FormLocation from "./FormLocation";

export default function FormFile(props) {
  const [formStep, setFormStep] = useState({
    formName: true,
    formCheckboxes: false,
    formLocation: false,
  });

  return (
    <div className="form-container">
      <div className="form-wall"></div>

      <div className="actual-form">
        {/* is there a better way to toggle between these stages? there's going to be a lot of pages. */}
        <div>
          {formStep.formName === true ? (
            <FormName setFormStep={setFormStep} formStep={formStep} />
          ) : null}
          {formStep.formCheckboxes === true ? (
            <FormCheckboxes setFormStep={setFormStep} />
          ) : null}
          {formStep.formLocation === true ? (
            <FormLocation setFormStep={setFormStep} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
