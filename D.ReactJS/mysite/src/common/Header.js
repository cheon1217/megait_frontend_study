import React, { memo } from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`

`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            <h1>Header</h1>
        </HeaderContainer>
    )
});

Header.defaultProps = {};

export default Header;