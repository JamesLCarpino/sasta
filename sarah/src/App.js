import React, { useState } from "react";
import "./scss/App.scss";
import LandingPage from "./components/common/LandingPage";
import Register from "./components/auth/Register";
import FormList from "./components/common/form/FormList";
import { Route, Switch } from "react-router-dom";
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

const routes = [
  {
    path: "/",
    name: "Landing",
    Component: LandingPage,
    show: null,
  },
  { path: "/register", name: "Register", Component: Register, show: null },
  {
    path: "/getting-started",
    name: "FormList",
    Component: FormList,
    show: null,
  },
];
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* {routes.map(({ path, show, Component }) => (
        <Route key="name" path={path} exact>
          {({ match }) => <Component />}
        </Route>
      ))} */}

      <Route exact path="/">
        {({ match }) => <LandingPage show={match !== null} />}
      </Route>
      <Route exact path="/getting-started">
        {({ match }) => <FormList show={match !== null} />}
      </Route>

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
