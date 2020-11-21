import React, { useRef, useEffect, useState } from "react";
import { useLocation, Route } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import { useStateMachine, createStore } from "little-state-machine";
import FormCheckboxes from "./FormCheckboxes";
import FormName from "./FormName";

export default function FormFile() {
  let { formAnim, moveStripe } = useRef();
  const [formStep, setFormStep] = useState({
    formName: true,
    formCheckboxes: false,
  });
  let location = useLocation();

  useEffect(() => {
    TweenMax.from(formAnim, 5, {
      opacity: 1,
      y: -1500,

      //x: 1500,
      ease: Power3.easeOut,
      delay: 0.05,
    });
    TweenMax.from(moveStripe, 2, {
      opacity: 0,
      x: 2000,
      y: 900,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <div className="form-container">
      <div
        className="form-wall"
        ref={(el) => {
          moveStripe = el;
        }}
      ></div>
      <div
        className="actual-form"
        ref={(el) => {
          formAnim = el;
        }}
      >
        <div>
          {formStep.formName === true ? (
            <FormName setFormStep={setFormStep} formStep={formStep} />
          ) : (
            <>{formStep.formCheckboxes === true ? <FormCheckboxes /> : null}</>
          )}

          <Route exact path="/getting-started/name" component={FormName} />
          <Route path="/getting-started/needs" component={FormCheckboxes} />
        </div>
      </div>
    </div>
  );
}
