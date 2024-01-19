import React, {memo} from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #d5d5d5;
    padding: 15px;
    margin-top: 30px;
    text-align: center;
`;

const Footer = memo(() => {
    return (
        <FooterContainer>
            <address>copyright&copy;megastudy</address>
        </FooterContainer>
    );
});

export default Footer;