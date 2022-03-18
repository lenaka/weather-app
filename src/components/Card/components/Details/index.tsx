import React, { FC } from 'react';
import cn from 'classnames';

import { ClassName } from '../../../../types/className';
import styles from './index.module.css';
import { WindItem, Weather } from '../../../../types/weather';

type Props = Pick<WindItem, 'speed'> & Pick<Weather, 'humidity' | 'pressure'> & ClassName;

export const Details: FC<Props> = ({ className, speed, humidity, pressure }) => {
  return <div className={cn(styles.container, className)}>
    <div className={styles.itemWind} title="Wind speed">{speed} m/s</div>
    <div className={styles.itemHumidity} title="Humidity value">{humidity} %</div>
    <div className={styles.itemPressure} title="Pressure value">{pressure} hPa</div>
  </div>;
};
