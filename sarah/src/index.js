import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

//using littlestatemachine as a placeholderbefore building backend
createStore({
  details: {
    name: "",
    email: "",
    location: "",
    needs: {
      bottoms: [],
      tops: [],
      coats_jackets: [],
      dresses_jumpsuits: [],
      footwear: [],
      accessories: [],
      by_outfit: [],
      color_sub: "",
    },
    image: null,
    comments: "",
    material: "",
    care_info: "",
    measurements: {
      bust: null,
      waist: null,
      full_hip: null,
      shoulder: null,
      inseam: null,
      outseam: null,
    },

    dying: {
      restore: false,
      tie_dye_color: false,
      tie_dye_bleach: false,
    },
    addition: "",
    cuttingHemming: "",
  },
});

ReactDOM.render(
  <StateMachineProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </StateMachineProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
