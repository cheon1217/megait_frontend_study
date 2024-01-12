import React, { memo } from "react";

import styled from "styled-components";
import w1 from "../../assets/woman1.jpg";

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

    .good-list {
      margin-top: 0;
      display: flex;
      flex-wrap: wrap;
      margin: 30px -8px 0 -8px;

      .good-item {
        flex-basis: 25%;
        width: 25%;
        max-width: 25%;
        position: relative;
        display: flex;
        flex-direction: column;
        flex: none;
        min-width: 0;
        margin-bottom: 40px;
        padding: 0 80px;
        box-sizing: border-box;

        a {
          flex: auto;
          text-decoration: none;
        }

        .good-rank {
            .order {
                font-size: 15px;
                line-height: 21px;
                color: #111111;
                font-weight: 700;
            }
        }

        .good-img {
            &::before {
              position: absolute;
              left: 0;
              top: 0;
              z-index: 10;
              width: 100%;
              height: 100%;
              content: '';
              background-color: rgba(0,0,0,.03);
            }

            position: relative;
            padding-top: calc(100% * 450/338);

            img {
              position: absolute;
              top: 0;
              height: 100%;
            }
        }
      }
    }
`;

const Rank = memo(() => {
  

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
                    <div className="good-info">
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
})

export default Rank;