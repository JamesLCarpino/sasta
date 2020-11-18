import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

export default function FormFile() {
  let { formAnim, moveStripe } = useRef();
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
  });
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
        <div></div>
      </div>
    </div>
  );
}
