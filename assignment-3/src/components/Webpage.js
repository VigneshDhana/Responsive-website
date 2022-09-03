import React from "react";
import "./webpage.css";
import WebInfo from "./WebInfo";

function Webpage() {
  const list = ["round one", "round two", "round three"];
  return (
    <>
      <div className="header">
        <div className="topbar"></div>
        <div className="menu">
          <div className="menubar"></div>
          <div className="menubar"></div>
          <div className="menubar"></div>
        </div>
      </div>
      <div className="section">
        <div className="infosection">
          {list.map((item, i) => {
            return <WebInfo key={i} cls={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Webpage;
