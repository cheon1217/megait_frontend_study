import React, { memo } from "react";

import styled from "styled-components";
import w1 from "../../assets/women1.jpg";
import Woman from "./Woman";

const RankContainer = styled.div`
    h2 {
      display: flex;
      justify-content: center;
      height: 38px;
      margin-bottom: 30px;
      font-size: 32px;
      line-height: 38px;
      color: #111111;
      font-weight: 700;
      text-align: center;
    }

    .tab-navs {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        position: relative;
        margin: 0 12px;
        font-size: 20px;
        line-height: 26px;
        font-weight: 700;
        
        a {
          color: #C9C9C9;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: #111111;
            text-decoration: underline;
          }
        }
      }
    }
`;

const Rank = () => {
  return (
        <RankContainer>
            <h2>랭킹</h2>
            <ul className="tab-navs">
              <li><a href="#">여성</a></li>
              <li><a href="#">남성</a></li>
              <li><a href="#">액세서리</a></li>
            </ul>

            <ul className="good-list">
              <li className="good-item">
                <a href="#">
                    <div className="good-rank"><span className="order">1</span></div>
                    <div className="good-img"><img src={w1} /></div>
                    <div className="go0d-info">
                        <span className="brand">
                             8 seconds</span>
                        <span className="name">
                             하이넥 푸퍼 패딩 - 베이지</span>
                        <span className="price">
                            <span className="sold-out">품절</span>
                        </span>
                    </div>
                </a>
              </li>
            </ul>
        </RankContainer>
  );
}

export default Rank;