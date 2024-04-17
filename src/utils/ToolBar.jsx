export function ToolBar({ width }) {
  return (
    <div style={{ width: `${width}px` }} className="toolBarContainer">
      <div className="toolbarHeader">
        <div>Nathan's Tools</div>
      </div>
      <div className="justifyCenter" style={{ width: "100%" }}>
        <div className="justifyCenter" style={{ width: "100%" }}>
          <div className="leftToolItem">
            <img scr="/images/home.png" alt="" style={{ width: "25px" }} />
          </div>
          <div className="rightToolItem">Home</div>
        </div>
      </div>
    </div>
  );
}
