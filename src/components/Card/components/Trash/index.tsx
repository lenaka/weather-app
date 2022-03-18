import React, { FC } from 'react';
import cn from 'classnames';

import { ClassName } from '../../../../types/className';
import icon from './assets/icon.svg';
import styles from './index.module.css';

type Props = ClassName & {
  onClick: () => void,
};

export const Trash: FC<Props> = ({ className, onClick }) => (
  <button className={cn(styles.container, className)} onClick={onClick}>
    <img src={icon} alt="Remove" />
  </button>);
