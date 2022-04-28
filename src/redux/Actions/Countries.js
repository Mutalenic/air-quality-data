import { fetchCountries } from '../apiFunctions';

export const ADD_COUNTRIES = 'air-quality-data/Countries/ADD_COUNTRIES';

export const addCountries = (payload) => ({
  type: ADD_COUNTRIES,
  payload,
});

export const getCountries = (reg) => async (dispatch) => {
  const countries = await fetchCountries(reg);
  dispatch({
    type: ADD_COUNTRIES,
    payload: countries.map((country) => ({
      name: country.name,
      region: reg,
      latlng: country.latlng,
      population: country.population,
      code: country.cca2,
      flag: country.flags.png,
    })),
  });
};
