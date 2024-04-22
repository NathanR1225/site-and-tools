import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import home from "../images/home.png";

export function ToolBar({ width }) {
  const nav = useNavigate();
  const loc = useLocation();
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    console.log("loc", loc);
    if (loc.pathname === "/") {
      setCurrentPage("/");
    } else if (loc.pathname === "/Sources") {
      setCurrentPage("Sources");
    }
  }, []);

  useEffect(() => {
    console.log("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div
      style={{ width: `${width}px`, height: "100vh" }}
      className="toolBarContainer"
    >
      <div className="toolbarHeader">
        <div>Nathan's Tools</div>
      </div>
      <div className="toolBarItemContainer" style={{ width: "100%" }}>
        <div
          className="justifyCenter"
          style={{ width: "100%" }}
          onClick={() => {
            nav("/");
            setCurrentPage("/");
          }}
        >
          <div
            className={
              currentPage === "/" ? "baseToolItemSelected" : "baseToolItem"
            }
          >
            <div className="leftToolItem">
              <img src='../images/home.png' alt="No" style={{ width: "25px" }} />
            </div>
            <div style={{height:'100%', paddingTop:'3px', paddingLeft:'10px'}}>Home</div>
          </div>
        </div>
      </div>
      <div
        className={
          currentPage === "Sources" ? "toolbarFooterSelected" : "toolbarFooter"
        }
        onClick={() => {
          nav("/Sources");
          setCurrentPage("Sources");
        }}
      >
        <div style={{ userSelect: "none" }}>V0.1</div>
        <div style={{ userSelect: "none" }}>Sources</div>
      </div>
    </div>
  );
}
