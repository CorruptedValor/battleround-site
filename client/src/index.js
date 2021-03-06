
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

import App from './components/App';
import reducers from './reducers';

// import axios from 'axios';
// window.axios = axios;


const store = createStore(reducers, applyMiddleware( promise()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));