// import { type } from '@testing-library/user-event/dist/type';

const api = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=9e828e2624199c7cbb9d9cde2d3b483c';

const ADD_TOWNS_REQUEST = 'air-quality-data/town/ADD_TOWNS_REQUEST';
const GET_TOWNS_DATA_SUCCESS = 'air-quality-data/town/GET_TOWNS_DATA_SUCCESS';
const GET_TOWNS_DATA_FAILED = 'air-quality-data/town/GET_TOWNS_DATA_FAILED';
const SET_COUNTRY_NAME = 'air-quality-data/town/SET_COUNTRY_NAME ';

const initialState = [];

const addTownsrequest = (payload) => ({
  type: ADD_TOWNS_REQUEST,
  payload,
});

const setCountryName = (payload) => ({
  type: SET_COUNTRY_NAME,
  payload,
});

const getTownDataSuccess = (payload) => ({
  type: GET_TOWNS_DATA_SUCCESS,
  payload,
});

export const addTowns = () => async (dispatch) => {
  try {
    dispatch(addTownsrequest());
    dispatch(setCountryName());
    const response = await fetch(api);
    const results = await response.json();
    const airData = {
      gasRate: results.list[0].components,
      rate: results.list[0].main.aqi,
    };
    dispatch(getTownDataSuccess(airData));
    return airData;
  } catch (err) {
    throw new Error(err);
  }
};

export const airPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOWNS_REQUEST:
      return [...state, action.payload];
    case GET_TOWNS_DATA_SUCCESS:
      return {
        ...state,
        countries: [...state, ...action.payload],
        wait: false,
      };
    case GET_TOWNS_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        wait: false,
      };
    case SET_COUNTRY_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
