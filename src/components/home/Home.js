import React from 'react';

const Home = () => {
  

  return (
    <div>
      <div>
        <div>
        </div>
        <div>
          <span>
            {' '}
            {country.length !== 0 ? country[0].length : ' '} countries{' '}
          </span>
          <form>
            <select name="selected">
              <option value="Europe" defaultValue>
                {' '}
                Europe{' '}
              </option>
              <option value="Asia"> Asia</option>
              <option value="Oceania">Oceania </option>
              <option value="Americas"> Americas</option>
              <option value="Africa"> Africa</option>
            </select>
            <button type="submit"> Search Region</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
