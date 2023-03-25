import React, { useState, useEffect } from "react";
import Kakao from "kakao-sdk";

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // SDK 초기화
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);

    // 로그인 여부 체크
    Kakao.Auth.getStatus((statusObj) => {
      setIsLoggedIn(statusObj.status === "connected");
    });
  }, []);

  const handleLogin = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        setIsLoggedIn(true);
      },
      fail: (err) => {
        console.error(err);
      },
    });
  };

  const handleLogout = () => {
    Kakao.Auth.logout(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>카카오 로그인</button>
      )}
    </div>
  );
}

export default LoginButton;
