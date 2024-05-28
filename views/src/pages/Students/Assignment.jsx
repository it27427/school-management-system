import { useRef } from 'react';
// import { Bar } from 'react-chartjs-2';

import Card from '@/components/Card';
import StudentLayout from '@/layouts/StudentLayout';

const Assignment = () => {
  const chartRef = useRef();

  const examResultsData = {
    subjects: ['English', 'Math', 'Physics', 'Chemistry', 'History'],
    marks: [80, 75, 90, 85, 70],
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        labels: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: '1',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.marks,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        // type: 'linear',
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <StudentLayout>
      <>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Exam Results</h2>

          <div className='grid md:grid-cols-3 gap-4'>
            <ul>
              {examResultsData.subjects.map((subject, index) => (
                <li key={index} className='flex items-center'>
                  <h3>{subject} : </h3>
                  <p> Score: {examResultsData.marks[index]} %</p>
                </li>
              ))}
            </ul>
            <Card>
              {/* <Bar ref={chartRef} data={barChartData} options={chartOptions} /> */}
            </Card>
          </div>
        </div>
      </>
    </StudentLayout>
  );
};

export default Assignment;
