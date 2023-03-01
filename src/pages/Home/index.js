import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deliveryFetch, deliveryChange } from '@/store/deliverySlice';
import LayoutDefault from '@/layouts/LayoutDefault';
import PickPoints from '@/components/PickPoints';

const Home = () => {
  const { items, pending, error } = useSelector(state => state.delivery);
  const dispatch = useDispatch();

  const onChange = useCallback((id) => {
    dispatch(deliveryChange(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(deliveryFetch());
  }, [dispatch]);

  return (
    <LayoutDefault>
      <div className='center'>
        <PickPoints
          items={items}
          pending={pending}
          error={error}
          onChange={onChange}
        />
      </div>
    </LayoutDefault>
  );
}

export default React.memo(Home);