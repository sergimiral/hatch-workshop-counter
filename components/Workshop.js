import React from 'react';
import styles from './Workshop.module.css';
import ProgressBar from './ProgressBar';

const Workshop = ({ workshop }) => {
  const { Name, Current, Max } = workshop.properties;
  return (
    <div className={styles.workshop}>
      <h2>{Name.title[0].text.content}</h2>
      <ProgressBar current={Current.number} max={Max.number} />
      <p>Current Participants: {Current.number}</p>
      <p>Max Participants: {Max.number}</p>
    </div>
  );
};

export default Workshop;
