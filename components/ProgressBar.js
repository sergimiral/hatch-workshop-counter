import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, max }) => {
  const percentage = (current / max) * 100;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
