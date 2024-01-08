import React, { memo } from "react";

import saleInfo from "../../assets/saleProduct.png";
import styled from "styled-components";

const IndexContainer = styled.div`
    
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

            
        </IndexContainer>
    )
});

Index.defaultProps = {};

export default Index;