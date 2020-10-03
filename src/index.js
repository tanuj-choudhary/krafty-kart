// Third party imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Project imports
import store from './utils/store';
import App from './components/app/App';

import './components/app/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
