import React from 'react';

import logo from './assets/logo.svg';
import styles from './index.module.css';

export const LogoHeader = () => {
  return <div className={styles.container}>
    <div className={styles.logo}><img src={logo} alt="Weather App Logo" /></div>
  </div>;
};
