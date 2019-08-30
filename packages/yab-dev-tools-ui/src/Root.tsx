import React from 'react';

import { x } from 'yab-dev-tools-api';

import styles from './Root.less';

export const Root = () => {
  return <div className={styles.a}>Root: {x}</div>;
};
