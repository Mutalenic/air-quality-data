import React from 'react';
import PropTypes from 'prop-types';

const Pollution = (props) => {
  const {
    co, no, no2, flag, name, lat, lng,
  } = props;
  return (
    <div className="pollution">
      <h3 className="airPollutionTest">{name}</h3>
      <div className="m-2">
        <img src={flag} alt="flag" />
      </div>
      <p className="text-warning">
        Air pollution ( μg/m3 ) stats - 2022:
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>gas</th>
            <th>μg/m3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>CO</th>
            <td>{co}</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">NO</th>
            <td>{no}</td>
          </tr>
          <tr className="table-warning">
            <th>NO2</th>
            <td>{no2}</td>
          </tr>
          <tr className="table-info">
            <th scope="row">NO2</th>
            <td>{no2}</td>
          </tr>
          <tr className="table-info">
            <th scope="row">{lat}</th>
            <td>{lng}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};
Pollution.propTypes = {
  co: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
  no2: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
};
export default Pollution;
