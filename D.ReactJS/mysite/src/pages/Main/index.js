import React, { memo } from "react";

import styled from "styled-components";

const IndexContainer = styled.div`

`;

const Index = memo(() => {
    return (
        <IndexContainer>
            <h1>Main</h1>
        </IndexContainer>
    )
});

Index.defaultProps = {};

export default Index;