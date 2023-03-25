import "./bookmark.css";
import React, { useState, useEffect } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilStar } from "@iconscout/react-unicons"; //안채워진
import { UimStar } from "@iconscout/react-unicons-monochrome"; //채워진

const Bookmark = () => {
  const handleBookmark = () => {
    //back api
  };

  return (
    <div className="bookmark-container">
      <div className="bookmark-li">
        <div className="bookmark-show-button" onClick={handleBookmark}>
          <UimStar className="bookmarkFillIcon" />
        </div>
        <div className="start-end">
          <div className="bookmark-show-route-start">강남역</div>
          <div className="icon-arrow">
            <UilArrowRight />
          </div>
          <div className="bookmark-show-route-end">공덕역</div>
        </div>
      </div>
      <div className="bookmark-li">
        <div className="bookmark-show-button" onClick={handleBookmark}>
          <UimStar className="bookmarkFillIcon" />
        </div>
        <div className="start-end">
          <div className="bookmark-show-route-start">강남역</div>
          <div className="icon-arrow">
            <UilArrowRight />
          </div>
          <div className="bookmark-show-route-end">공덕역</div>
        </div>
      </div>
      <div className="bookmark-li">
        <div className="bookmark-show-button" onClick={handleBookmark}>
          <UimStar className="bookmarkFillIcon" />
        </div>
        <div className="start-end">
          <div className="bookmark-show-route-start">강남역</div>
          <div className="icon-arrow">
            <UilArrowRight />
          </div>
          <div className="bookmark-show-route-end">공덕역</div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
