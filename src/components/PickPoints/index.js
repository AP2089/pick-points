import React from 'react';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import PickPointsList from '@/components/PickPoints/PickPointsList';
import PickPointsMap from '@/components/PickPoints/PickPointsMap';
import '@/components/PickPoints/pick-points';

const PickPoints = ({ items, pending, error, onChange }) => {
  if (pending) {
    return <Loader />
  }

  if (error) {
    return (
      <Message
        type='error'
        message={error}
      />
    )
  }

  return (
    <div className='pick-points'>
      <PickPointsList
        items={items}
        onChange={onChange}
      />

      <PickPointsMap
        items={items}
      />
    </div>
  );
}

export default React.memo(PickPoints);