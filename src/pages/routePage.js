import "./routePage.css";
import React, { useState, useEffect } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilStar } from "@iconscout/react-unicons"; //안채워진
import { UimStar } from "@iconscout/react-unicons-monochrome"; //채워진
import { UimCircle } from "@iconscout/react-unicons-monochrome";

const routeDate = {
  result: {
    globalStartName: "홍대입구",
    globalEndName: "수유(강북구청)",
    globalTravelTime: 36,
    globalDistance: 17.7,
    globalStationCount: 17,
    fare: 1450,
    cashFare: 1550,
    driveInfoSet: {
      driveInfo: [
        {
          laneID: "2",
          laneName: "2호선",
          startName: "홍대입구",
          stationCount: 9,
          wayCode: 2,
          wayName: "내선순환",
        },
        {
          laneID: "4",
          laneName: "4호선",
          startName: "동대문역사문화공원",
          stationCount: 8,
          wayCode: 1,
          wayName: "진접",
        },
      ],
    },
    exChangeInfoSet: {
      exChangeInfo: [
        {
          laneName: "2호선",
          startName: "홍대입구",
          exName: "동대문역사문화공원",
          exSID: 422,
          fastTrain: 9,
          fastDoor: 2,
          exWalkTime: 55,
        },
      ],
    },
    stationSet: {
      stations: [
        {
          startID: 239,
          startName: "홍대입구",
          endSID: 240,
          endName: "신촌",
          travelTime: 2,
        },
        {
          startID: 240,
          startName: "신촌",
          endSID: 241,
          endName: "이대",
          travelTime: 4,
        },
        {
          startID: 241,
          startName: "이대",
          endSID: 242,
          endName: "아현",
          travelTime: 6,
        },
        {
          startID: 242,
          startName: "아현",
          endSID: 243,
          endName: "충정로",
          travelTime: 8,
        },
        {
          startID: 243,
          startName: "충정로",
          endSID: 201,
          endName: "시청",
          travelTime: 11,
        },
        {
          startID: 201,
          startName: "시청",
          endSID: 202,
          endName: "을지로입구",
          travelTime: 13,
        },
        {
          startID: 202,
          startName: "을지로입구",
          endSID: 203,
          endName: "을지로3가",
          travelTime: 15,
        },
        {
          startID: 203,
          startName: "을지로3가",
          endSID: 204,
          endName: "을지로4가",
          travelTime: 16,
        },
        {
          startID: 204,
          startName: "을지로4가",
          endSID: 205,
          endName: "동대문역사문화공원",
          travelTime: 18,
        },
        {
          startID: 422,
          startName: "동대문역사문화공원",
          endSID: 421,
          endName: "동대문",
          travelTime: 21,
        },
        {
          startID: 421,
          startName: "동대문",
          endSID: 420,
          endName: "혜화",
          travelTime: 23,
        },
        {
          startID: 420,
          startName: "혜화",
          endSID: 419,
          endName: "한성대입구",
          travelTime: 25,
        },
        {
          startID: 419,
          startName: "한성대입구",
          endSID: 418,
          endName: "성신여대입구",
          travelTime: 27,
        },
        {
          startID: 418,
          startName: "성신여대입구",
          endSID: 417,
          endName: "길음",
          travelTime: 30,
        },
        {
          startID: 417,
          startName: "길음",
          endSID: 416,
          endName: "미아사거리",
          travelTime: 32,
        },
        {
          startID: 416,
          startName: "미아사거리",
          endSID: 415,
          endName: "미아",
          travelTime: 34,
        },
        {
          startID: 415,
          startName: "미아",
          endSID: 414,
          endName: "수유(강북구청)",
          travelTime: 36,
        },
      ],
    },
  },
};

// console.log(
//   routeDate.result.driveInfoSet.driveInfo[0].startName,
//   routeDate.result.driveInfoSet.driveInfo[0].wayCode
// );

let exChangeID = 0;
let listLength = routeDate.result.stationSet.stations.length;
const totalTravelTime =
  routeDate.result.stationSet.stations[listLength - 1].travelTime; //총 소요시간
const exChangeTime = routeDate.result.exChangeInfoSet.exChangeInfo.length; //환승 횟수
for (let i = 0; i < listLength; i++) {
  if (
    routeDate.result.exChangeInfoSet.exChangeInfo[0].exName ==
    routeDate.result.stationSet.stations[i].startName
  ) {
    exChangeID = i;
    break;
  }
}
const firstTime = routeDate.result.stationSet.stations[exChangeID].travelTime; //첫번째 환승 소요시간
const lastTime =
  routeDate.result.stationSet.stations[listLength - 1].travelTime - firstTime; //두번쨰 환승 소요 시간

const firstStation = exChangeID; //첫번째 환승 역 개수
const lastStation = listLength - exChangeID; //두번째 역 환승 역 개수

const firstWay = routeDate.result.stationSet.stations[0].endName; //첫번째 환승역 방면
const lastWay = routeDate.result.stationSet.stations[exChangeID].endName; //두번째 환승역 방면

const stationList = [
  routeDate.result.stationSet.stations[0].startName,
  routeDate.result.stationSet.stations[exChangeID].startName,
  routeDate.result.stationSet.stations[exChangeID].startName,
  routeDate.result.stationSet.stations[listLength - 1].endName,
];

const stationInfoList = [
  { Station: firstStation, Way: firstWay, Time: firstTime },
  { Station: lastStation, Way: lastWay, Time: lastTime },
];
//역 리스트

const RoutePage = () => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="route-page-container">
      <div className="route-header">
        <div>
          <UimStar className="bookmarkFillIcon" />
        </div>
        <div>{stationList[0]}</div>
        <div>
          <UilArrowRight className="icon-arrow" />
        </div>
        <div>{stationList[stationList.length - 1]}</div>
      </div>
      <div className="total-info-container">
        <div className="total-info">
          <div className="travel-time">
            <div>
              <div className="time">
                <div className="time-title">탑승시간</div>
                <div className="time-num">{totalTravelTime}분</div>
              </div>
              <div className="no-time">환승시간 미포함</div>
            </div>
          </div>
          <div className="exchange-container">
            <div className="time-title">환승 </div>
            <div className="time-num">{exChangeTime}회</div>
          </div>
        </div>
      </div>
      <div>
        {stationInfoList.map((itm, idx) => {
          return (
            <div>
              <div>
                <div>{itm.Station}개 역 이동</div>
                <div>{itm.Way} 방향</div>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoutePage;
