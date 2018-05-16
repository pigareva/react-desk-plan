import React from 'react';
import { render } from 'react-dom';
import OfficeRoom from './components/OfficeRoom';
import ErrorBoundary from './components/ErrorBoundary';

import '../app/style/style.scss';

render(<ErrorBoundary> <OfficeRoom /> </ErrorBoundary>, document.getElementById('root'));
