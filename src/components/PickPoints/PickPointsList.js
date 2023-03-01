import React from 'react';

const PickPointsList = ({ items, onChange }) => {
  return (
    <div className='pick-points__list'>
      {items.map(item => (
        <div
          className={`pick-points__item ${item.isActive ? 'active' : ''}`}
          key={item.id}
          onClick={() => onChange(item.id)}
        >
          <div className='pick-points__title'>{ item.address }</div>

          {item.budgets.length > 0 &&
          <div className='pick-points__options'>
            {item.budgets.map(budget => (
              <div className='pick-points__option' key={budget}>{ budget }</div>
            ))}
          </div>}
        </div>
      ))}
    </div>
  );
}

export default React.memo(PickPointsList);