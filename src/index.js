import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
