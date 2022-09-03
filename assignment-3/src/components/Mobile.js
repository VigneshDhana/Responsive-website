import React from "react";
import "./mobile.css";
import MobileInfo from "./MobileInfo";

function Mobile() {
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
            return <MobileInfo key={i} cls={item} />;
          })}
          {list.map((item, i) => {
            return <MobileInfo key={i + 2} cls={item} />;
          })}
          <MobileInfo key="6" cls={list[0]} />
        </div>
      </div>
    </>
  );
}

export default Mobile;
