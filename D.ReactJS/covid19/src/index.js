import App from './App';
import { BrowserRouter } from "react-router-dom";
import Meta from './Meta';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Meta />
            <App />
        </BrowserRouter>
    </Provider>
);