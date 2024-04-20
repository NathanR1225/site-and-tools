import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";
import { Home } from "./pages/Home";
import { ToolBar } from "./utils/ToolBar";

function App() {
  const [toolBarWidth, setToolBarWidth] = useState(250);
  return (
    <div className="justifyLeft">
      <ToolBar width={toolBarWidth} />
      <div style={{ width: `calc(100VW - ${toolBarWidth}px)`, height:'100vh', overflow:'scroll' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
