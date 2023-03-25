import "./SearchBox.css";
import { UilArrowUp, UilMapMarkerAlt } from "@iconscout/react-unicons";
const SearchBox = () => {
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
            <input className="place-input" placeholder="출발지를 입력하세요" />
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
            <input className="place-input" placeholder="목적지를 입력하세요" />
          </div>
        </div>
      </div>
      <div className="route-btn-container">
        <button className="route-btn">경로 확인하기</button>
      </div>

      <div></div>
    </div>
  );
};

export default SearchBox;
