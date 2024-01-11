import * as colors from "../styles/colors";

import React, { memo, useCallback, useState } from "react";

import banner from "../assets/8seconds.png";
import logo from "../assets/logo-white.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
    /* first banner */
    /* position: absolute;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%; */

    .top-area {
        width: 100%;
        height: 40px;
        background-color: ${colors.BLACK};

        .inner {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .shp-logo {
            flex: none;
            margin-right: 26px;
        }

        .aside {
            margin-left: auto;
            padding-left: 280px;
        }

        .shop, .util {
            position: relative;
            margin-right: 24px;

            &:after {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                content: '';
                width: 1px;
                height: 12px;
                background: #555;
            }

            a {
                flex: none;
                margin-right: 24px;
            }
        }

        .nav {
            a:first-child {
                margin-left: 0;
            }

            a {
                flex: none;
                margin-left: 24px;
            }
        }
    }

    .inner {
        max-width: 1440px;
        min-width: 1280px;
        height: 100%;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;

        * {
            display: flex;
            align-items: center;
            font-size: 12px;
            line-height: 18px;
            color: #c9c9c9;
        }
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    /* second banner */
    .second-area {
        width: 100%;
        border-bottom: 1px solid #000;

        .second-wrap {
            height: 70px;
            background-color: #fff;

            .inner {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .icon {
                    margin-left: 8px;
                    margin-right: 20px;
                    padding-left: 10px;
                    
                    .fa-heart {
                        font-size: 15px;
                        line-height: 19px;
                        color: #767676;
                    }
                }

                .aside {
                    margin-left: auto;

                    i {
                        color: ${colors.BLACK};
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
            }
        }

        .brand-title {
            flex: none;
            font-size: 24px;
            line-height: 30px;
            color: #111111;
            font-weight: bold;

            a {
                display: flex;
                align-items: center;
                max-height: 40px;
                overflow: hidden;
            }

            img {
                max-height: 100%;
            }
        }

        
        
        
    }

    .category {
        display: flex;
        align-items: center;

        [class*="-nav"]>ul>li>a {
            height: 50px;
        }

        [class*="-nav"] > ul {
            display: flex;
            align-items: center;
            list-style: none;

            li {
                flex: none;

                a {
                    display: flex;
                    align-items: center;
                    padding: 0 8px;
                    font-size: 15px;
                    line-height: 21px;
                    color: #111111;
                }
            }
        }

        .dropdown-layer {
            display: none;
            position: absolute;
            left: 0;
            top: 45px;
            border: 1px solid #000;
            background-color: #fff;

            
            &.active {
                display: block;
                z-index: 10;
            }

            .nav-list {
                position: relative;
                height: 404px;
                padding: 24px 0 40px;
                box-sizing: border-box;

                ul {
                    display: flex;
                    flex-flow: column wrap;
                    width: 100%;
                    height: 100%;

                    li{
                        flex: none;
                        width: 160px;
                        margin-bottom: 12px;
                        padding: 0 20px;
                    }
                }
                
                .more {
                    position: absolute;
                    right: 20px;
                    bottom: 14px;
                    padding-right: 14px;
                    font-size: 12px;
                    line-height: 16px;
                    color: #969696;
                }
            }
        }

        .brand-nav {
            li {
                position: relative;
            }
        }
        
        .sub-nav {
            position: relative;
            margin-left: 12px;
            padding-left: 12px;

            &::after {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                content: '';
                width: 1px;
                height: 14px;
                background: #e5e5e5;
            }
        }
    }
    
`;

const Header = memo(() => {

    const onGnbMouseOver = useCallback((e) => {
        e.currentTarget.querySelector(".dropdown-layer").classList.add("active");
    }, []);

    const onGnbMouseOut = useCallback((e) => {
        e.currentTarget.querySelector(".dropdown-layer").classList.remove("active");
    }, []);

    return (
        <HeaderContainer>
            {/* first banner */}
            <div className="top-area">
            {/*  알림 코너 영역 */}
            <div className="inner">
                <h1 className="shp-logo">
                    <a href="#">
                        <img src={logo} />
                    </a>
                </h1>
                <div className="aside">
                        <div className="shop">
                            <a href="#">
                                ShoppingMall
                            </a>
                            <a href="#">
                                SamSung
                            </a>
                            <a href="#">
                                Apple
                            </a>
                        </div>
                        <div className="util">
                            <ul>
                                <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                                <li><a href="#"><i className="fa-regular fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                            </ul>
                        </div>
                        <div className="nav">
                            <a href="#">마이페이지</a>
                            <a href="#">로그인</a>
                            </div>
                        </div>
                </div>
            </div>

            {/* second banner */}
            <div className="second-area">
                <div className="second-wrap">
                    <div className="inner">
                        <h2 className="brand-title">
                            <a href="#" id="brandLogo">
                                <img src={banner} alt="8 seconds" />
                            </a>
                        </h2>
                        <a href="#" className="icon"><i className="fa-regular fa-heart"></i></a>
                        <div className="category">
                            <div className="brand-nav">
                                <ul className="gnb">
                                    <li onMouseOver={onGnbMouseOver} onMouseOut={onGnbMouseOut}>
                                        <a href="#" >여성</a>
                                        <div className="dropdown-layer">
                                            <div className="nav-list" style={{width: "400px"}}>
                                                <ul className="sub-menu">
                                                    <li><a href="#">신상품</a></li>
                                                    <li><a href="#">인기상품</a></li>
                                                    <li><a href="#">전체 상품</a></li>
                                                    <li><a href="#">아우터</a></li>
                                                    <li><a href="#">재킷/베스트</a></li>
                                                    <li><a href="#">니트</a></li>
                                                    <li><a href="#">티셔츠</a></li>
                                                    <li><a href="#">셔츠/블라우스</a></li>
                                                    <li><a href="#">원피스</a></li>
                                                    <li><a href="#">팬츠</a></li>
                                                    <li><a href="#">스커트</a></li>
                                                    <li><a href="#">라운지/언더웨어</a></li>
                                                    <li><a href="#">패션잡화</a></li>
                                                    <li><a href="#">쥬얼리/시계</a></li>
                                                    <li><a href="#">UNI8</a></li>
                                                    <li><a href="#">EDITION 8</a></li>
                                                    <li><a href="#">ESSENCORE</a></li>
                                                    <li><a href="#">Maison de eight</a></li>
                                                    <li><a href="#">🐼바오 패밀리</a></li>
                                                    <li><a href="#">품절 임박</a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </li>
                                    <li onMouseOver={onGnbMouseOver} onMouseOut={onGnbMouseOut}>
                                        <a href="#">남성</a>
                                        <div className="dropdown-layer">
	                                        <div className="nav-list" style={{width: "400px"}}>
                                                <ul>
                                                    <li><a href="#">신상품</a></li>
                                                    <li><a href="#">인기상품</a></li>
                                                    <li><a href="#">전체 상품</a></li>
                                                    <li><a href="#">아우터</a></li>
                                                    <li><a href="#">재킷/베스트</a></li>
                                                    <li><a href="#">니트</a></li>
                                                    <li><a href="#">티셔츠</a></li>
                                                    <li><a href="#">셔츠</a></li>
                                                    <li><a href="#">팬츠</a></li>
                                                    <li><a href="#">패션잡화</a></li>
                                                    <li><a href="#">매일슬랙스</a></li>
                                                    <li><a href="#">좋은건 하나더+</a></li>
                                                    <li><a href="#">남성 캡슐 컬렉션</a></li>
                                                    <li><a href="#">품절 임박</a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </li>
                                    <li onMouseOver={onGnbMouseOver} onMouseOut={onGnbMouseOut}>
                                        <a href="#">백&amp;슈즈</a>
                                        <div className="dropdown-layer">
                                            <div className="nav-list">
                                                <ul>
                                                    <li><a href="#">신상품</a></li>
                                                    <li><a href="#">인기상품</a></li>
                                                    <li><a href="#">전체 상품</a></li>
                                                    <li><a href="#">여성 가방</a></li>
                                                    <li><a href="#">여성 지갑</a></li>
                                                    <li><a href="#">여성 슈즈</a></li>
                                                    <li><a href="#">남성 가방</a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </li>
                                    <li onMouseOver={onGnbMouseOver} onMouseOut={onGnbMouseOut}>
                                        <a href="#">아울렛</a>
                                        <div className="dropdown-layer">
                                            <div className="nav-list">
                                                <ul>
                                                    <li><a href="#">전체 상품</a></li>
                                                    <li><a href="#">WOMEN</a></li>
                                                    <li><a href="#">MEN</a></li>
                                                    <li><a href="#">백＆슈즈</a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* ================================= */}
                            <div className="sub-nav">
                                <ul>
                                    <li><a href="#">신상품</a></li>
                                    <li><a href="#">인기상품</a></li>
                                </ul>
                            </div>
                            <div className="sub-nav">
                                <ul>
                                    <li onMouseOver={onGnbMouseOver} onMouseOut={onGnbMouseOut}>
                                        <a href="#">기획전</a>
                                        <div className="dropdown-layer">
                                            <div className="nav-list" style={{width: "400px"}}>
                                                <ul>
                                                    <li><a href="#">[8 seconds] SUPER SALE ACC</a></li>
                                                    <li><a href="#">[8 seconds] SUPER SALE</a></li>
                                                    <li><a href="#">[8 seconds] 겨울로 향하는 발걸음</a></li>
                                                    <li><a href="#">[8 seconds] 설렘 가득한 홀리데이</a></li>
                                                    <li><a href="#">[8 seconds] 무심한 멋의 그런지룩</a></li>
                                                    <li><a href="#">[8 seconds] 퀄리티에 충실한 프리미엄 ACC</a></li>
                                                    <li><a href="#">[8 seconds] 윈터 키워드 잡화점</a></li>
                                                    <li><a href="#">[8 seconds] 바오 패밀리의 옷장</a></li>
                                                    <li><a href="#">[8 seconds] 미니멀웨어 룩북</a></li>
                                                    <li><a href="#">[8 seconds] Vintage Film Roll</a></li>
                                                </ul>
                                                <a href="#" className="more">기획전 더보기</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="aside">
                            <div className="util">
                                    <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
});

Header.defaultProps = {};

export default Header;