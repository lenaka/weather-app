import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Trash } from './components/Trash';
import { Weather } from '../../types/weather';
import { getWeatherImgUrl } from '../../utils/url';
import { getUpperCaseFirstLetterString } from '../../utils/string';
import { Details } from './components/Details';
import { Coords } from '../../types/city';
import { getWeatherByCoords } from '../../store/weather/selectors';

import styles from './index.module.css';
import { actions } from '../../store/actions';

type Props = Pick<Weather, 'coords'> & {
  onRemove: (coords: Coords) => void,
};

export const Card: FC<Props> = ({ coords, onRemove }) => {
  const dispatch = useDispatch();

  const {
    temperature,
    pressure,
    humidity,
    description,
    icon,
    wind,
    name,
    country,
  } = useSelector(getWeatherByCoords(coords));

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(actions.weather.fetchWeatherCity(coords));
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleRemove = () => onRemove(coords);

  return <div className={styles.container}>
    <div className={styles.bg}>
      <Trash className={styles.trash} onClick={handleRemove} />
      <div className={styles.city}>{name}{country && `, ${country}`}</div>
      <div className={styles.weatherContainer}>
        <div className={styles.temperature}>
          {temperature}<span>&deg;</span>C
        </div>
        {icon &&
          <div className={styles.weatherIcon}>
            <img src={ getWeatherImgUrl(icon)} />
          </div>
        }
      </div>
      <div className={styles.weatherDescription}>
        {getUpperCaseFirstLetterString(description)}
      </div>
      <Details
        className={styles.footerContainer}
        humidity={humidity}
        pressure={pressure}
        speed={wind.speed}
      />
    </div>
  </div>;
};
