import React from 'react';

import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./state-managment/redux-store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
