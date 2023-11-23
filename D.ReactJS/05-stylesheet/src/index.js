import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Meta from "./Meta";

/** reset.css 적용을 위한 import */
// import { Reset } from "styled-reset";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Meta/>
        {/* reset.css 적용하기 (여기서는 사용 안함) */}
        {/* <Reset /> */}
        <App />
    </BrowserRouter>
);
