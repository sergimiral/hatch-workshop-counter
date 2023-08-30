import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, max }) => {
  const segments = Array.from({ length: 5 }, (_, i) => i < current);

  return (
    <div className={styles.progressBar}>
      {segments.map((isActive, i) => (
        <div
          key={i}
          className={`${styles.segment} ${isActive ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
