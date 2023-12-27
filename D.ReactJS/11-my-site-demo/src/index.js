import App from './App';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Meta from "./Meta";
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <Meta />
        <App />
    </BrowserRouter>
);
