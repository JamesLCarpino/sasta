import React, { useState } from "react";
import "./scss/App.scss";
import LandingPage from "./components/common/LandingPage";
import Register from "./components/auth/Register";
import FormList from "./components/common/form/FormList";
import Submission from "./components/common/form/Submission";
import { Route } from "react-router-dom";

//handles the route switching for ease of adding and removing.
const routes = [
  {
    path: "/",
    name: "Landing",
    Component: LandingPage,
  },
  { path: "/register", name: "Register", Component: Register },
  {
    path: "/getting-started",
    name: "FormList",
    Component: FormList,
  },
  {
    path: "/submission",
    name: "Submission",
    Component: Submission,
  },
];
function App() {
  //going to set a state to determin if a user is logged in or not if they are go straight to the questions for wardrobe if not log in sign up
  //const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {routes.map(({ path, Component }) => (
        <Route key="name" path={path} exact>
          <Component />
        </Route>
      ))}
    </div>
  );
}

export default App;
