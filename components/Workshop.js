import React from 'react';
import styles from './Workshop.module.css';
import ProgressBar from './ProgressBar';

const Workshop = ({ workshop }) => {
  const { Name, Current, Max } = workshop.properties;
  const getProgressBarLabel = () => {
    if (Current.number <= 2) return 'Moderate';
    if (Current.number === 3) return 'Full';
    if (Current.number === 4) return 'Very Full';
    return 'Packed';
  };

  return (
    <div className={styles.workshop}>
      <h2>{Name.title[0].text.content}</h2>
      <ProgressBar current={Current.number} max={Max.number} />
      <p>{getProgressBarLabel()}</p>
    </div>
  );
};

export default Workshop;
