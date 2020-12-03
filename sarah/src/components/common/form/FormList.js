import React, { useState } from "react";
import { Route } from "react-router-dom";
import FormCheckboxes from "./FormCheckboxes";
import FormName from "./FormName";

export default function FormFile(props) {
  //

  const [formStep, setFormStep] = useState({
    formName: true,
    formCheckboxes: false,
  });

  return (
    <div className="form-container">
      <div className="form-wall"></div>
      <div className="actual-form">
        {/* is there a better way to toggle between these stages? there's going to be a lot of pages. */}
        <div>
          {formStep.formName === true ? (
            <FormName setFormStep={setFormStep} formStep={formStep} />
          ) : (
            <>{formStep.formCheckboxes === true ? <FormCheckboxes /> : null}</>
          )}

          <Route exact path="/getting-started/name" component={FormName} />
        </div>
      </div>
    </div>
  );
}
