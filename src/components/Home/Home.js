const Home = () => (
  <>
    <h1>Falcon 1</h1>
    <p>
      Countries
    </p>
    <form>
      <select>
        <option value="Africa" defaultValue>
          {' '}
          Africa
          {' '}
        </option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button type="submit">Search Region</button>
    </form>
  </>
);
export default Home;
