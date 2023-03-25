import "./main.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
const Main = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const onSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }


  return (
  <div className="main-box">메인페이지
    <div className="main-box-1">내용넣을거에요
      <Link to ='/route'>
        <button className="main-button">확인</button>
      </Link>
      <div className="main-box-2">
        출발<form onSubmit={e => onSearch(e)}>
              <input type="text" value={search} placeholder="출발할 곳을 입력허세요" onChange={onChangeSearch}/>
            </form>
      </div>
      <div className="main-box-2">
        도착<form onSubmit={e => onSearch(e)}>
              <input type="text" value={search} placeholder="도착할 곳을 입력하세요" onChange={onChangeSearch}/>
            </form>
      </div>
    </div>
    <div className="main-box-2">즐겨찾기
      <div className="main-box-2-1">즐겨찾기1</div>
      <div className="main-box-2-2">즐겨찾기2</div>
    </div>
  </div>
  )
};

export default Main;
