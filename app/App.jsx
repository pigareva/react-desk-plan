import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfficeRoom from './components/OfficeRoom';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store';

import '../app/style/style.scss';

render(
  <ErrorBoundary>
    <Provider store={store}>
      <OfficeRoom />
    </Provider>
  </ErrorBoundary>
  , document.getElementById('root'),
);
