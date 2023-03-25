import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/routers";
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <div className="App">
        <Routers />
      </div>
      </RecoilRoot>
    </BrowserRouter>
  );

}

export default App;
