// import { type } from '@testing-library/user-event/dist/type';

const api = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=9e828e2624199c7cbb9d9cde2d3b483c';

const ADD_TOWNS = 'air-quality-data/town/ADD_TOWNS';
const GET_TOWNS_SUCCESS = 'air-quality-data/town/GET_TOWNS_DATA_SUCCESS';
const GET_TOWNS_DATA_FAILED = 'air-quality-data/town/GET_TOWNS_DATA_FAILED';

// export const addTowns = () => (dispatch) => {
//   dispatch({
//     type: ADD_TOWNS,
//   });
//   loadPollutionData().then((results) => dispatch({
//     type: GET_TOWNS_SUCCESS,
//     payload: results,
//   })).catch((error) => dispatch({
//     type: GET_TOWNS_DATA_FAILED,
//     payload: error,
//   }));
// };

const initialState = [];

const getTownData = (payload) => ({
  type: ADD_TOWNS,
  payload,
});

export const addTowns = () => async (dispatch) => {
  try {
    const response = await fetch(api);
    const results = await response.json();

    const airData = {
      gasRate: results.list[0].components,
      rate: results.list[0].main.aqi,
    };

    dispatch(getTownData(airData));
    return airData;
  } catch (err) {
    throw new Error(err);
  }
};

export const airPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOWNS:
      return [...state, action.payload];
    case GET_TOWNS_SUCCESS:
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
    default:
      return state;
  }
};
