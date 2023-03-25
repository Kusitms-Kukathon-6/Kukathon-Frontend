import Main from "../pages/main";
import RoutePage from "../pages/routePage";
import { Route, Routes } from "react-router-dom";
import KakaoAuthHandler from "../pages/kakaoLogin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/route" element={<RoutePage />}></Route>
      <Route path="/login" element={<KakaoAuthHandler />}></Route>
    </Routes>
  );
};

export default Routers;
