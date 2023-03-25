import { useState, Component } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../components/Modal/recoil';
import styled from 'styled-components';
import { UilArrowUpRight } from '@iconscout/react-unicons'

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 20px;
    /*스크롤 될 만큼의 크기를 위해 height설정*/
    /*모달창 x버튼의 부모를 전체 화면으로 주기 위해 상위 요소 relative처리*/
    position: relative;
    z-index: 9999;
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

export const ModalBtn = styled.button`
    background-color: white;
    text-decoration: none;
    border: none;
    color: #777777;
    border-radius: 30px;
    cursor: pointer;
    height: 18px;
    font-size: 12px;
    
`;

export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog'
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
    > .close-btn {
        // X 버튼을 화면 정중앙으로 정렬
        position: absolute;
        // 중앙에서 위로 10px 이동
        top: 10px;
        cursor: pointer;
        margin-left: 300px;
        width: 24px;
        height: 24px;
    }
    .content3{
        margin-left: 16px;
        height: 182px;
        width: 320px;
        background-color: beige;
        margin-top: 43px;
        
    }
    .content-top{
        height: 28px;
        width: 104px;
        background-color: #7F40D8;
        border-radius: 8px;
        margin-left: 110px;

    }
    .content-bottom{
        height: 140px;
        width: 320px;
        
    }
    .content-bottom-top{
        width: 208px;
        height: 22px;
        
        margin-top: 12px;
        justify-content: space-between;
        display: flex;
        margin-left: 56px;
        
    }
    .content-bottom-top-1{
        height: 22px;
        width : 64px;
        
        font-size: 11px;
    }
    .content-bottom-top-2{
        height: 22px;
        width : 66px;
        
        font-size: 11px;
    }
    .content-bottom-bottom{
        width: 300px;
        height: 100px;
        
        justify-content: space-between;
        display: flex;
        margin-top: 5px;
        margin-left: 10px;
    }
    .content-bottom-left{
        width: 144px;
        height: 90px;
        
        background-color: #F5F5F5;
        border-radius: 12px;
    }
    .content-bottom-right{
        width: 144px;
        height: 90px;
        
        background-color: #FFDFDF;
        border-radius: 12px;
    }
    .content4{
        margin-left: 16px;
        height: 182px;
        width: 320px;
        background-color: beige;
        margin-top: 20px;
    }
    .content-top1{
        height: 28px;
        width: 104px;
        background-color: #7F40D8;
        border-radius: 8px;
        margin-left: 110px;
        
    }
    .content-bottom1{
        height: 140px;
        width: 320px;
        
    }
    .content-bottom-top1{
        width: 208px;
        height: 22px;
        
        margin-top: 12px;
        justify-content: space-between;
        display: flex;
        margin-left: 56px;
        
    }
    .content-bottom-top-11{
        height: 22px;
        width : 64px;
        
        font-size: 11px;
    }
    .content-bottom-top-21{
        height: 22px;
        width : 66px;
        
        font-size: 11px;
    }
    .content-bottom-bottom1{
        width: 300px;
        height: 100px;
        
        justify-content: space-between;
        display: flex;
        margin-top: 5px;
        margin-left: 10px;
    }
    .content-bottom-left1{
        width: 144px;
        height: 90px;
        
        background-color: #F5F5F5;
        border-radius: 12px;
    }
    .content-bottom-right1{
        width: 144px;
        height: 90px;
        
        background-color: #FFDFDF;
        border-radius: 12px;
    }
    .content5{
        height: 28px;
        width: 104px;
        background-color: #60B157;
        border-radius: 8px;
        margin-left: 123px;
        margin-top: 30px;
    }
    .content-top,.content5,.content-top1{
        font-size: 13px;
        font-weight:bold;
        text-align: center;
        justify-content: center;
    }
    .content-top,.content5{
        color: white;
    }
    .content-bottom-left,.content-bottom-right,.content-bottom-left1,.content-bottom-right1{
        font-size: 10px;
        text-align: center;
        justify-content: center;
    }
    .content-bottom-right,.content-bottom-right1{
        color: red;
    }
    
    
`;


export const Modal = () => {
    const [modal, setModal] = useRecoilState(modalState);

    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };
    const buttonClick = () => {
        setModal(true);
    };

    return (
        <>
            <ModalContainer> 
            <ModalBtn onClick={openModalHandler}>
            {isOpen ? 'Opened!' : '보기'}<UilArrowUpRight size="14px"/></ModalBtn>
            {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalView>
                            <div className="close-btn">&times;</div>
                            <div className='content3'>
                                <div className='content-top'>동대문역사문화</div>
                                <div className='content-bottom'>
                                <div className='content-bottom-top'>
                                <div className='content-bottom-top-1'>엘리베이터</div>
                                <div className='content-bottom-top-2'>휠체어리프트</div></div>
                                <div className='content-bottom-bottom'>
                                <div className='content-bottom-left'> 
                                    1번 출구측,
                                    4번 출구측
                                </div>
                                <div className='content-bottom-right'>
                                    이용불가능
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className='content4'>
                                <div className='content-top1'>개찰구</div>
                                <div className='content-bottom1'>
                                <div className='content-bottom-top1'>
                                <div className='content-bottom-top-11'>엘리베이터</div>
                                <div className='content-bottom-top-21'>휠체어리프트</div></div>
                                <div className='content-bottom-bottom1'>
                                <div className='content-bottom-left1'>
                                    외선 8-3,
                                    내선 3-2,
                                    승강장
                        
                                </div>
                                <div className='content-bottom-right1'>
                                    이용불가능
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className='content5'>동대문역사문화</div>
                            
                        </ModalView>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>
        </>
    )
}
export default Modal;