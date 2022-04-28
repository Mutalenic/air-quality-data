import { ADD_COUNTRIES } from '../Actions/Countries';

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
