import "./main.css";
import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import LoginButton from "../components/login/loginButton";
import Bookmark from "../components/bookmark/bookmark";
const Main = () => {
  const [loginToken, setLoginToken] = useState("");
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (loginToken === "") {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [loginToken]);
  return (
    <div className="all">
      <div className="top">
        <div className="main-header">
          <div>
            <div className="service-name">EZWay</div>
            <div className="service-info">더 쉽게, 어디든 떠나세요</div>
          </div>
          <div className="profile-container">
            <div className="profile-img"></div>
            {/* <img src="#" /> */}
          </div>
        </div>
        <SearchBox />
      </div>
      <div className={"bottom" + (login ? " login-hidden" : "")}>
        <div className="usually-route-container">
          <div className="usually-header">자주가는 경로</div>
          <div className="usually-header-detail">
            로그인 하고 즐겨찾기 해보세요
          </div>
        </div>
        <LoginButton />
      </div>
      <div className={"bottom" + (login ? "" : " login-hidden")}>
        <div className="usually-route-container">
          <div className="usually-header">자주가는 경로</div>
          <div className="usually-header-detail">
            자주 가는 곳을 즐겨찾기하고 빠르게 찾아가세요
          </div>
        </div>
        <Bookmark />
      </div>
    </div>
  );
};

export default Main;
