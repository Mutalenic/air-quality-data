import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { airPollutionReducer } from './Town/town';
import countriesReducer from './Country/countries';

const rootReducer = combineReducers({
  countriesReducer,
  airPollutionReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
