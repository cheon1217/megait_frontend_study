import React, { memo } from "react";

import saleInfo from "../../assets/saleProduct.png";
import styled from "styled-components";
import Rank from "./Rank";

const IndexContainer = styled.div`
    img {
        object-fit: cover;
        /* position: absolute; */
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

const Index = memo(() => {
    return (
        <IndexContainer>
            <div className="slide-item">
                <a href="#">
                    <div className="brand-info"></div>
                    <img src={saleInfo} />
                </a>
            </div>

            <Rank />
        </IndexContainer>
    )
});

Index.defaultProps = {};

export default Index;