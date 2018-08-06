import 'babel-polyfill'; // eslint-disable import/first

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
