import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      // url: `http://3.35.208.142/oauth/callback/kakao?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace("/main"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/main"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

const KakaoAuthHandler = (props) => {
  // const dispatch = useDispatch();

  // // 발급된 인가코드를 백엔드로 넘겨주기 위해 꺼내오는 작업이 필요하다.
  // // code라는 이름으로 파라미터 코드 값을 꺼내오려면 아래와 같이 선언하면 된다.
  // let code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  // React.useEffect(() => {
  //   // 꺼내온 code(인가코드)를 미들웨어를 통해 백엔드로 넘겨준다.
  //   dispatch(kakaoLogin(code));
  // }, [code, dispatch]);

  return <div></div>;
};

export default KakaoAuthHandler;
