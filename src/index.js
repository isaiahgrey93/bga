import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App title={'Givelify Browser Giving App'} />,
  document.getElementById('root')
);

registerServiceWorker();
