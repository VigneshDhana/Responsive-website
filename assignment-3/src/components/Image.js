import React from "react";
import "./image.css";
import Webpage from "./Webpage";
import Mobile from "./Mobile";

function Image() {
  return (
    <div className="image">
      <div className="web">
        <Webpage />
      </div>
      {
        <div className="mobile">
          <Mobile />
        </div>
      }
    </div>
  );
}

export default Image;
