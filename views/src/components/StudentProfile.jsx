import React from 'react';

const StudentProfile = ({ profileInfo }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Name</h2>
        <p className='text-md font-medium'>{profileInfo.name}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Age</h2>
        <p className='text-md font-medium'>{profileInfo.age}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Grade</h2>
        <p className='text-md font-medium'>{profileInfo.grade}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>School</h2>
        <p className='text-md font-medium'>{profileInfo.school}</p>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>Email Address</h2>
        <p className='text-md font-medium'>{profileInfo.email}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
