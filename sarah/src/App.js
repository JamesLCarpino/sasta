import React, { useState } from "react";
import "./scss/App.scss";
import LandingPage from "./components/common/LandingPage";
import Register from "./components/auth/Register";
import FormList from "./components/common/form/FormList";
import { Route } from "react-router-dom";

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
      {routes.map(({ path, Component }) => (
        <Route key="name" path={path} exact>
          <Component />
        </Route>
      ))}
    </div>
  );
}

export default App;
