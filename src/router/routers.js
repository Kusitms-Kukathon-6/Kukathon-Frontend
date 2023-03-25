import Main from "../pages/main";
import Login from "../pages/login";
import RoutePage from "../pages/routePage";
import { Route, Routes } from "react-router-dom";
import KakaoAuthHandler from "../pages/kakaoLogin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/route" element={<RoutePage />}></Route>
      <Route path="/kakaologin" element={<KakaoAuthHandler />}></Route>
    </Routes>
  );
};

export default Routers;
