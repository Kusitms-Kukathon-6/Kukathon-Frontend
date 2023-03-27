import { useState, Component } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../components/Modal/recoil";
import styled from "styled-components";
import { UilArrowUpRight, UilTimes } from "@iconscout/react-unicons";
import BadIcon from "../assets/img/badicon.svg";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  /*스크롤이 되도 모달창이 고정 되도록 position:fixed*/
  position: fixed;
  left: 0;
  bottom: 0;
  /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위해 flex설정*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div.attrs(() => ({
  role: "dialog",
}))`
  background-color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 352px;
  height: 520px;
  border-radius: 1rem;
  position: relative;
  z-index: 9999;
  .closebtn-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-top: 20px;
    color: #555555;
  }
  .top-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 8px 16px;
    gap: 8px;
    background: #e8ebfd;
    border-radius: 8px;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    /* identical to box height, or 147% */

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    /* grey-90 */

    color: #2a2a2a;
  }
  .detail-info-container {
    display: flex;
    justify-content: center;
    height: 362px;
  }
  .facility {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    /* identical to box height, or 140% */

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    margin-bottom: 8px;

    /* grey-90 */

    color: #2a2a2a;
  }
  .location-info-container {
    display: flex;
    justify-content: center;
  }
  .detail-info {
    padding: 14px;
  }
  .left {
    border-right: 1px dashed #949494;
  }
  .location-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 144px;
    height: 100px;
    background: #f5f5f5;
    border-radius: 12px;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    align-items: center;
    letter-spacing: -0.03em;
    color: #3f3f3f;
  }
  .nope {
    display: flex;
    justify-content: center;
    width: 144px;
    height: 100px;
    background: #ffdfdf;
    color: #ff334b;
    border-radius: 12px;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    align-items: center;
    letter-spacing: -0.03em;
  }
  .empty-box {
    height: 91px;
  }
  .gate {
    position: relative;
    left: 120px;
    top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 35px;
    background-color: #e8ebfd;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: -0.03em;
    color: #2a2a2a;
  }
`;
const data = {
  stationName: "동대문역사문화",
  operationInfoDetailList: [
    {
      use_YN: "사용가능",
      faci_NM: "승강기)엘리베이터 내부#1",
      stup_LCTN: "B2-B1",
      gubun: "EV",
      location: "외선 8-3",
    },
    {
      use_YN: "사용가능",
      faci_NM: "승강기)엘리베이터 내부#2",
      stup_LCTN: "B2-B1",
      gubun: "EV",
      location: "내선 3-2",
    },
    {
      use_YN: "사용가능",
      faci_NM: "승강기)엘리베이터 외부#1",
      stup_LCTN: "B1-1F",
      gubun: "EV",
      location: "1번 출구측",
    },
    {
      use_YN: "사용가능",
      faci_NM: "승강기)엘리베이터 내부#1",
      stup_LCTN: "B3-B1",
      gubun: "EV",
      location: "승강장",
    },
    {
      use_YN: "사용가능",
      faci_NM: "승강기)엘리베이터 외부#1",
      stup_LCTN: "B1-F1",
      gubun: "EV",
      location: "4번 출구측",
    },
  ],
  outElv: ["1번 출구측", "4번 출구측"],
  inElv: ["외선 8-3", "내선 3-2", "승강장"],
  outWh: [],
  inWh: [],
  availabe: true,
};

const Facility = ({ loc }) => {
  if (loc.length !== 0) {
    return (
      <div className="location-info">
        {loc.map((value) => {
          return <div className="loc">{value}</div>;
        })}
      </div>
    );
  } else {
    return (
      <div className="nope">
        <img src={BadIcon} alt="" />
        <div>이용 불가능</div>
      </div>
    );
  }
};

export const Modal = ({ api, openModalHandler, isOpen }) => {
  console.log(api);

  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop>
            <ModalView>
              <div className="closebtn-container">
                <UilTimes onClick={openModalHandler} />
              </div>
              <div className="top-info-container">
                <div className="top-info">{data.stationName}</div>
              </div>
              <div className="detail-info-container">
                <div className="detail-info left">
                  <div className="facility">엘레베이터</div>
                  <div className="location-info-container">
                    <Facility loc={data.inElv} />
                  </div>
                  <div className="empty-box">
                    <div className="gate">개찰구</div>
                  </div>
                  <Facility loc={data.outElv} />
                </div>

                <div className="detail-info right">
                  <div className="facility">휠체어 리프트</div>
                  <div className="location-info-container">
                    <Facility loc={data.inWh} />
                  </div>
                  <div className="empty-box"></div>
                  <Facility loc={data.outWh} />
                </div>
              </div>
              <div className="top-info-container">
                <div className="top-info">{data.stationName}</div>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
export default Modal;
