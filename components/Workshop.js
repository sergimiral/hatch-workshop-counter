import React from 'react';

const Workshop = ({ workshop }) => {
  return (
    <div>
      <h2>{workshop.title}</h2>
      <p>{workshop.description}</p>
    </div>
  );
};

export default Workshop;
