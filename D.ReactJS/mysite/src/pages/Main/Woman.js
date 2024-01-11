import ErrorView from "../../components/ErrorView.js";
import React from "react";
import styled from "styled-components";
import w1 from "../../assets/women1.jpg";

const WomanContainer = styled.ul`

`;

const Woman = () => {
  return (
      
      <WomanContainer>
        {error ? (
            <ErrorView error={error}/>
        ) : (
            data && (
                <li className="good-item">
                    <a href="#">
                        <div className="good-rank"><span className="order">1</span></div>
                        <div className="good-img"><img src={w1} /></div>
                    </a>
                </li>
            )
        )}
    </WomanContainer>
  );
}

export default Woman;