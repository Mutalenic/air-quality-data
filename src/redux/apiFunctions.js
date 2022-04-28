export const fetchCountries = async (reg) => {
    const res = await fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json());
    const result = res.filter((country) => country.region === reg);
    return result;
  };
  
  const url = 'https://api.openweathermap.org/data/2.5/air_pollution?';
  const id = '6574f405463f1e3a64b32c567ddd4bc8';
  
  export const getPollutionInfor = async (lat, lon) => {
    const res = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${id}`);
    return res.json();
  };
  