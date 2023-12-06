import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 라우팅 처리를 위한 컴포넌트
import { BrowserRouter } from "react-router-dom";

// 전역 스타일 정의
import GlobalStyles from './GlobalStyles';

// <head> 태그 내의 <meta>태그 정의 파일
import Meta from './Meta';

// 프로그램 구성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GlobalStyles />
        <Meta />
        <App />
    </BrowserRouter>
);
