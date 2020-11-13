import React, { useRef, useState, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

export default function LandingPage() {
  let { wallOneMove, wallTwoMove, titleFadeUp } = useRef();

  useEffect(() => {
    TweenMax.from(wallOneMove, 5, {
      opacity: 1,
      y: -1500,
      //x: 1500,
      ease: Power3.easeOut,
      delay: 0.05,
    });
    TweenMax.from(wallTwoMove, 4, {
      opacity: 1,
      //x: 70,
      y: 1500,
      ease: Power3.easeOut,
      delay: 0.05,
    });
    TweenMax.from(titleFadeUp, 6.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <div className="landing-container">
      <div className="landing-wrapper-1">
        <div
          className="wall"
          ref={(el) => {
            wallOneMove = el;
          }}
        ></div>
      </div>

      <div className="landing-wrapper-2">
        <div
          className="wall2"
          ref={(el) => {
            wallTwoMove = el;
          }}
        ></div>
      </div>
      <h1
        ref={(el) => {
          titleFadeUp = el;
        }}
      >
        SÁSTA
      </h1>
    </div>
  );
}
