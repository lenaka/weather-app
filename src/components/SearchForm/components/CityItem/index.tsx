import React, { FC } from 'react';
import cn from 'classnames';

import { City, Coords } from '../../../../types/city';

import icon from './assets/plus.svg';
import styles from './index.module.css';

type Props = City & {
  onClick: (coords: Coords) => void,
  isBordered: boolean,
};

export const CityItem: FC<Props> = ({
  name,
  lat,
  lon,
  country,
  state,
  isBordered,
  onClick
}) => {
  const handleClick = () => {
    onClick({ lat, lon });
  };

  const place = country + (state ? ` (${state})` : '');

  return <div className={styles.container}>
    <div className={cn(styles.item, { [styles.bordered]: isBordered })}>
      <div className={styles.city}>{name}, {place}</div>
      <div className={styles.coords}>{lat}, {lon}</div>
      <button className={styles.plus} typeof="button" onClick={handleClick}>
        <img src={icon} alt={`Add ${name}, ${place}`} />
      </button>
    </div>
  </div>;
};
