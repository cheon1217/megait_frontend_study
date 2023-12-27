/**
 * 전체 레이아웃 구성
 */

/** 패키지 참조 */
import React, { memo } from "react";
// 라우팅 처리
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
// 모든 페이지 공용 컴포넌트
import Header from "./components/Header";
// 페이지 -> import 대상 경로가 폴더 명일 경우 해당 폴더의 index.js를 가져온다.
import Main from "./pages/Main";
// styled 컴포넌트
import styled from "styled-components";

/** 이 컴포넌트에 대한 스타일 정의  */
const AppContainer = styled.div`
`;

/** 컴포넌트 구현부 */
const App = memo(() => {
    return (
        <AppContainer>
            <Header />
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
                <Route path="/index.html" element={<Main />} />
            </Routes>
            <Footer />
        </AppContainer>     
    );
});

export default App;
