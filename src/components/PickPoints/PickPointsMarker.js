import React from 'react';

const PickPointsMarker = ({ lat, lng }) => {
  return (
    <div
      className='pick-points__marker'
      lat={lat}
      lng={lng}
    ></div>
  );
}

export default React.memo(PickPointsMarker);