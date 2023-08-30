import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, max }) => {
  const segments = Array.from({ length: 5 }, (_, i) => i < current);

  const getSegmentColor = (index) => {
    if (index === 0) return styles.green;
    if (index < 3) return styles.yellow;
    return styles.red;
  };

  return (
    <div className={styles.progressBar}>
      {segments.map((isActive, i) => (
        <div
          key={i}
          className={`${styles.segment} ${isActive ? getSegmentColor(i) : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
