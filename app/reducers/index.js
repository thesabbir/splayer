/**
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import player from './playerReducer';
import settings from './settingsReducer';

const rootReducer = combineReducers({
  player,
  settings,
  routing
});

export default rootReducer;
