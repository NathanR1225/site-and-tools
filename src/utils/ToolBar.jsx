import React from "react";
import home from "../images/547d0d138096fa3b8a356c3da278f9b8.jpg";

export function ToolBar({ width }) {
  return (
    <div style={{ width: `${width}px`, height:'100vh' }} className="toolBarContainer">
      <div className="toolbarHeader">
        <div>Nathan's Tools</div>
      </div>
      <div className="toolBarItemContainer" style={{ width: "100%" }}>
        <div className="justifyCenter" style={{ width: "100%" }}>
          <div className="leftToolItem">
            <img scr={home} alt="No" style={{ width: "25px" }} />
          </div>
          <div className="rightToolItem">Home</div>
        </div>
      </div>
      <div className="toolbarFooter">
        <div>V0.1</div>
        <div>Sources</div>
      </div>
    </div>
  );
}
