import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//*********THIS PAGE WILL IS A VISUAL REPRESENTATION OF THE JSON OBJECT TO BE SENT TO THE BAKCEND******
export default function Submission() {
  const state = useSelector((state) => state);

  return (
    <>
      <Link to="/">Start over</Link>
      <div style={{ textAlign: "center" }}>
        <div>
          <pre style={{ color: "white", height: "100vh" }}>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}
