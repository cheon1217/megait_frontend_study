import React, { memo } from "react";
import * as colors from "../styles/colors";
import styled from "styled-components";

const FooterContainer = styled.div`
p {
    font-size: 12px;
}

.footer-top {
    .footer-subtitle {
        font-size: 14px;
        font-weight: bolder;
        margin: 18px 0 11px 0;
        color: #000;

        div {
            float: left;
            width: calc(100% / 3);
            margin-bottom: 50px;

        }
    }
}

.footer-bottom {
        background-color: ${colors.LIGHT_GRAY};
        border-top: 1px solid #dddddd;

        .menu {
            margin: auto;
            display: flex;
    
            li {
                text-align: center;
                cursor: pointer;
    
                a {
                    display: block;
                    font-size: 14px;
                    padding: 20px;
                    text-decoration-line: none;
                    color: ${colors.BLACK};
                }
                
                &:nth-child(6) {
                    margin-left: auto;
                }
            }
        }
    }
`;

const Footer = memo(() => {
    return (
        <FooterContainer>
            <div className="footer-top">
                <div>
                    <div>
                        <p className="footer-subtitle">Delivery</p>
                        <p>교환/반품주소지 :</p>
                        <p>서울시 잠실본동 309-4번지 302호</p>
                    </div>
                    <div>
                        <p className="footer-subtitle">Customer Service</p>
                        <p>전화보다 빠른 상담</p>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <ul className="menu">
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
        </FooterContainer>
    )
});

Footer.defaultProps = {};

export default Footer;