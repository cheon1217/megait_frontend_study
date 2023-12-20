import React, { memo } from "react";

import styled from "styled-components";

const FooterContainer = styled.div`

`;

const Footer = memo(() => {
    return (
        <FooterContainer>
            <ul className="menu">
                <li>
                    <a href="#">회사소개</a>
                </li>
                <li>
                    <a href="#">이용약관</a>
                </li>                
            </ul>
        </FooterContainer>
    )
});

Footer.defaultProps = {};

export default Footer;