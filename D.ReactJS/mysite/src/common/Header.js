import * as colors from "../styles/colors";

import React, { memo } from "react";

import banner from "../assets/banner.png";
import styled from "styled-components";

const HeaderContainer = styled.div`
    /* first banner */
    position: absolute;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%;

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

            a {
                flex: none;
                margin-right: 24px;
            }

            &::after {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                content: "";
                width: 1px;
                height: 12px;
                background: #555;
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
            }
        }

        .brand-title {
            flex: none;
            font-size: 24px;
            line-height: 30px;
            color: #111111;
            font-weight: 700;

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
`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            {/* first banner */}
            <div class="top-area">
            {/*  알림 코너 영역 */}
            <div class="inner">
                <h1 class="shp-logo">
                    <a href="#">
                        <img src="" alt="MYSITE" />
                    </a>
                </h1>
                <div class="aside">
                        <div class="shop">
                            <a href="#">
                                <img src="#" alt="ShoppingMall" />
                            </a>
                            <a href="#">
                                <img src="#" alt="SAMSUNG" />
                            </a>
                            <a href="#">
                                <img src="#" alt="APPLE" />
                            </a>
                        </div>
                        <div class="util">
                            <ul>
                                <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            </ul>
                        </div>
                        <div class="nav">
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
                                <img src="" alt="8 seconds" />
                            </a>
                        </h2>
                        <a href="#"><i class="fa-regular fa-heart"><span>9999+</span></i></a>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
});

Header.defaultProps = {};

export default Header;