import React, { memo } from "react";

import MenuLink from "./MenuLink";

const Header = memo(({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <nav>
                <MenuLink href="/">Home</MenuLink>
                <MenuLink href="/hello?num1=100&num2=200">Hello</MenuLink>
                <MenuLink href="/world?num1=300&num2=400">World</MenuLink>
                <MenuLink href="/about/introduce">소개글</MenuLink>
                {/* <MenuLink href="/portfolio/publish">퍼블리싱</MenuLink>
                <MenuLink href="/portfolio/frontend">프론트엔드</MenuLink>
                <MenuLink href="/portfolio/backend">백엔드</MenuLink> */}
                <MenuLink href="/portfolio">포트폴리오</MenuLink>
            </nav>
            <hr />
        </div>
    );
});

export default Header;