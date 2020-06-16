import React from 'react';
import ReactDOM from 'react-dom';
import getMockData from './server/dataMock';
import { Provider } from 'react-redux';
import store from './store';

import App from './pages/App';
import "lib-flexible"
import './styles/index.scss';


getMockData()



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
