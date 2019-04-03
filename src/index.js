import React from 'react';
import ReactDOM from 'react-dom';
import AppHome from './app/App';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <AppHome />
    </HashRouter>,
    document.getElementById('root')
);
