import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './Reducers/Countries';
import pollutionReducer from './Reducers/Pollution';

const rootReducer = combineReducers({
  countriesReducer,
  pollutionReducer,
  
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
