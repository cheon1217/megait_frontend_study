import React from "react";
import w1 from "../../assets/women1.jpg";
import styled from "styled-components";

const WomanContainer = styled.ul`

`;

const Woman = () => {
  return (
      <WomanContainer>
        <li className="good-item">
            <a href="#">
                <div className="good-rank"><span className="order">1</span></div>
                <div className="good-img"><img src={w1} /></div>
            </a>
        </li>
      </WomanContainer>
  );
}

export default Woman;