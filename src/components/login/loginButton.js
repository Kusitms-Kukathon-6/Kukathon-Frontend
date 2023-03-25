import React from "react";
import "./loginButton.css";
import loginButton from "../../assets/img/loginButton.svg";

const LoginButton = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLoginPage = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div className="login-container">
      <img src={loginButton} alt="" />
      <React.Fragment>
        <div className="login-btn-container">
          <button onClick={kakaoLoginPage} className="login-btn">
            카카오톡으로 시작하기
          </button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default LoginButton;
