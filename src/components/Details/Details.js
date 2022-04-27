import React from 'react';
import { useSelector } from 'react-redux';

const townDetails = () => {
  const airRiskRate = (rate) => {
    switch (rate) {
      case 1:
        return 'Good';

      case 2:
        return 'Fair';
      case 3:
        return 'Moderate';

      case 4:
        return 'Poor';

      case 5:
        return 'Very Poor';

      default:
        return 'Unknown';
    }
  };

  const gasVolume = useSelector((state) => state.pollution);
  const { gas } = gasVolume;

  const storeTest = gas.length !== 0;

  const airRate = storeTest ? airRiskRate(gas[0].rate) : ' ';

  const gasContent = storeTest
    ? gas.map((item, index) => (
        <div key={index} className={town.table_container}>
          <div className="townGasData">
            {' '}
            <div className="townSpace"> Carbon monoxide ( CO ) </div>{' '}
            {item.gasRate.co}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace">
              {' '}
              Ammonia ( NH <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.nh3}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace"> Nitrogen monoxide ( NO )</div>{' '}
            {item.gasRate.no}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace">
              {' '}
              Nitrogen dioxide ( NO <sub>2</sub> ){' '}
            </div>{' '}
            {item.gasRate.no2}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace">
              {' '}
              Ozone ( O <sub>3</sub> ){' '}
            </div>{' '}
            {item.gasRate.pm2_5}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace">
              {' '}
              Fine particles matter( PM2_5 )
            </div>{' '}
            {item.gasRate.pm10}{' '}
          </div>
          <div className="townGasData">
            {' '}
            <div className="townSpace">
              {' '}
              Coarse particulate matter ( PM_10 )
            </div>{' '}
            {item.gasRate.so2}
          </div>
        </div>
      ))
    : 'Country data is not yet avialable on server !';
  return (
    <div className="town">
      <div className="gasData">
        {' '}
        <span className="gasVolume">{gasVolume.name}</span> air
        pollution ( μg/m3 ) stats - 2022
      </div>
      <div className="towngrid">
        <div className="gasContent">{gasContent}</div>
      </div>
      <div className="riskRate">
        Rate: {storeTest ? airRate : 'Unknown'}
      </div>
    </div>
  );
};

export default townDetails;
