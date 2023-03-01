import React, { useEffect, useState, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import PickPointsMarker from '@/components/PickPoints/PickPointsMarker';
import { MAP_API_KEY } from '@/config';

const PickPointsMap = ({ items }) => {
  const [map, setMap] = useState(); 

  const onChange = useCallback((key, { lat, lng }) => {
    map.setCenter({lat, lng});
    map.setZoom(18);
  }, [map]);

  const onGoogleApiLoaded = useCallback(({ map, maps }) => {
    const newBoundary = new maps.LatLngBounds();

    setMap(map);

    items.forEach(e => {
      newBoundary.extend({
        lat: e.latitude,
        lng: e.longitude
      });
    });

    map.fitBounds(newBoundary);
  }, [items]);

  useEffect(() => {
    const item = items.filter(e => e.isActive)[0];

    if (item) {
      onChange(null, {
        lat: item.latitude,
        lng: item.longitude
      });
    }
  }, [items, onChange]);

  return (
    <div className='pick-points__map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_KEY }}
        defaultCenter={{ lat: 58.000054, lng: 103.000000 }}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={5}
        onChildClick={onChange}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {items.map(item => (
          <PickPointsMarker
            key={item.id}
            lat={item.latitude}
            lng={item.longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default React.memo(PickPointsMap);