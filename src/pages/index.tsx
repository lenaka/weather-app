import React, { FC } from 'react';

import { Main } from './Main';
import { LogoHeader } from '../components/LogoHeader';
import styles from './index.module.css';
import './index.css';

export const App: FC = () => (
  <div className={styles.App}>
    <div className={styles.container}>
      <LogoHeader />
      <Main />
    </div>
  </div>
);
