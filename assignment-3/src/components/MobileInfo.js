import React from "react";

function MobileInfo({ cls }) {
  return (
    <div className="info">
      <div className={cls}></div>
      <div className="lines">
        <div className="title-line"></div>
        <div className="line first"></div>
        <div className="line second"></div>
        <div className="line third"></div>
      </div>
    </div>
  );
}

export default MobileInfo;
