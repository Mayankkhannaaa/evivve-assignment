import React from 'react';

const ProgressDisplay = ({ status }) => {
  switch (status) {
    case 'completed':
      return <div className='bg-green-500 rounded-full h-2 w-2' />;
    case 'pending':
      return <div className='bg-red-500 rounded-full h-2 w-2' />;
    case 'in_progress':
      return <div className='bg-yellow-500 rounded-full h-2 w-2' />;
    default:
      <div className='bg-yellow-500 rounded-full h-2 w-2' />;
  }
};

export default ProgressDisplay;
