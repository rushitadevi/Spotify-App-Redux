import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import * as serviceWorker from './serviceWorker';
import MainPage from './Components/MainPage';
import Home from './Components/Home';
import {Provider} from "react-redux"
import configureStore from "./store"

ReactDOM.render(<Provider store={configureStore()}><Home />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
