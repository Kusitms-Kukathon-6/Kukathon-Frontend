import "./routePage.css";
import React, { useState, useEffect } from "react";
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilStar } from '@iconscout/react-unicons'; //안채워진
import { UimStar } from '@iconscout/react-unicons-monochrome';//채워진
import { UimCircle } from '@iconscout/react-unicons-monochrome';

const RoutePage = () => {
  const [bookmark, setBookmark] = useState(false);
  
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  
  return (
    <>
    <div className="nav">
      <div className="nav-route">
      <div className="nav-show-button" onClick={handleBookmark}>
        {bookmark ? (
        < UimStar className="bookmarkFillIcon" />
      ) : (
        < UilStar className="bookmarkIcon" />
      )}
      </div>
      <div className="nav-show-route">
            <div className="nav-show-route-start">공덕</div>
             <UilArrowRight className="icon-arrow"/>
            <div className="nav-show-route-end">강남</div>
          </div>
        
          </div>
      </div>
      <div className="top2">
        <div className="top-content-1">
          <div className="top-content-1-1">
            <div className="top-content-1-right">
              <div className="top-content-1-right-1">탑승시간</div>
              <div className="top-content-1-right-2">44분</div>
            </div>
            <div className="top-content-1-left">
              <div className="top-content-1-left-1">환승</div>
              <div className="top-content-1-left-2">1회</div>
            </div>
          </div>
        </div>
        <div className="top-content-2">환승시간 미포함</div>
      </div>
      <div className="content2">
        <div className="content2-1">
        <div className="conten2-left">
        <UimCircle className="dot"></UimCircle>
          <div className="content2-left-font">
          <div className="content2-left-font-1">공덕</div>
          <div className="content2-left-font-2">5호선</div>
        </div>
        <div className="conten2-right">
          <div className="content2-right-card">
            <div className="content2-right-card-in">
              <div className="content2-right-card-in-l">
                <div className="content2-right-card-in-l-1">6개 역 이동</div>
                <div className="content2-right-card-in-l-2">애오개 방향</div>
              </div>
              <div className="content2-right-card-in-r"></div>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      
      </>
    
  )
};

export default RoutePage;