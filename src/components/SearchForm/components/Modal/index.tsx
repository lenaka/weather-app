import React, { FC } from 'react';

import { Cities, City, Coords } from '../../../../types/city';
import { CityItem } from '../CityItem';
import { Spinner } from '../../../Spinner';

import styles from './index.module.css';

type Props = {
  cities: Cities,
  isLoading: boolean,
  isLoaded: boolean,
  onAdd: (coords: Coords) => void,
  word: string | null,
};

export const Modal: FC<Props> = ({ cities, isLoading, isLoaded, onAdd, word }) => {
  if (!isLoading && isLoaded && cities.length === 0) {
    return <div className={styles.noContainer}>
      <div className={styles.noTitle}>City called “{word}” was not found</div>
      <div className={styles.noDescription}>Try different city name</div>
    </div>;
  }

  if (isLoading) {
    return <Spinner className={styles.spinner} />;
  }

  return <>
    {cities.map((city: City, i: number) => {
      return <>
        <CityItem
          key={`${city.id}${i}`}
          {...city}
          onClick={onAdd}
          isBordered={i < cities.length - 1}
        />
      </>;
    })}
  </>;
};
