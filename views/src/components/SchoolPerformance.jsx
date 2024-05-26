const SchoolPerformance = ({ schoolPerformanceData }) => {
  return (
    <div className='flex flex-col'>
      <p>Average Score: {schoolPerformanceData.averageScore}</p>
      <p>Total Student: {schoolPerformanceData.totalStudent}</p>
    </div>
  );
};

export default SchoolPerformance;
