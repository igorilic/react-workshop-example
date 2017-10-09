import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
