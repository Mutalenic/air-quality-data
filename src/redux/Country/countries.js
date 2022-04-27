const ADD_COUNTRIES = 'air-quality-data/town/ADD_COUNTRIES';
const GET_COUNTRIES_SUCCESS = 'air-quality-data/town/GET_COUNTRIES_SUCCESS ';
const GET_COUNTRIES_FAILED = 'air-quality-data/town/GET_COUNTRIES_FAILED';

const initialState = {
  loading: false,
  country: [],
  error: ' ',
};

const addCountries = () => ({
  type: ADD_COUNTRIES,
});

const getCountriesSuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

const getCountriesFailed = (payload) => ({
  type: GET_COUNTRIES_FAILED,
  payload,
});

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        loading: false,
        country: [action.payload],
        error: ' ',
      };
    case GET_COUNTRIES_FAILED:
      return {
        loading: false,
        country: [],
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export const getCountries = (region = 'europe') => async (dispatch) => {
  try {
    dispatch(addCountries());
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
    );
    const data = await response.json();

    const result = data.map((item) => ({
      name: item.name.common,
      latlag: item.latlng,
    }));
    dispatch(getCountriesSuccess(result));
  } catch {
    getCountriesFailed('error');
  }
};

export default countriesReducer;
