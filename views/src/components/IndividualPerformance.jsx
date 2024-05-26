import React from 'react';

const IndividualPerformance = ({ student }) => {
  return (
    <>
      <p>
        <span className='font-bold'>{student.name}</span> : {student.score}
      </p>
    </>
  );
};

export default IndividualPerformance;
