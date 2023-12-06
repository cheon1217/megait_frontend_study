import React, { memo } from "react";

import styled from "styled-components";

const AboutMeContainer = styled.div`
    /* background-color: #f0f2; */
    text-align: center;

    h2 {
        font-size: 32px;
        margin-bottom: 32px;
        font-weight: 400;
    }

    img {
        max-width: 100%;
        height: auto;
        margin-bottom: 26px;
    }

    h3 {
        font-size: 26px;
        margin-bottom: 16px;
        font-weight: 400;
    }

    h4 {
        font-size: 18px;
        margin-bottom: 16px;
        font-weight: 400;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
        margin-bottom: 30px;
        padding: 0 25px;
    }
`;

const AboutMe = memo(({ data }) => {
    return (
        <AboutMeContainer>
            <h2>{data.title}</h2>
            <img src={data.img} />
            <h3>{data.msg1}</h3>
            <h4>{data.msg2}</h4>
            <p>{data.msg3}</p>
        </AboutMeContainer>
    );
});

AboutMe.defaultProps = {
    data: {
        title: null,
        img: null,
        msg1: null,
        msg2: null,
        msg3: null, 
    },
};

export default AboutMe;