import React, { useRef, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
//import { useStateMachine, createStore } from "little-state-machine";
import FormCheckboxes from "./FormCheckboxes";
import FormName from "./FormName";

const startState = { autoAlpha: 0, y: 0 };
export default function FormFile(props) {
  //

  const [formStep, setFormStep] = useState({
    formName: true,
    formCheckboxes: false,
  });

  useEffect(() => {});
  return (
    <div className="form-container">
      <div className="form-wall"></div>
      <div className="actual-form">
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
