import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { store } from "./state/store";

// Import reducer/index.js as root reducer, it's where we're combining all our reducer files
// import rootReducer from "./state";

let middleware = [thunk, logger];
// if (process.env.NODE_ENV === 'development') {
//   middleware = [...middleware, thunk, logger];
// } else {
//   middleware = [...middleware, thunk];
// }

// const store = createStore(rootReducer, applyMiddleware(...middleware));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//data shape
// details: {
//   name: "",
//   email: "",
//   location: "",
//   needs: {
//     bottoms: {},
//     tops: [],
//     coats_jackets: [],
//     dresses_jumpsuits: [],
//     footwear: [],
//     accessories: [],
//     by_outfit: [],
//     color_sub: "",
//   },
//   image: null,
//   comments: "",
//   material: "",
//   care_info: "",
//   measurements: {
//     bust: null,
//     waist: null,
//     full_hip: null,
//     shoulder: null,
//     inseam: null,
//     outseam: null,
//   },

//   dying: {
//     restore: false,
//     tie_dye_color: false,
//     tie_dye_bleach: false,
//   },
//   addition: "",
//   cuttingHemming: "",
// },
