import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import './app.global.css';
import App from './containers/App';
import VideoPlayer from './containers/VideoPlayer';
import SettingsPage from './containers/SettingsPage';

const store = configureStore({
  player: {},
  settings: {}
});
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={VideoPlayer}/>
        <Route path="settings" component={SettingsPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
