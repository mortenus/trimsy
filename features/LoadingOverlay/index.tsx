import React from 'react';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingOverlay;
