/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app.js';
import store from './store/';


function Main (){
  <Provider store={store}>
    <App />
  </Provider>;
}

ReactDOM.render(<Main />, document.getElementById('root'));