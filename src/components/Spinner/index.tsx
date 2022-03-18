import React, { FC } from 'react';
import cn from 'classnames';

import { ClassName } from '../../types/className';

import styles from './index.module.css';
import icon from './assets/spinner.svg';

type Props = ClassName;

export const Spinner: FC<Props> = ({ className }) => {
  return <div className={cn(styles.container, className)}>
    <img src={icon} alt="Loading..." />
  </div>;
};
