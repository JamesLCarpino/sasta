import React, { useState } from "react";

import "./App.scss";
import LandingPage from "./components/common/LandingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* {loggedIn === false ? (
                <Login></Login>
            ): (
                
            )} */}
      <LandingPage />
    </div>
  );
}

export default App;
