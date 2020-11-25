import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import Modal from "react-bootstrap/Modal";
import { Transition } from "react-transition-group";

import Register from "../auth/Register";
const startState = { autoAlpha: 0, y: 0 };
export default function LandingPage(props) {
  const [show, setShow] = useState(false);
  let {
    wallOneMove,
    wallTwoMove,
    titleFadeUp,
    buttonOneIn,
    buttonTwoIn,
    tagLine,
  } = useRef();
  let history = useHistory();

  let showRegistration = () => {
    setShow(true);
  };

  let onHide = () => {
    setShow(false);
  };

  let getStarted = () => {
    history.push("/getting-started");
  };

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
    TweenMax.from(buttonOneIn, 6.5, {
      opacity: 0,
      x: -50,
      ease: Power3.easeInOut,
      delay: 0.05,
    });
    TweenMax.from(buttonTwoIn, 6.5, {
      opacity: 0,
      x: 50,
      ease: Power3.easeInOut,
      delay: 0.05,
    });
    TweenMax.from(tagLine, 5, {
      opacity: 0,
      x: -150,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={0}
      onExit={(node) => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.75, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done,
        });
      }}
    >
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
        <div className="title-wrapper">
          <h1
            ref={(el) => {
              titleFadeUp = el;
            }}
          >
            SÁSTA
          </h1>
          <p
            className="tagLine"
            ref={(el) => {
              tagLine = el;
            }}
          >
            Your next look starts with local creatives.
          </p>
          <div className="btn-wrapper">
            <button
              onClick={getStarted}
              className="btn draw-border"
              ref={(el) => {
                buttonOneIn = el;
              }}
            >
              Let's Get Started
            </button>
            <button
              onClick={showRegistration}
              className="btn draw-border-two"
              ref={(el) => {
                buttonTwoIn = el;
              }}
            >
              Register
            </button>
            <Modal
              show={show}
              onHide={onHide}
              size="lg"
              //aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Register></Register>
            </Modal>
          </div>
        </div>
      </div>
    </Transition>
  );
}
