import React, { memo } from "react";

import officeImage from "@/images/office.png";
import styled from "styled-components";

const FooterContainer = styled.div`
overflow: hidden;
width: 100%;
border-top: 1px solid #f2f2f2;
margin: 0 auto;
padding-top: 26px;

// 1번째
.footer-top {
    max-width: 1400px;
    min-width: 1200px;
    margin: 0 auto;
    
    &::after {
        content: "";
        display: block;
        clear: both;
        float: none;
    }

    .area-devided {
        float: left;
        width: calc(100% / 3);
        margin-bottom: 50px;
    }
    
    .footer-subtitle {
        color: #000000;
        font-weight: bolder;
        font-size: 14px;
        margin: 18px 0 14px;
    }

    .social-list {
        display: flex;
        float: left;
        
        a {
            color: #000000;
            display: block;
            font-size: 20px;
            margin: 0 10px 0 0;

            &:hover {
                color: #61616177;
            }
        }
    }

    p {
        font-size: 12px;
        margin-bottom: 10px;
        color: #999999;
        margin: 0 0 12px;

        a {
            text-decoration: underline;
            
            &:hover {
                color: #000000;
                font-weight: bold;
            }
        }

        span {
            text-decoration: underline;
        }
    }

    .address {
        color: #c8c8c8;
        font-weight: lighter;
        font-size: 12px;
        margin: 19px 0px 0px;
    }

    a {
        color: #999999;
        text-decoration-line: none;
        cursor: pointer;
    }

    
}

// 2번째
.footer-bottom {
    border-top: 1px solid #f2f2f2;

    .bottomwrap {
        width: 1400px;
        min-width: 1200px;
        margin: 0 auto;
        height: 100px;

        .navbtn {
            float: left;
            
            ul {
                overflow: hidden;
                line-height: 100px;

                li {
                    display: inline-block;
                    padding: 0 20px;

                    a {
                    text-decoration-line: none;
                    color: #000000;
                    font-weight: bold;
                    font-size: 15px;
                    }
                }
            }
        }
        
        .authbtn {
            float: right;

            ul {
                overflow: hidden;
                line-height: 100px;

                li {
                    display: inline-block;
                    padding: 0 20px;

                    a {
                    text-decoration-line: none;
                    color: #444444;
                    font-weight: bold;
                    font-size: 13px;
                    }
                }
            }
        }
    }

}
`;

const Footer = memo(() => {
    return (
        <FooterContainer>
            <div className="footer-top">
                <div className="area-devided">
                    <div>
                        <p className="footer-subtitle">Delivery</p>
                        <p>교환/반품주소지 :</p>
                        <p>서울시 잠실본동 309-4번지 302호</p>
                    </div>
                    <div>
                        <p className="footer-subtitle">Customer Service</p>
                        <p>상담 서비스</p>
                        <p>전화번호 : 02-123-4567</p>
                        <p style={{marginTop: "15px"}}>상담 가능 시간</p>
                        <p>월~금 : am 11 ~ pm 5 &nbsp;&nbsp;&nbsp; 점심시간 : pm 12 ~ 1</p>
                        <p>(토/일/공휴일 휴무)</p>
                    </div>
                </div>
                <div className="area-devided">
                    <div>
                        <p className="footer-subtitle">Notice+</p>
                        <p><a href="#">- 공휴일 배송공지</a></p>
                        <p><a href="#">- 택배비 인상</a></p>
                        <p><a href="#">- 재입고 시기 재공지</a></p>
                    </div>
                    <div>
                        <p className="footer-subtitle">About MySite</p>
                        <p>쇼핑몰 주식회사</p>
                        <p>대표 : 박재천 | 전화 : 010-3113-0193 | 이메일 : firendly1217@naver.com</p>
                        <p>주소 : 서울시 잠실본동 309-4 우리집</p>
                        <p>통신판매업 신고 : 2023-서울잠실-2024</p>
                        <p>사업자등록번호 : 199-91-21739
                            <a href="#">[사업자정보확인]</a>
                        </p>
                        <p>개인정보보호책임자 : 박재천</p>
                        <p>제휴,협찬,유통 문의 : 
                            <span>firendly1217@naver.com</span></p>
                    </div>
                    <div className="address" style={{color: "#c8c8c8" ,marginTop: "19px"}}>
                        Copyright (c) SHOPPINGMALLS.ALL RIGHTS RESERVED
                    </div>
                </div>
                <div className="area-devided">
                    <div>
                        <p className="footer-subtitle">ONLY SHOPPINGMALLS</p>
                        <p>◎ 다양한 배송 시스템</p>
                        <p>◎ 스마트한 사이트 - 스마트서치,스마트렌즈</p>
                        <p>◎ 다양한 물류서비스 - 스팀케어부터 클린커버까지</p>
                    </div>
                    <div style={{margin: "15px 0"}}>
                        <a href="#" style={{cursor: "default"}}>
                            <img src={officeImage.src} style={{width: "40%", borderRadius: "20px"}} />
                        </a>
                    </div>
                    <div>
                        <p className="footer-subtitle">SOCIAL</p>
                        <ul className="social-list">
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-square-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-square-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>    
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-square-snapchat"></i>
                                </a>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottomwrap">
                    <div className="navbtn">
                        <ul>
                            <li>
                                <a href="#">회사소개</a>
                            </li>
                            <li>
                                <a href="#">이용안내</a>
                            </li>
                            <li>
                                <a href="#">이용약관</a>
                            </li>
                            <li>
                                <a href="#">개인정보처리방침</a>
                            </li>
                            <li>
                                <a href="#">멤버십</a>
                            </li>
                        </ul>
                    </div>
                    <div className="authbtn">
                        <ul>
                            <li>
                                <a href="#">고객센터</a>
                            </li>
                            <li>
                                <a href="#">공지사항</a>
                            </li>
                            <li>
                                <a href="#">매장찾기</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
});

Footer.defaultProps = {};

export default Footer;