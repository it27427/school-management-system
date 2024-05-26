import React from 'react';
import Checkbox from './Checkbox';

const AddAttendance = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className='max-w-28'>
        <Checkbox checkTitle='Present' />
      </div>
      <div className='max-w-24'>
        <Checkbox checkTitle='Absent' />
      </div>
      <div className='max-w-44'>
        <Checkbox checkTitle='Absent With Apology' />
      </div>
    </div>
  );
};

export default AddAttendance;
