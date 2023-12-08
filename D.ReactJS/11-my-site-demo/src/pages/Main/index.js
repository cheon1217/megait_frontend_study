import React, { memo } from "react";

import styled from "styled-components";

import Introduce from "./Introduce";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const IndexContainer = styled.div`
    /* background-color: #0f02; */
    // 상단영역의 높이보다 여유있게 여백을 줌
    // padding-top: 100px;
`;

const index = memo(() => {
    return (
        <IndexContainer>
            <Introduce />
            <Portfolio />
            <Contact />
        </IndexContainer>
    );
});

index.defaultProps = {};

export default index;