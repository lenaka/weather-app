import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchForm } from '../../components/SearchForm';
import { Card } from '../../components/Card';
import { getWeatherList } from '../../store/weather/selectors';
import { actions } from '../../store/actions';
import { Coords } from '../../types/city';
import { addStoredWeather, getStoredWeatherList, removeStoredWeather } from '../../utils/weather';

import styles from './index.module.css';

export const Main = () => {
  const dispatch = useDispatch();
  const weatherList = useSelector(getWeatherList);

  useEffect(() => {
    const storedList = getStoredWeatherList();

    if (storedList.length > 0) {
      storedList.map((item: Coords) => dispatch(actions.weather.fetchWeatherCity(item)));
    }
  }, []);

  const handleRemove = (coords: Coords) => {
    dispatch(actions.weather.removeWeatherCity(coords));
    removeStoredWeather(coords);
  }

  const handleAdd = (coords: Coords) => {
    dispatch(actions.search.removeCity(coords));
    dispatch(actions.weather.fetchWeatherCity(coords));
    addStoredWeather(coords);
  };

  return <>
    <h1 className={styles.h1}>Weather forecast</h1>
    <div className={styles.headContainer}>
      <div className="subtitle">Simple but powerful weather forecasting service based on OpenWeatherMap API</div>
      <SearchForm onAdd={handleAdd} />
    </div>
    <div className={styles.cardContainer}>{weatherList.map((card, i) =>
      <Card key={`${card.coords.lat}${card.coords.lon}${i}`} {...card} onRemove={handleRemove} />
    )}</div>
  </>;
};
