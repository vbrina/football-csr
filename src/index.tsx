import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { App } from './App';

import './index.less';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Suspense fallback={null}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Suspense>,
  document.getElementById('root')
);
