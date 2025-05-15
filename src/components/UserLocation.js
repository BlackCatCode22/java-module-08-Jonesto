import React from 'react';

const UserLocation = ({ locationData }) => {
  if (!locationData) return null;
  const data = JSON.parse(locationData);

  return (
    <div>
      <h4>Location Info</h4>
      <p><strong>City:</strong> {data.location?.name}</p>
      <p><strong>Country:</strong> {data.location?.country}</p>
      <p><strong>Temperature:</strong> {data.current?.temp_c} °C</p>
      <p><strong>Condition:</strong> {data.current?.condition?.text}</p>
    </div>
  );
};

export default UserLocation;