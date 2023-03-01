import React from 'react';
import '@/components/Loader/loader';

const Loader = () => {
  return (
    <div className='loader'>Loading...</div>
  )
}

export default React.memo(Loader);