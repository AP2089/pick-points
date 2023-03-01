import React from 'react';
import '@/components/Message/message';

const Message = ({ type, message }) => {
  return (
    <div className={`message-${type}`}>{ message }</div>
  )
}

export default React.memo(Message);