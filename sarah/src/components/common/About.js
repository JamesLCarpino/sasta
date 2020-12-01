import React from "react";
import { useHistory } from "react-router-dom";
const About = () => {
  let history = useHistory();
  const clickStart = () => {
    history.push("/getting-started");
  };
  const clickCreatives = () => {
    history.push("/creatives");
  };
  const clickTeam = () => {
    history.push("/the-team");
  };
  return (
    <div>
      <section>
        <h2>Sasta's story:</h2>
        <p>lorem ipsum</p>
      </section>
      <div>
        <button>MEET THE TEAM</button>
        <button>VIEW CREATIVES</button>
        <button>GET STARTED</button>
      </div>
    </div>
  );
};

export default About;
