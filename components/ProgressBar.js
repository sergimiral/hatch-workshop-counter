import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, max }) => {
  const segments = Array.from({ length: 5 }, (_, i) => i < current);

  const getSegmentColor = (isActive) => {
    if (!isActive) return '';
    if (current <= max / 5) return styles.green;
    if (current > max / 5 && current <= max * 3 / 5) return styles.yellow;
    if (current > max * 3 / 5) return styles.red;
  };

  return (
    <div className={styles.progressBar}>
      {segments.map((isActive, i) => (
        <div
          key={i}
          className={`${styles.segment} ${getSegmentColor(isActive)}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
