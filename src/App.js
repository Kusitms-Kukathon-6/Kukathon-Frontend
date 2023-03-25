import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/routers";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
