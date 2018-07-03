import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

// TEMP
import './api';

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
