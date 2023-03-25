import "./SearchBox.css";
import { UilArrowUp, UilMapMarkerAlt } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import { searchData } from "../../assets/Data/searchData";
import { RouteResult } from "../../api/routeresult";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [departSearch, setDepartSearch] = useState("");
  const onDepartChange = (e) => {
    setDepartSearch(e.target.value);
  };
  const [destinSearch, setDestinSearch] = useState("");
  const onDestinChange = (e) => {
    setDestinSearch(e.target.value);
  };

  const filterDepartSubway = searchData.filter((p) => {
    return p.includes(departSearch);
  });

  const filterDestinSubway = searchData.filter((p) => {
    return p.includes(destinSearch);
  });
  const [departisOpen, setDepartIsOpen] = useState(false);
  const [destinisOpen, setDestinIsOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const DepartSerchSetting = (e) => {
    setDepartIsOpen(false);
    const selectedValue = e.target.innerText; // 클릭한 검색 결과의 값을 가져옵니다.
    setDepartSearch(selectedValue); // 검색 결과를 input 창에 입력합니다.
  };

  const DestionSerchSetting = (e) => {
    setDestinIsOpen(false);
    const selectedValue = e.target.innerText; // 클릭한 검색 결과의 값을 가져옵니다.
    setDestinSearch(selectedValue); // 검색 결과를 input 창에 입력합니다.
  };
  const navigate = useNavigate();
  const RouteRequest = async () => {
    if (departSearch && destinSearch) {
      const response = await RouteResult(departSearch, destinSearch);
      console.log(response);
      // setSearchResult(response.data);
      navigate("/route", { state: { searchResult: response.data } }); // state 객체에 searchResult 값을 전달합니다.
    }
  };

  return (
    <div className="search-container">
      <div className="where-text">어디로 가시나요?</div>
      <div className="place-container">
        <div className="place">
          <div className="search-icon-container">
            <UilArrowUp />
          </div>
          <div className="search-box">
            <div className="station-text">출발역</div>
            <input
              className="place-input"
              placeholder="출발지를 입력하세요"
              type="text"
              value={departSearch}
              onChange={(e) => {
                onDepartChange(e);
                setDepartIsOpen(true);
              }}
            />
            <div
              className={
                "searchresult" + (departisOpen ? "" : " search-hidden")
              }
            >
              {filterDepartSubway.slice(0, 5).map((value, idx) => {
                return (
                  <div
                    key={idx}
                    className="searchresult-li"
                    onClick={DepartSerchSetting}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="connection-line-container">
        <div className="connection-line"></div>
      </div>
      <div className="place-container">
        <div className="place">
          <div className="search-icon-container">
            <UilMapMarkerAlt />
          </div>
          <div className="search-box">
            <div className="station-text">도착역</div>
            <input
              className="place-input"
              placeholder="목적지를 입력하세요"
              type="text"
              value={destinSearch}
              onChange={(e) => {
                onDestinChange(e);
                setDestinIsOpen(true);
              }}
            />
            <div
              className={
                "searchresult" + (destinisOpen ? "" : " search-hidden")
              }
            >
              {filterDestinSubway.slice(0, 5).map((value, idx) => {
                return (
                  <div
                    key={idx}
                    className="searchresult-li"
                    onClick={DestionSerchSetting}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="route-btn-container">
        <button className="route-btn" onClick={RouteRequest}>
          경로 확인하기
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
