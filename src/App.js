import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./pages/Home";
import { Sources } from "./pages/Sources";
import { ToolBar } from "./utils/ToolBar";

function App() {
  const [toolBarWidth, setToolBarWidth] = useState(250);
  return (
    <BrowserRouter>
      <div className="justifyLeft">
        <ToolBar width={toolBarWidth} />
        <div
          style={{
            width: `calc(100VW - ${toolBarWidth}px)`,
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <Routes>
            <Route path="/Sources" element={<Sources />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
