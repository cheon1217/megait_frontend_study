import React, { memo } from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`

`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            <div className="first-area">
                <div className="inner">
                    
                </div>
            </div>
            <div className="second-area">
                
            </div>
        </HeaderContainer>
    )
});

Header.defaultProps = {};

export default Header;