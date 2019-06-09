import React from 'react';
import ReactDOM from 'react-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import App from './App';
import SignUp from './SignUp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
    {/* <SignUp /> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
