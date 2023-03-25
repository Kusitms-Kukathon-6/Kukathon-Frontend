import "./main.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
const Main = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="all">
      <div className="top">
        <div className="main-header">
          <div>
            <div className="service-name">서비스 명</div>
            <div className="service-info">더 쉽게, 어디든 떠나세요</div>
          </div>
          <div className="profile-container">
            <div className="profile-img"></div>
            {/* <img src="#" /> */}
          </div>
        </div>
        <SearchBox />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Main;
