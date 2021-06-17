import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import MainPage from '../src/components/main-page/MainPage'
import './index.css';

ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);