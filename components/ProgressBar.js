import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, max }) => {
  const segments = Array.from({ length: 5 }, (_, i) => i < current);

  const getProgressBarColor = () => {
    if (current === 0) return styles.green;
    if (current < 3) return styles.yellow;
    return styles.red;
  };

  return (
    <div className={`${styles.progressBar} ${getProgressBarColor()}`}>
      {segments.map((isActive, i) => (
        <div
          key={i}
          className={`${styles.segment} ${isActive ? styles.filled : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
