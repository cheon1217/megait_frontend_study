import React, {memo} from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #d5d5d5;
    padding: 15px;
    margin-bottom: 30px;

    h1 {
        font-size: 24px;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #fff;
        font-weight: bold;
    }
`;

const Header = memo(() => {
    return (
        <HeaderContainer>
            <h1>Redux Demo</h1>

            <nav>
                <MenuLink href="/">Home</MenuLink>

                {/* "/src/pages/department/index.js" 혹은
                    "/src/pages/department.js"으로 연결된다. */}
                <MenuLink href="/department">Department</MenuLink>

                <MenuLink href="/news">News</MenuLink>
            </nav>
        </HeaderContainer>
    );
});

export default Header;