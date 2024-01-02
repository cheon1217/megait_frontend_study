import * as colors from "../styles/colors";

import React, { memo } from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`
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
`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            <div class="top-area">
            {/*  알림 코너 영역 */}
            <div class="inner">
                <h1 class="shp-logo">
                    <a href="/main">
                        <img src="" alt="" />
                    </a>
                </h1>
                <div class="aside">
                        <div class="shop">
                            <a href="#">
                                <img src="#" alt="ShoppingMall" />
                            </a>
                            <a href="#">
                                <img src="#" alt="BEAKER" />
                            </a>
                            <a href="#">
                                <img src="#" alt="ANOTHER#" />
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
            <div className="second-area">
                
            </div>
        </HeaderContainer>
    )
});

Header.defaultProps = {};

export default Header;