import React, { memo } from "react";

import styled from "styled-components";

const ContactContainer = styled.div`
    background-color: #06f3;
`;

const Contact = memo(() => {
    return (
        <ContactContainer>
            <h1>Contact</h1>
        </ContactContainer>
    );
});

Contact.defaultProps = {};

export default Contact;