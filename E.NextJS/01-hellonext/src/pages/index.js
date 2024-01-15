// Next.js에서 페이지 이동 기능을 제공하는 컴포넌트
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
    color: blue;
`;

const index = () => {
    return (
        <div>
            <Title>index</Title>

            <Link href="hello">hello.js로 이동</Link>

            <Link href="world">world.js로 이동</Link>

            <Link href="about/introduce">introduce.js로 이동</Link>
        </div>
    );
};

export default index;