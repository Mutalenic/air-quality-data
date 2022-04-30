import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import pollutionReducer from '../redux/Reducers/Pollution';
import countriesReducer from '../redux/Reducers/Countries';
import Pollutions from '../components/Home/Pollution';

const rootReducer = combineReducers({
  countriesReducer,
  pollutionReducer,

});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

afterEach(cleanup);

describe('Pollution list ', () => {
  test('Pollution list renders correctly', () => {
    const pollution = render(
      <Provider store={store}>
        <Router>
          <Pollutions />
        </Router>
      </Provider>,
    );
    expect(pollution).toMatchSnapshot();
  });
});
