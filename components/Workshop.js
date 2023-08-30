import React from 'react';

const Workshop = ({ workshop }) => {
  const { Name, Current, Max } = workshop.properties;
  return (
    <div>
      <h2>{Name.title[0].text.content}</h2>
      <p>Current Participants: {Current.number}</p>
      <p>Max Participants: {Max.number}</p>
    </div>
  );
};

export default Workshop;
